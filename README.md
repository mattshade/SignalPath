# SignalPath

SignalPath is a **pnpm monorepo** for the SignalPath product site and supporting backend pieces: a **Vite + React** marketing experience (`artifacts/signalpath`), an optional **Express API** with **PostgreSQL** via Drizzle, shared **OpenAPI-driven** clients and **Zod** schemas, and a **mockup sandbox** for rapid UI previews.

This repository mirrors the same architectural patterns as sibling workspaces (shared catalog dependencies, TypeScript project references, Orval code generation, root **Vitest** for unit tests).

## Requirements

- **Node.js** (LTS; modern `fetch` / `Response` APIs are assumed for the HTTP client and tests)
- **pnpm** (the root `preinstall` script rejects npm/yarn to keep a single lockfile story)
- **PostgreSQL** when using `@workspace/db`, `drizzle-kit`, or any server path that opens a database connection

## Quick start

```bash
git clone https://github.com/mattshade/SignalPath.git
cd SignalPath
pnpm install
```

| Command | Description |
| ------- | ----------- |
| `pnpm run typecheck` | `tsc --build` for `lib/*` plus `typecheck` in `artifacts/*` and `scripts` where defined |
| `pnpm run build` | Full typecheck, then `build` in every package that defines it |
| `pnpm test` | Runs **Vitest** from the repo root (see [Testing](#testing)) |
| `pnpm run typecheck:libs` | Typechecks only the referenced libraries under `lib/` |

## Repository layout

### Shared libraries (`lib/`)

| Package | Name | Role |
| ------- | ---- | ---- |
| `lib/api-spec` | `@workspace/api-spec` | OpenAPI 3.1 spec (`openapi.yaml`) and **Orval** configuration. **Do not change** `info.title` from `Api` without updating import paths in the Orval config. |
| `lib/api-client-react` | `@workspace/api-client-react` | Generated React Query client + hand-written `customFetch` (base URL, bearer auth, response parsing, `ApiError` / `ResponseParseError`). |
| `lib/api-zod` | `@workspace/api-zod` | Generated Zod schemas from the same OpenAPI document (used for server-side validation). |
| `lib/db` | `@workspace/db` | Drizzle ORM + PostgreSQL pool and schema. **Requires `DATABASE_URL`** when the module is loaded. |

**Regenerate clients and schemas** after editing the spec:

```bash
pnpm --filter @workspace/api-spec run codegen
```

### Applications (`artifacts/`)

| Directory | Package | Description |
| --------- | -------- | ----------- |
| `artifacts/signalpath` | `@workspace/signalpath` | Main **SignalPath** site (Vite, React, wouter, Radix, Tailwind). Dev server listens on `0.0.0.0` by default. |
| `artifacts/mockup-sandbox` | `@workspace/mockup-sandbox` | Vite sandbox with a plugin that indexes mockup components for preview. |
| `artifacts/api-server` | `@workspace/api-server` | Express 5 API under `/api`, esbuild bundle, **requires `PORT`**. |

Example dev flows:

```bash
pnpm --filter @workspace/signalpath run dev
pnpm --filter @workspace/mockup-sandbox run dev
```

### Scripts (`scripts/`)

Sample utility scripts (e.g. `pnpm --filter @workspace/scripts run hello`).

## Testing

Tests run from the **repository root** via Vitest (`vitest.config.ts`). Suites live beside source as `*.test.ts` under:

- `lib/*/src/**/*.test.ts`
- `artifacts/*/src/**/*.test.ts`
- `scripts/**/*.test.ts`

Generated folders matching `**/generated/**` are excluded from discovery.

High-value coverage includes **`customFetch`** (stubbed global `fetch`) and **`cn()`** class-name helpers in app bundles.

```bash
pnpm test
pnpm test:watch   # watch mode
```

## Environment variables

| Variable | Consumers | Notes |
| -------- | --------- | ----- |
| `DATABASE_URL` | `@workspace/db`, Drizzle config, API server paths using the db package | PostgreSQL connection URI |
| `PORT` | `artifacts/api-server` | **Required** at process start; must parse to a positive integer |

## API contract

- **Specification**: `lib/api-spec/openapi.yaml` (for example `GET /api/healthz` and `HealthStatus`).
- **Server**: routes are mounted at `/api` in the Express app.
- **Clients**: Orval uses `baseUrl: "/api"` so generated calls align with the server mount.

## TypeScript and pnpm

- Root `tsconfig.json` references `lib/db`, `lib/api-client-react`, and `lib/api-zod`.
- Shared dependency versions are pinned in **`pnpm-workspace.yaml`** `catalog:` entries.
- The workspace enforces a **minimum npm release age** for installed packages; see `pnpm-workspace.yaml` for rationale and allowlists.

## License

MIT (see `package.json`).
