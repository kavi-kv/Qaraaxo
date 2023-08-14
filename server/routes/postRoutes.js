const express = require('express')
const router = express.Router();
const bodyParser = require('body-parser') 
const mysql = require("mysql");



//?: Creating the Database
const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "2234@@KvSql",
    database: "bulaal",
})

// app.get("/", (req, res) => {
//     const sqlInsert = "INSERT INTO quotes (post_content,user_name,auther_varchar,quote_type) VALUES ('Yussuf Moli','Mohamed Ali','James Cameron','Short Story')";
//     db.query(sqlInsert, (err, result) => {
//         if(err) {
//             console.log(err)
//             res.send("Failed to insert data into database")
//         }
//         else{
//             console.log(result);
//             res.send("Data inserted into database successfully");
//         }
//     })
// })

// ! -> Insert data Sql  


router.use(bodyParser.urlencoded({extended: true}))


//* => Saving to the database
router.post("/insert/post", (req,res) => {

    const {userId,postTitle,postContent,createdTime} = req.body;

    const sqlInsert = "INSERT INTO Post_table (user_id,title,content_text,created_at) VALUES (?,?,?,?)";
    db.query(sqlInsert, [userId,postTitle,postContent,createdTime], (err,result) => {
        if(err)
        {
            console.log(`Error failed to store data ${err}`)
            return res.status(500).send("Internal Server Error")
        }
        else{
            console.log(`Post Successfully added to the table`)
            return res.status(200).send(result);
        } 
    })
})

//* => Reading from the database
router.get('/get', (req,res) => {

    const sqlSelect = "Select * from Post_table";
    db.query(sqlSelect, (err,result) => {
        err ? console.log("Error") : res.send(result)
    })
})


module.exports = router;