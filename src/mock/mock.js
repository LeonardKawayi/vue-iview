import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import TableData from '../components/page/mock/table-mock'

export default {
  bootstrap () {
    let mock = new MockAdapter(axios)
    TableData.bootstrap(mock)
  }
}
