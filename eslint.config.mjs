import tseslint from "typescript-eslint";

export default [
  ...tseslint.configs.recommended,
  {
    rules: {
      "no-unused-vars": "warn",
      "no-undef": "warn",
    },
  },
];
