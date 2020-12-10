/*
 * @Description:
 * @Author: Hexon
 * @Date: 2020-03-17 14:06:01
 * @LastEditors: Hexon
 * @LastEditTime: 2020-06-12 17:28:35
 */
module.exports = {
  extends: [require.resolve('@umijs/fabric/dist/eslint')],
  globals: {
    page: true,
    Aliplayer: true,
    Paho: true,
  },
  rules: {
    // 'no-useless-constructor': 'off',
    // '@typescript-eslint/no-useless-constructor': ['error'],
    '@typescript-eslint/no-unused-vars': ['warn'],
  },
};
