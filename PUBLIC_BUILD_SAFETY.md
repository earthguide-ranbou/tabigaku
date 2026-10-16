# Public build secret checks

`npm run build` runs the source/public check before Vite and checks the final
`dist/public` after all SEO and journey-flow generation. Vercel uses this command.
The checks are explicit steps in `build`, not optional package-manager lifecycle
hooks. A failed check exits nonzero and blocks that build.

- `npm run check:public-source`: inspect client source, shared source, entry HTML,
  and public assets.
- `npm run check:public-output`: inspect the complete final public directory.
- `npm run test:public-secrets`: run dependency-free synthetic tests.

Checks cover recognizable provider tokens, private-key headers, authenticated
database URLs, browser-prefixed secret environment references, common hardcoded
secret assignments, and matching sensitive build-environment values (including
URL/JSON escaping and base64 encoding). Public directories additionally reject private dotfiles,
credential files, database dumps, source maps, backups and archives. Symlinks, unsupported
file types, missing inputs and read failures fail closed. Every regular file is
read, including binary assets, with bounded-memory chunk overlap. Diagnostics
contain only fixed rule identifiers, never matched values or filenames.

This is defense in depth, not proof that every possible secret is absent.
Unrecognized, obfuscated, encrypted, or arbitrary runtime-fetched secrets may
not match. Keep secrets out of browser code and public assets. A public-prefixed
environment variable is not a safe place for a credential. If a check blocks a
legitimate change, investigate its source; do not disable the release check.
Running Vite directly or deploying prebuilt files outside this build command
bypasses this gate and is not a supported release workflow.

The unused Forge-backed Map component was removed after checking that no other
source imports or uses it. Existing public routes, content and server-only
configuration are unchanged. No credential rotation or account settings change
is part of this patch.

The scanner does not inspect Git history, rotate any keys, verify hosted form
providers or prove that deployed resources are safe. Public contact/bank details
are permitted. Secret-looking browser environment names are blocked; ordinary
published identifiers (for example a public project ID) are not automatically
credentials. Provider-token patterns are conservative and any match needs review.
