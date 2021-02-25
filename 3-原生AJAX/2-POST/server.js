// 引入
const express=require('express')
// 创建express对象
const app=express()
// 创建路由规则
// request是对请求报文的封装
// response是对响应报文的封装
app.post('/server',(request,response)=>{
  // 设置响应头 允许跨域
  response.setHeader('Access-Control-Allow-Origin','*')
  // 设置响应
  response.send('2-POST')

})
// 监听端口，启动服务
app.listen(8001,()=>{
  console.log('服务已启动，8001端口监听中')
})
