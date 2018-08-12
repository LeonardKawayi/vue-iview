import axios from 'axios'
import qs from 'qs'

export const get = (url, params) => { return axios.get(url + qs.stringify(params)).then(res => res.data) }
export const post = (url, params) => { return axios.post(url, params).then(res => res.data) }

