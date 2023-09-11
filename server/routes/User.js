const express = require('express')
const router = express.Router()
const connection = require('../database').db




router.post('/createuser',(req,res) => {
    const {username,email,password} = req.body
    
    // check user

    const checkUser = `SELECT * FROM user WHERE username = ? OR email = ?`
    connection.query(checkUser,[username,email] , (err,result) => {
        if(err) {
            return  res.status(500).json({ error: 'An error occurred while checking for existing records.' });
        } else {
            if(result.length > 0) {
                return res.status(400).json({ error: 'Username or email already exists.' });
            } else {
                    // add user
                    const sqlInsert = `INSERT INTO user (username,email,password) VALUES (?,?,?)`
                    connection.query(sqlInsert,[username,email,password] , (err,result) => {
                        if(err) {
                            return res.status(400).json({ error: 'Username or email already exists.' });
                        } else {
                            const user_id = result.insertId

                            const sqlInsertUserProfile = "INSERT INTO `user-profile` (`user-profile`) VALUES (?)";
                           
                            connection.query(sqlInsertUserProfile, [user_id], (err, result) => {
                              if (err) {
                                
                                return res.status(500).json({ error: `An error occurred while creating the user profile. ${user_id} ${err}` });
                              } else {
                                return res.status(200).json({ success: 'Account Successfully Created' });
                              }
                            });
                            
                        }
                    })
                    // add user
            }
        }
    })



})


module.exports = router