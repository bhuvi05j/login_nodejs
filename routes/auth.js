const express=require("express");
const usercontroller=require("../controllers/user");
const router=express.Router();
router.post("/register",usercontroller.register);
module.exports=router;



// const mysql=require("mysql");
// const db=mysql.createConnection({
//     host:process.env.DATABASE_HOST,
//     user:process.env.DATABASE_USER,
//     password:process.env.DATABASE_PASS,
//     database:process.env.DATABASE,
// });

// exports.register=(req,res)=>{
//     console.log(req.body);
//     const name=req.body.name;
//     const email=req.body.email;
//     const password=req.body.password;
//     const confirmpassword=req.body.confirmpassword;
//     //res.send("form submmited")
//    // console.log(name);
//     db.query("select email from users where email=?",[email],(error,result)=>{
//         if(error){
//             confirm.log(error);
//         }
//         if(result.length>0){
//             return res.render("register",{msg:'email id already taken'});

//         }else if(password!==confirmpassword){
//             return res.render("register",{msg:"password worng"});
//         }
//     })

// };
// db.query('insert into users set ?',{ name:name,email:email,pass:password},
// (error,result)=>{
//     if(error){
//         console.log(error);
//     }else{
//         console.log(result);
//         return res.render("register",{msg:"user registration success"});
//     }
// })
