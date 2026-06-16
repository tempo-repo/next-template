#!/usr/bin/env bash
set -e

print-ok() {
  echo "✅ $1"
}

yarn install --frozen-lockfile
print-ok "Installed Yarn deps"

yarn build
print-ok "App can be built"

yarn lint --max-warnings=0
print-ok "Lint is OK"

yarn vitest run --coverage
print-ok "Unit testing does not fail"

yarn build-storybook
print-ok "Storybook can be built"
