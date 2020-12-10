/*
 * @Description:
 * @Author: Hexon
 * @Date: 2020-06-11 16:41:01
 * @LastEditors: Hexon
 * @LastEditTime: 2020-08-09 17:50:41
 */

'use strict';

const bcrypt = require('bcryptjs');

exports.validateId = (str) => {
  return /^[a-zA-Z0-9\-_]+$/i.test(str);
};

exports.bhash = (str) => {
  return bcrypt.hashSync(str, 10);
};

exports.bcompare = (str, hash) => {
  return bcrypt.compareSync(str, hash);
};
