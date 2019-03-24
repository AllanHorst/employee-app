import http from './http'

const findById = id => http.get(`/employee/${id}`)

export default {
  findById
}