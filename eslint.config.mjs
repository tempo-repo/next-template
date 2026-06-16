// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript';
import checkFile from 'eslint-plugin-check-file';
import storybook from 'eslint-plugin-storybook';
import { defineConfig, globalIgnores } from 'eslint/config';

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    '.next/**',
    'out/**',
    'build/**',
    'next-env.d.ts',
    'coverage',
    'src/stories/**',
    'storybook-static/**',
  ]),
  {
    rules: {
      '@typescript-eslint/no-namespace': 'off',

      // Configure typescript-eslint
      '@typescript-eslint/consistent-type-imports': 'error',
    },
  },
  ...storybook.configs['flat/recommended'],
  {
    name: 'Tests file placement convention',
    plugins: {
      'check-file': checkFile,
    },
    rules: {
      'check-file/folder-match-with-fex': [
        'error',
        {
          // Ensure .test.ts and .test.tsx files live ONLY in a __tests__ folder
          '**/*.test.{ts,tsx}': '**/__tests__/',
        },
      ],
    },
  },
]);

export default eslintConfig;
