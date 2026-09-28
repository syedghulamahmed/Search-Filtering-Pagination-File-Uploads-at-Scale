# Offset vs cursor pagination

This task uses offset pagination because the seeded catalog is 220 records and the UI needs page numbers. skip=(page-1)*limit and take=limit map directly to the API contract.

Cursor pagination is better for very large or frequently changing feeds because deep OFFSET scans can become expensive and page boundaries can shift under writes. A future cursor endpoint can use (createdAt,id) as a stable cursor.
