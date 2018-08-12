import qs from 'qs'

/**
 * mock服务的返回结果集，并打印日志,
 * @param apiName 接口名称
 * @param apiUrl 接口url
 * @param apiParam 接口参数
 * @param apiResult 接口返回结果的result属性或者是接口返回的完整json对象{code:,msg:,result:}
 * @returns {{code: number, msg: string, result: *}}
 */
function apiResponseJson (apiName, apiUrl, apiParam, apiResult) {
  let res = {
    code: 0,
    msg: 'success',
    result: apiResult
  }
  if (apiResult.code !== undefined && apiResult.msg !== undefined && apiResult.result !== undefined) {
    res = apiResult
  }
  console.log(apiName + ',url:' + apiUrl + ', 参数：', apiParam)
  console.log(apiName + ', 返回：', res)
  return res
}

function resolve200 (apiName, apiUrl, apiParam, apiResult) {
  return [200, apiResponseJson(apiName, apiUrl, apiParam, apiResult)]
}

export {resolve200}

/**
 * mock,post请求,模拟后端正常成功的逻辑,code=0
 * @param mock mock对象
 * @param apiName 接口名称
 * @param apiUrl 接口url
 * @param apiResultFunc 获取接口返回对象的result属性值的回调方法，回调方法的参数就是接口参数，是一个json对象
 */
function mockPost (mock, apiName, apiUrl, apiResultFunc) {
  mock.onPost(apiUrl).reply(config => {
    return new Promise((resolve, reject) => {
      resolve(resolve200(apiName, apiUrl, qs.parse(config.data), apiResultFunc(qs.parse(config.data))))
    })
  })
}

export {mockPost}
