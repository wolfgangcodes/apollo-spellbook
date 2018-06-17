module.exports = {
  extends: 'react-app',
  plugins: ['filenames'],
  rules: {
    'filenames/match-exported': ['error'],
    'no-unused-vars': ['error'],
  },
};
