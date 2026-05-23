# AGENTS.md — mg-web2026

This file is read by the Spark `coding_run` agent before every task. The agent
fails closed if it's missing or unparseable. Update only via human-reviewed PR.

## Test command

```
npx tsc --noEmit && npx next lint
```

Phase 1 keeps this fast and deterministic. A full `npm test` rollup that adds
the critical Playwright subset will land in a follow-up PR.

## Allowed paths

The agent may edit files matching ANY of these globs:

- `src/components/**`
- `src/app/**`
- `src/lib/**`
- `src/data/**`
- `tests/**`
- `public/**`
- `docs/**`

## Denied paths

HARD STOP. The agent never edits these, never auto-merges PRs that touch them:

- `AGENTS.md`
- `next.config.ts`
- `tailwind.config.ts`
- `tsconfig.json`
- `postcss.config.mjs`
- `sentry.client.config.ts`
- `sentry.server.config.ts`
- `sentry.edge.config.ts`
- `src/instrumentation.ts`
- `src/lib/auth/**`
- `package.json`
- `package-lock.json`
- `.env*`
- `.github/workflows/**`
- `scripts/**`

## Commit message format

```
[MED-<id>] <imperative summary, ≤72 chars>

<wrapped body explaining WHY, not WHAT. Reference the ticket intent.>

Linear: https://linear.app/mediagarcia/issue/MED-<id>
Spark-run: https://spark-8466.tail96e2fb.ts.net/tasks/<task-id>/live
```

## PR description template

```
## Summary
<one paragraph>

## Why
<motivation, linked to ticket>

## Files changed
<bullet list with one-line per file>

## Test plan
- [x] `npx tsc --noEmit && npx next lint` passed locally on Spark
- [ ] Manual verification (if applicable)

## Rollback
Reply `/revert` on Linear ticket MED-<id> to revert this merge.
```

## How to undo a bad merge

Post `/revert` as a comment on the Linear ticket. The agent will open a
revert PR within 2 minutes (once the rollback feature lands in phase 1
step 14).

Until then: revert via `gh pr revert <N>` or revert the merge commit
manually and open a normal PR.
