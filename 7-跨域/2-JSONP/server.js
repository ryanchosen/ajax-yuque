// 引入
const express=require('express')
// 创建express对象
const app=express()
// 创建路由规则
// request是对请求报文的封装
// response是对响应报文的封装
app.all('/check-username',(request,response)=>{
  // 设置数据
  const data={
    exits:1,
    msg:'用户名已经存在'
  }
  // 对象 ==> 字符串
  let str=JSON.stringify(data)
  // 延时3s之后 响应字符串
  setTimeout(()=>{
    response.send(`handle(${str})`)
  },1000)
})
app.all('/jquery-jsonp-server',(request,response)=>{
  // 从查询参数中取key为callback的值
  let cb=request.query.callback;
  // 设置数据
  const data={
    name:'阿里巴巴',
    city:['上海','杭州','深圳']
  }
  let str=JSON.stringify(data)
  // 延时3s之后 响应字符串
  setTimeout(()=>{
    response.send(`${cb}(${str})`)  // jQuery35007237434024273866_1614496350467("{"exits":1,"msg":"用户名已经存在"}")
  },1000)
})
// 监听端口，启动服务
app.listen(8001,()=>{
  console.log('服务已启动，8001端口监听中')
})


