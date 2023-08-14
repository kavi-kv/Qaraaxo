
const express = require('express')
const router = express.Router();
const bodyParser = require('body-parser')
const mysql = require('mysql')


const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "2234@@KvSql",
    database: "bulaal",
})


router.use(bodyParser.urlencoded({extended:true}))


//* => take data from user Registration forms and save to the db

router.post('/insert', (req,res) => {

    const firstName = req.body.firstName
    const lastName = req.body.lastName
    const userEmail = req.body.userEmail
    const userPassword = req.body.userPassword

    //?=> Registration
    //?=> Check if the user already exists
    const checkUserExistance = "SELECT * FROM user_reg WHERE user_email = ?";
    db.query(checkUserExistance,[userEmail], (err,rows) => {
        if(err)
        {
            console.log(`Error, failed to execute querry ${err}`)
            return res.status(500).send("Internal Server Error");
        }
        if(rows.length > 0)
        {
            return res.status(409).send("User already exist")
        }

        const sqlInsert = "INSERT INTO user_reg (first_name,last_name,user_email,password) VALUES (?,?,?,?)";
        db.query(sqlInsert, [firstName,lastName,userEmail,userPassword], (err,result) => {
        if(err)
        {
            console.log(`Error, falied to save data ${err}`)
            return res.status(409).send(`Fatal error happened ${err}`)
        } 
        else{
            console.log(`Successfully registrated new user ${result}`)
            return res.status(200).send(`Successfully registared user named ${result} `)
        }
    })
    })    
})


 //?=> Login
router.post('/login',(req,res) => {
    const userEmail = req.body.userEmail
    const userPassword = req.body.userPassword

    const checkUserLogin = "SELECT * FROM user_reg WHERE user_email = ? AND password = ?"
    db.query(checkUserLogin, [userEmail,userPassword], (err,result) => {
        if(err)
        {
            return res.status(409).send(`Error, Failed to perform operation ${err}`)
        }
        
        if(result.length == 0)
        {
            return res.status(401).send("Invalid Email or password")
        }
        else{
            return res.status(200).send(`Successfully Logged in \n Data is: ${result}`)
        }
    })
})

//?=> Read user Profile
router.get('/get',(req,res) => {
    const userEmail = req.query.userEmail


    const sqlSelect = "SELECT *FROM user_reg WHERE user_email = ?"
    db.query(sqlSelect,[userEmail],(err,result)=> {
        if(err)
            return res.status(409).send(`Error, Failed to perform execution ${err}`);
        else if(result.length == 0)
            return res.status.send(`User email is not found!`)
        else{
            console.log(`Successfulyy found user Email`)
            const resultInJsonFormat = JSON.stringify(result)
            return res.status(200).send(resultInJsonFormat)
        }
    })
 })





module.exports = router;