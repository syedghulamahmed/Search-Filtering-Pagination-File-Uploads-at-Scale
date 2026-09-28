# File upload security

1. Server-side validation: Multer limits uploads to 2MB, then the backend checks magic bytes. Resumes must be PDF; logos must be PNG/JPEG. Logos are capped at 1MB. Invalid files return 422.
2. Safe generated filenames: original client filenames are discarded. Storage uses crypto.randomUUID plus a fixed extension, preventing path traversal and collisions.
3. Ownership enforcement: the authenticated JWT identity is compared with the target Student.userId or Company.userId before updating the stored URL.

A storage adapter isolates local disk storage so object storage can replace it later without changing route behavior.
