import mysql from 'mysql'
import db from '../conf/db'
import sql from './tagSqlMapping'

// 使用线程池连接数据库
const pool = mysql.createPool(db.mysql)

const tagDao = {
  add: function(req: any, res: any) {
    pool.getConnection((err, connection) => {
      const param = req.query || req.params
      connection.query(sql.insert, [param.name, Date.now()], (err, result) => {
        if (err) {
          throw err
        }
        console.log('result: ', result)
        if (result) {
          // eslint-disable-next-line no-param-reassign
          result = {
            code: 200,
            msg: '增加成功'
          }
        }
        res.json(result)
      })
    })
  }
}
