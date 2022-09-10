#!/usr/bin/env bash

set -e

echo "Beginning E2E Test..."

failed=0
test_dir=e2e-tmp

npm run build || failed=1
npm run start -- 'https://tokybook.com/tales-from-earthsea/' $test_dir 1> /dev/null || failed=1

rm -rf $test_dir || true

if [ $failed -eq 1 ]; then
  echo "E2E failed."
  exit 1
fi

echo "E2E passed."
exit 0

