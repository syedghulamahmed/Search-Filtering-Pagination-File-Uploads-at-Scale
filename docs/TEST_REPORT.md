# Verification report

Static implementation checks: server-side where/orderBy/skip/take; search across title and related company name; pagination metadata; 400ms debounce; skeleton loading; empty state; Multer multipart handling; magic-byte validation; UUID filenames; JWT ownership checks; Prisma indexes.

Runtime note: live PostgreSQL, multipart storage and EXPLAIN ANALYZE require a configured database. This report does not claim execution that has not been performed. The repository includes seed, migration, SQL evidence queries and Postman requests for reproduction.