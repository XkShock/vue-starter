module.exports = {
  parserOptions: {
    parser: 'babel-eslint',
  },
  extends: [
    'standard',
    'plugin:vue/recommended',
  ],
  'rules': {
    'arrow-parens': 0,
    'generator-star-spacing': 0,
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
  }
}
