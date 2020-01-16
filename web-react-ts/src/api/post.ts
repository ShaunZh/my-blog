import axios from '@/plugins/axios/index'

interface IDetail {
  number: string
}

function list(params: any) {
  return axios.get('/mock', params)
}

function detail(params: IDetail) {
  return axios.post('/post/detail', params)
}

export default {
  list,
  detail
}
