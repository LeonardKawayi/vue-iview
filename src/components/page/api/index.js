import {post} from '../../../axios/ajax'

const tableBaseUrl = '/table/'

export const tableUrl = {
  get: tableBaseUrl + 'get'
}

  /**
   * 获取table数据
   */
export const tableData = params => { return post(tableUrl.get, params) }
