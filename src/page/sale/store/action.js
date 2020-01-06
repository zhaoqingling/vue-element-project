// ajax 请求
import $http from 'axios'
export async function testDemo ({commit}, data) {
  let result = {
    code: 0,
    data: []
  }
  // 拼接请求url
  let url = '/bigdata/qos';
  await(
    // $http.post(url, data).then(res=>{
    
    // }).catch(res=>{
    //   result.data.push('ben')
    // })
    $http.get(url).then(res=>{
      result.data = res.data;
     
    }).catch(res=>{
      result.code = 1;
    })
  )
  return result;
}
