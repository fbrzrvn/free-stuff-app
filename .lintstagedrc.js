module.exports = {
  'src/**/*.{js,jsx,ts,tsx}': ['yarn lint', 'yarn lint:format'],
  '*.{css,scss,html,md,json,yml,yaml}': ['yarn lint:format']
};
