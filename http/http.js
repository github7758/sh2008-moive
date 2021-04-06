// 引入相关模块
const express = require('express')
const app = express()
const fs = require('fs')
const path = require('path')
const bodyParser = require('body-parser')
const md5 = require('md5')
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const cors = require('cors')

app.use(cors())
// 中间件
app.use(bodyParser.urlencoded({ extended: false }))
// 使用中间件解析json格式
app.use(bodyParser.json())

const passwdCrypt = (req, res, next) => {
    let password = req.body.password
    req.body.passwdCrypted = md5(password + md5(password).substr(0, 16))
    next()
}

// 使用mongoose
mongoose.connect("mongodb://localhost:27017/maizuo", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
const UserSchema = new mongoose.Schema({
    userId: {
        type: Number,
        required: true,
    },
    mobile: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    headIcon: String,
    gender: Number,
});
const Model = mongoose.model("User", UserSchema, "users");

// 获取.env文件中的secret(签发和验证的)
const jwt_secret = fs.readFileSync(path.join(__dirname, '.env'), 'utf-8')

// 中间件：验证客户端发送过来的 token
const checkToken =async function(req,res,next){
    console.log(req.headers);
    let tempArr = (req.headers.authorization).split(' ')
    let _token = tempArr[tempArr.length - 1]
    // 验证token是否合法（已签名
    try {
        let verify = jwt.verify(_token,jwt_secret)
        // 二次验证(安全)
       let data = await Model.findOne({userId:verify.userId})
       if(data){
        //合法用户
        req.body.user_id = data.userId
        next() 
       }else{
        //非法用户
        res.statu(403).send({
            code:'777',
            info:'illegal access'
        }) 
       }
    } catch (error) {
        res.statu(403).send({
            code:'888',
            info:'illegal access'
        })
    }
    
}

// 接口：获取登录成功的用户信息
app.get('/api/v1/user_info',checkToken,async(req,res)=>{
    // 获取用户数据
   let {userId,gender,mobile,headIcon} =await Model.findOne({userId:req.body.user_id})
   res.send({
       code:'1000',
       info:'success',
       user_info: {
           userId,
           gender,
           mobile,
           headIcon,
       }
   })
})

// 监听路由 
app.get('/', (req, res) => {
    res.send('hello world!')
})

// // 获取初始密码
// app.post('/init', passwdCrypt, (req, res) => {
//     res.send('your init password is:' + req.body.passwdCrypted)
// })

// 用户登录验证接口
app.post('/api/v1/login', passwdCrypt, async (req, res) => {
    // 获取手机号和密码
    let { mobile, passwdCrypted } = req.body
    // 查询数据表
    let result = await Model.findOne({ mobile, password: passwdCrypted })
    console.log(result);
    if (result) {
        res.send({
            code: "1000",
            info: "success",
            data: {
                // 签名方法
                _token: jwt.sign(
                    // 获取载荷中数据
                    {
                        userId: result.userId,
                        mobile: result.mobile.substr(0, 3) + '****' + result.mobile.substr(7,10),
                    },
                    jwt_secret),
            }
        })
    } else {
        res.send({
            code: "9999",
            info: "mobile or password is invalid",
        });
    }
})

// 监听端口
app.listen('3000', () => {
    console.log('Server is running at http://127.0.0.1:3000');
})