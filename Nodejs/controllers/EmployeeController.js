const routes = require("express").Router();
const Employee = require("../models/Employee");

routes.post("/", (req, res)=>{
    Employee.create(req.body, (err)=>{
        console.log(req.body);
        if(err){
            console.log("somthing wrong", err);
            return;
        }
        res.send({ success : true });
    })
})

routes.get("/", (req, res)=>{
    Employee.find({}, (err, result)=>{
        if(err){
            console.log("somthing wrong", err);
            return;
        }
        res.send(result);
    })
})


routes.get("/:id", (req, res)=>{
    const id = req.params.id;
    Employee.find({_id : id}, (err, result)=>{
        if(err){
            console.log("somthing wrong", err);
            return;
        }
        res.send(result[0]);
    })
})


routes.put("/:id", (req, res)=>{
    const id = req.params.id;
    Employee.updateMany({_id : id }, req.body, (err)=>{
        if(err){
            console.log("somthing wrong", err);
            return;
        }
        res.send({ success : true });
    })
})
routes.delete("/:id", (req, res)=>{
    const id = req.params.id;
    Employee.deleteMany({_id : id}, (err)=>{
        if(err){
            console.log("somthing wrong", err);
            return;
        }
        res.send({ success : true });
    })
})

module.exports = routes;