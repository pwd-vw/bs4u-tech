declare global {
  type PagesFunction = (
    context: { request: Request; env: Record<string, unknown>; [k: string]: unknown }
  ) => Promise<Response> | Response;
}
export {};
