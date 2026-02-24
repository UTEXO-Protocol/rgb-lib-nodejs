# Release Workflows

## Workflows

### `release.yml` — Build and Release
Standard release from `utexo-master` branch. Triggered automatically by `rgb-lib` release or manually.

**Usage:** Actions → Build and Release → Run workflow → enter rgb-lib version (e.g. `v0.3.0-beta.10`)

### `release-branch.yml` — Release from Branch
Build and release from any branch with a custom version suffix.

**Usage:** Actions → Release from Branch → select branch → enter base version + suffix

**Example:** version `0.3.0-beta.10` + suffix `bindings_begin_end` → npm version `0.3.0-beta.10.bindings.begin.end`

> Note: npm requires valid semver, so dashes in suffix are converted to dots automatically.

## npm Publishing

- Standard releases publish with `latest` tag
- Branch releases publish with suffix as tag (won't override `latest`)

Install standard: `npm install @utexo/rgb-lib`
Install branch: `npm install @utexo/rgb-lib@0.3.0-beta.10.bindings.begin.end`

## Platforms

| Platform | Package |
|----------|---------|
| Linux x64 | `@utexo/rgb-lib-linux-x64` |
| Linux ARM64 | `@utexo/rgb-lib-linux-arm64` |
| macOS ARM64 | `@utexo/rgb-lib-darwin-arm64` |