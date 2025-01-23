module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'unused-imports'],
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      typescript: {},
    },
  },
  ignorePatterns: ['.next/*', 'node_modules/*'],
  env: {
    browser: true,
    node: true,
  },
  extends: [
    'next/core-web-vitals',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'prettier',
  ],
  rules: {
    // React plugin rules
    'react/prop-types': 0,
    'react/react-in-jsx-scope': 0,
    'react/prefer-stateless-function': 2,
    'react/no-unescaped-entities': [
      2,
      {
        forbid: ['>', '<'],
      },
    ],
    'react/jsx-pascal-case': 2,
    'react/jsx-no-useless-fragment': 2,
    'react/jsx-no-comment-textnodes': 2,
    'react/jsx-props-no-multi-spaces': 2,
    'react/jsx-closing-tag-location': 2,
    'react/jsx-child-element-spacing': 2,
    'react/jsx-boolean-value': [2, 'always'],
    'react/jsx-closing-bracket-location': [2, 'tag-aligned'],
    'react/jsx-curly-brace-presence': [
      2,
      {
        props: 'never',
        children: 'never',
      },
    ],
    'react/jsx-fragments': [2, 'syntax'],
    'react/jsx-max-props-per-line': [
      2,
      {
        maximum: 1,
        when: 'multiline',
      },
    ],
    'react/jsx-first-prop-new-line': [2, 'multiline-multiprop'],
    'react/jsx-filename-extension': [
      2,
      {
        extensions: ['.tsx'],
      },
    ],
    'react/jsx-equals-spacing': [2, 'never'],
    'react/jsx-curly-spacing': [
      2,
      {
        when: 'never',
      },
    ],
    'react/destructuring-assignment': [2, 'always'],
    'react/function-component-definition': [
      2,
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
    'react/self-closing-comp': [
      2,
      {
        component: true,
        html: true,
      },
    ],
    'react/jsx-handler-names': 2,
    'react/no-multi-comp': 2,
    // ESLint basic rules
    'max-len': [
      2,
      {
        code: 120,
        ignoreTemplateLiterals: true,
        ignoreStrings: true,
      },
    ],
    'no-console': [
      'error',
      {
        allow: ['warn', 'error'],
      },
    ],
    'no-template-curly-in-string': 2,
    'no-implicit-coercion': 2,
    'no-empty-function': 2,
    'no-else-return': 2,
    'no-multi-spaces': 2,
    'no-useless-return': 2,
    'no-multiple-empty-lines': [
      2,
      {
        max: 1,
      },
    ],
    'no-trailing-spaces': 2,
    'no-whitespace-before-property': 2,
    'array-callback-return': 2,
    'array-bracket-newline': [2, 'consistent'],
    'array-bracket-spacing': [2, 'never'],
    'array-element-newline': [2, 'consistent'],
    'block-spacing': 2,
    'brace-style': 2,
    'capitalized-comments': [0, 'always'],
    'computed-property-spacing': [2, 'never'],
    'comma-spacing': [
      2,
      {
        before: false,
        after: true,
      },
    ],
    'comma-dangle': [2, 'always-multiline'],
    'func-call-spacing': [2, 'never'],
    'eol-last': [2, 'always'],
    'consistent-return': 2,
    'default-param-last': 2,
    eqeqeq: [2, 'always'],
    curly: [2, 'all'],
    'require-await': 2,
    'jsx-quotes': [2, 'prefer-double'],
    'key-spacing': [
      2,
      {
        beforeColon: false,
        afterColon: true,
      },
    ],
    'keyword-spacing': [
      2,
      {
        before: true,
        after: true,
      },
    ],
    'object-curly-newline': [
      2,
      {
        consistent: true,
      },
    ],
    'prefer-object-spread': 2,
    'padded-blocks': [2, 'never'],
    'padding-line-between-statements': [
      2,
      {
        blankLine: 'always',
        prev: ['const', 'let', 'var'],
        next: '*',
      },
      {
        blankLine: 'any',
        prev: ['const', 'let', 'var'],
        next: ['const', 'let', 'var'],
      },
    ],
    semi: [2, 'never'],
    'space-before-blocks': 2,
    'space-before-function-paren': [
      2,
      {
        named: 'never',
        anonymous: 'always',
        asyncArrow: 'always',
      },
    ],
    'space-in-parens': [2, 'never'],
    'switch-colon-spacing': 2,
    'template-tag-spacing': 2,
    'arrow-body-style': [2, 'as-needed'],
    'arrow-spacing': 2,
    'no-duplicate-imports': 2,
    'no-useless-computed-key': 2,
    'object-shorthand': ['error', 'always'],
    'prefer-arrow-callback': 2,
    'rest-spread-spacing': [2, 'never'],
    // Import plugin rules
    'import/order': [
      1,
      {
        groups: ['external', 'builtin', 'internal', 'sibling', 'parent', 'index'],
      },
    ],
    'import/no-useless-path-segments': 2,
    'import/newline-after-import': 2,
    'import/export': 2,
    'import/no-duplicates': 2,
    'import/prefer-default-export': 'off',
    'import/no-default-export': 'warn',
    'import/no-cycle': ['warn', { maxDepth: 1 }],
    'unused-imports/no-unused-imports': 'error',
    // Typescript-eslint rules
    '@typescript-eslint/no-unused-vars': 0,
    '@typescript-eslint/no-use-before-define': 2,
    '@typescript-eslint/no-var-requires': 0,
    '@typescript-eslint/explicit-module-boundary-types': 0,
    '@typescript-eslint/no-explicit-any': 1,
    '@typescript-eslint/no-non-null-assertion': 2,
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'variable',
        format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
      },
      {
        selector: 'parameterProperty',
        format: ['camelCase', 'PascalCase'],
        leadingUnderscore: 'allow',
      },
      {
        selector: 'class',
        format: ['PascalCase'],
      },
      {
        selector: 'typeLike',
        format: ['PascalCase'],
      },
    ],
  },
  overrides: [
    {
      files: ['src/**/{page,layout,not-found}.tsx'],
      rules: {
        'import/no-default-export': 'off',
        'import/no-anonymous-default-export': 'off',
      },
    },
  ],
}
