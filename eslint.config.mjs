import codex from 'eslint-config-codex';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default [
  ...codex,
  {
    languageOptions: {
      parserOptions: {
        project: path.resolve(__dirname, 'tsconfig.json'),
      },
    },
    rules: {
      'object-curly-spacing': ['error', 'always'],
      '@typescript-eslint/no-empty-interface': 'off',
      '@typescript-eslint/no-empty-object-type': ['error', { allowInterfaces: 'always' }],
      '@typescript-eslint/naming-convention': [
        'error',
        {
          selector: 'property',
          filter: {
            regex: '^_id$',
            match: true,
          },
          format: null,
        },
      ],
    },
  },
];

