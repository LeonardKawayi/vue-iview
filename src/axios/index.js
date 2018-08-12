/**
 * Created by zhangzk on 2018/6/3.
 */
import axios from 'axios'
import qs from 'qs'

axios.defaults.baseURL = ''
if (process.env.NODE_ENV === 'development') {
  // axios.defaults.baseURL = 'http://127.0.0.1:8888'
}

export default axios
