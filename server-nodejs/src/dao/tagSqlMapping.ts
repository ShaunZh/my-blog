const tag = {
  insert: 'INSERT INTO TAG( name, create_time, modify_time) VALUES(?, ?, ?)',
  update: 'UPDATE TAG set name = ?, modify_time = ? where id = ?',
  delete: 'DELETE FROM TAG WHERE id = ?',
  queryById: 'SELECT * FROM TAG WHERE id = ?',
  queryAll: 'QUERY * FROM TAG'
}

export default tag
