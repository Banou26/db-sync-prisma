import globals from "globals"
import pluginJs from "@eslint/js"
import tseslint from "typescript-eslint"

/** @type {import('eslint').Linter.Config[]} */
export default [
  {files: ["**/*.{js,mjs,cjs,ts}"]},
  {languageOptions: { globals: globals.node }},
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    plugins: {
      "@ts-safeql/eslint-plugin": {
        // exclude `parserOptions` if you are not using TypeScript
        parserOptions: {
          project: './tsconfig.json',
        },
        rules: {
          '@ts-safeql/check-sql': [
            'error',
            {
              connections: [
                {
                  connectionUrl: process.env.FKN_SWAP_POSTGRES_CONNECTION_STRING,
                  // The migrations path:
                  migrationsDir: './prisma/migrations',
                  targets: [
                    // This makes `prisma.$queryRaw` and `prisma.$executeRaw` commands linted
                    { tag: 'prisma.+($queryRaw|$executeRaw)', transform: '{type}[]' },
                  ]
                }
              ]
            }
          ]
        }
      }
    },
  }
]
