/*
 * @Description:
 * @Author: Hexon
 * @Date: 2020-05-06 17:39:33
 * @LastEditors: Hexon
 * @LastEditTime: 2020-05-06 17:48:56
 */
'use strict';
function toInt(val) {
  if (typeof val === 'number') return val;
  if (!val) return val;
  return parseInt(val, 10) || 0;
}

exports.toInt = toInt;
