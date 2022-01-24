module.exports = {
  trailingComma: 'all',
  tabWidth: 2,
  semi: true,
  singleQuote: true,
  plugins: [
    './node_modules/prettier-plugin-go-template',
    './node_modules/prettier-plugin-tailwind',
  ],
  overrides: [
    {
      files: ['*.html'],
      options: {
        parser: 'go-template',
      },
    },
    {
      files: ['*.{md,yaml}'],
      options: {
        singleQuote: false,
      },
    },
  ],
};
