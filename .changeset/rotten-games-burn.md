---
'@backstage/plugin-techdocs': patch
---

Modify inline tech docs search to conform to the pattern in site wide search. Use entity name as the filter to circumvent casing issues and case-sensitive comparison on Postgres DB.
