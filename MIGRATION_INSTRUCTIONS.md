# Migration Instructions

## Fix for PersonalInfo phoneNumber and email fields

The migration file has been updated to properly add `phoneNumber` and `email` fields to the `personal_info` table.

### Steps to apply:

1. **Make sure your database is running**
   ```bash
   # Check if PostgreSQL is running
   # Start your database if needed
   ```

2. **Run the migration**
   ```bash
   cd /Users/salman/Development/salon-x/contactx-server
   npx prisma migrate deploy
   ```
   
   Or if you want to create a new migration:
   ```bash
   npx prisma migrate dev --name add_phone_email_to_personal_info
   ```

3. **Regenerate Prisma Client**
   ```bash
   npx prisma generate
   ```

4. **Restart your server**
   ```bash
   npm run dev
   ```

### What the migration does:

- Makes `firstName`, `lastName`, `jobTitle` nullable (to match schema)
- Adds `phoneNumber` as required field (NOT NULL, UNIQUE)
- Adds `email` as optional field (nullable, UNIQUE)
- Adds other optional fields: `company`, `image`, `logo`, `note`, `banner`, `profile_img`
- Handles existing data by deleting records without phoneNumber (since it's required)

### Important Notes:

- If you have existing `personal_info` records without `phoneNumber`, they will be deleted by this migration
- Make sure to backup your database before running the migration
- The `phoneNumber` field is required and unique, so all new cards must have a phoneNumber

