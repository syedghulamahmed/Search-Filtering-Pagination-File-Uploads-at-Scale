# Search, Filtering, Pagination & File Uploads at Scale

NeuroFive Solutions Week 4 project. PostgreSQL/Prisma + React implementation with server-side search/filter/sort/pagination and secure multipart uploads.

Features: 220 seeded records, 400ms debounced search, loading skeletons, empty state, 1MB logos, 2MB PDF resumes, magic-byte validation, UUID storage names, JWT ownership checks, Prisma indexes, OpenAPI, Postman, EXPLAIN ANALYZE scripts.

Demo: company@example.com / DemoPass1! ; student@example.com / DemoPass1!

Setup: create PostgreSQL, copy backend/.env.example to backend/.env, run npm install, prisma migrate deploy, npm run seed, npm run dev in backend; run npm install && npm run dev in frontend.

Offset pagination is intentional for the 220-row page-number catalog. Cursor trade-offs are documented in docs/pagination.md.

Run docs/explain-before.sql and docs/explain-after.sql against the same database and paste real output into docs/explain-evidence.md; benchmark numbers are not fabricated.