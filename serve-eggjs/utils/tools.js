/*
 * @Description:
 * @Author: Hexon
 * @Date: 2020-05-06 17:39:33
 * @LastEditors: Hexon
 * @LastEditTime: 2020-06-18 16:36:24
 */
'use strict';
const dayjs = require('dayjs');
function toInt(val) {
  if (typeof val === 'number') return val;
  if (!val) return val;
  return parseInt(val, 10) || 0;
}

function formatDateTime(dateTime) {
  return dayjs(dateTime).format('YYYY-MM-DD HH:mm:ss');
}

exports.toInt = toInt;
exports.formatDateTime = formatDateTime;
