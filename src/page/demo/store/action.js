// ajax 请求
import url from '../../../../static/request'
import $http from 'axios'

let requestUrl = url.domains.dev.baseURL;

export async function testDemo ({commit}, data) {
  let result = {
    code: 0,
    data: ['xiao','ben']
  }
  // 拼接请求url
  let url =requestUrl + '/api/cmdb/overview/groupCards';
  await(
    $http.post(url, data).then(res=>{
    
    }).catch(res=>{
      result.data.push('ben')
    })
  )
  return result;
}
// $http.get('/user?Id=12345').then(res=>{

// }).catch(res=>{

// })