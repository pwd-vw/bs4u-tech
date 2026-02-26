/**
 * Image filter API — runs on Cloudflare Pages Functions.
 * Uses @cf-wasm/photon (Photon WASM) for grayscale, sepia, blur, edge.
 * POST /api/filter with formData: image (file), filter (string).
 */

// @ts-ignore — Cloudflare Workers/Pages resolve workerd entry
import {
  PhotonImage,
  grayscale,
  sepia,
  gaussian_blur,
  edge_detection,
} from "@cf-wasm/photon/workerd";

const MAX_SIZE = 4 * 1024 * 1024; // 4MB to stay within Worker memory

export const onRequestPost: PagesFunction = async (context) => {
  try {
    const formData = await context.request.formData();
    const file = formData.get("image") as File | null;
    const filterName = (formData.get("filter") as string) || "none";

    if (!file || !(file instanceof File)) {
      return new Response("Missing or invalid image file", { status: 400 });
    }

    if (file.size > MAX_SIZE) {
      return new Response("Image too large (max 4MB)", { status: 413 });
    }

    const bytes = new Uint8Array(await file.arrayBuffer());
    let img = PhotonImage.new_from_byteslice(bytes);

    try {
      switch (filterName) {
        case "grayscale":
          grayscale(img);
          break;
        case "sepia":
          sepia(img);
          break;
        case "blur":
          gaussian_blur(img, 3);
          break;
        case "edge":
          edge_detection(img);
          break;
        case "none":
          break;
        default:
          img.free();
          return new Response("Unknown filter", { status: 400 });
      }

      const outBytes = img.get_bytes();
      img.free();
      return new Response(outBytes, {
        headers: {
          "Content-Type": "image/png",
          "Cache-Control": "no-store",
        },
      });
    } catch (e) {
      img.free();
      throw e;
    }
  } catch (err) {
    const message = err instanceof Error ? err.message : "Processing failed";
    return new Response(message, { status: 500 });
  }
};
