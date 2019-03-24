import http from './http'

const findById = id => http.get(`/employee/${id}`)

const saveNew = obj => http.post('/employee', obj)

const update = obj => http.put('/employee', obj)

const remove = id=> http.delete(`/employee/${id}`)

const getList = () => http.get('/employee')

export default {
  findById,
  saveNew,
  update,
  remove,
  getList
}