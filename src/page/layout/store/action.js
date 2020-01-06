// ajax 请求
import $http from 'axios'

export async function testDemo ({commit}, data) {
  let result = {
    code: 0,
    data: ['xiao','ben']
  }
  // 拼接请求url
  let url ='/api/cmdb/overview/groupCards';
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