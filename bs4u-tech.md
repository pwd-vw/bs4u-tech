;;
;; Domain:     bs4u-tech.com.
;; Exported:   2026-02-26 13:53:43
;;
;; This file is intended for use for informational and archival
;; purposes ONLY and MUST be edited before use on a production
;; DNS server.  In particular, you must:
;;   -- update the SOA record with the correct authoritative name server
;;   -- update the SOA record with the contact e-mail address information
;;   -- update the NS record(s) with the authoritative name servers for this domain.
;;
;; For further information, please consult the BIND documentation
;; located on the following website:
;;
;; http://www.isc.org/
;;
;; And RFC 1035:
;;
;; http://www.ietf.org/rfc/rfc1035.txt
;;
;; Please note that we do NOT offer technical support for any use
;; of this zone data, the BIND name server, or any other third-party
;; DNS software.
;;

;; A Records
bs4u-tech.com.	1	IN	A	216.239.38.21 ; blogger.com cf_tags=cf-proxied:true
bs4u-tech.com.	1	IN	A	216.239.36.21 ; blogger.com cf_tags=cf-proxied:true
bs4u-tech.com.	1	IN	A	216.239.32.21 ; cf_tags=cf-proxied:true
bs4u-tech.com.	1	IN	A	216.239.34.21 ; blogger.com cf_tags=cf-proxied:true

;; AAAA Records
bs4u-tech.com.	1	IN	AAAA	2606:4700:3036::6815:11ba ; cf_tags=cf-proxied:true
bs4u-tech.com.	1	IN	AAAA	2606:4700:3035::ac43:b212 ; cf_tags=cf-proxied:true

;; CNAME Records
blog.bs4u-tech.com.	1	IN	CNAME	ghs.google.com. ; popwandee.blogspot.com cf_tags=cf-proxied:true
dounbixuukky.bs4u-tech.com.	1	IN	CNAME	gv-cdxqcgbhrn57vh.dv.googlehosted.com. ; popwandee.blogspot.com cf_tags=cf-proxied:true
www.bs4u-tech.com.	1	IN	CNAME	ghs.google.com. ; cf_tags=cf-proxied:true

;; MX Records
bs4u-tech.com.	1	IN	MX	1 smtp.google.com.

;; TXT Records
bs4u-tech.com.	1	IN	TXT	"v=spf1 include:_spf.google.com ~all"
google._domainkey.bs4u-tech.com.	1	IN	TXT	"v=DKIM1; k=rsa; p=MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA0Nn52CnvyKpy1838OvDjnfVwRZWtLbZMopWDD2nCMw94OrumSlAMVNRXwZvaikmla70ok+VY3iT8pd+Or1Wo2iOoJIM2nE52lYxeTqDxz8XiM58QsLxz3Bwqcf8zb4Js7bckLE//Mq1GnbyvSZvcXMX5Sk+h+zZXEmgVm45dW6smYeJmgk+j7Z6+LRkyIlqxj" "R0b7SfHbZ6cQ/hV8/iGg7eKcnFilcNfsdVXFr6eN5W1X207WusQOKn0hu6DdlOnCvaqA4bPL8rY1lOGmTMbZrtT1qrU4p+1xTlLujbDim7pp2nTx4MhS1iT+YGnryJy5tLztP64nI44qK3vOqIC6QIDAQAB"
