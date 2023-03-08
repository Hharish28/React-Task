const routes = require("express").Router();
const Admin = require("../models/Admin")
const sha1 = require("sha1");
const jwt = require("jsonwebtoken");

routes.post("/", (req, res)=>{
    
    let e = req.body.email;
    let p = req.body.password;
    Admin.find({ email : e }, (err, result)=>{
        if(result.length >= 1){
            if(result[0].password == sha1(p)){
                let token = jwt.sign({ id : result[0]._id, email : result[0].email }, "hello");
                res.send({ success : true, token : token });
            }else{
                res.send({ success : false, status : 401, errType : 2})

            }
        }else{
            res.send({ success : false, status : 401, errType : 1})
        }
    })
})

module.exports = routes;