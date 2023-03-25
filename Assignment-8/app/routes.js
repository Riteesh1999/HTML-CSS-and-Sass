const bodyParser = require('body-parser');
const Sample = require('./models/sample')
module.exports = (app) => {

//Create User
    app.post('/user/create',bodyParser.json(), function(req, res) {

        var regexForFullName = /^[a-zA-Z].[\s]$/g;
        var regexForEmail = /([\w.]+)@([\w\.]+)\.(\w+)/;
        var regexForPassword = ("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,14})");

        var fullname = req.body.fullname;
        var email = req.body.email;
        var password = req.body.password;

        if(!fullname.trim().match(regexForFullName)){
            res.status(400);
            res.json("Full name is not valid. Full name cannot have special characters but can conrtain spaces.")

        }
        else if( !email.trim().match(regexForEmail)){
            res.status(400);
            res.json("Email ID entered is not valid or correct. Please check entered details again.");
        }

        else if(!password.trim().match(regexForPassword)){
            res.status(400);
            res.json("Password should be 8-14 characters long. Must contain an uppercase letter and a lowercase letter, a special character and a numeric character (0-9) ");
        }
        
        else{

        var user = new Sample(req.body);
        user.save(function(error, data) {
            if (error)
                console.log('saving failed');
            console.log('saved ');
            res.status(201)
            res.json(data);
        });
        }
    });

//edit users
    app.post('/user/edit',function(req,res){
        let oldFullName = req.body.setFullName;
        // let oldEmail = req.body.oldEmail;
        // let oldPassword = req.body.oldPassword;
        let newFullName = req.body.newFullName;
        let newEmail = req.body.newEmail;
        let newPassword = req.body.newPassword;

        if(newFullName && newPassword){

        Sample.findOneAndUpdate({fullname: oldFullName, password: oldPassword},
            {$set:{fullname: newFullName, password: newPassword}},
            {new: true}, (error,doc) => {
                console.log(doc);
                if(error){
                    res.json({"message":"Update failed!"});
                    console.log("User updation failed!");
                }
                
                if(doc == null){
                    res.status(400);
                    res.json("ID doest not exist in the Database, Please check entered details again");
                }
                else{
                    //res.send(doc);
                    res.json("Details updated successfully and saved to Database")
                }
            })}
            else{
                res.json("New Full Name, Email and Password cannot be blank. Please enter the details")

            }
    })

//Delete users
    app.delete('/user/delete',function(req,res){
        let fullnameDelete = req.body.fullname;
        let emailDelete = req.body.email;
        let passwordDelete = req.body.password;

        Sample.findOneAndDelete({fullname: fullnameDelete, email:emailDelete, password: passwordDelete}, function(error, doc){
            if(error){
                res.json("Delete failed! Try again.");
                console.log("Delete failed!");
            }
            if(doc == null){
                res.status(400);
                res.json("message Details doesn't exist in the Database, Please check the details again.");
            }
            else{
                res.status(201);
                res.json("Data deleted successfully");
            }
        });
    });
//view all users
    app.get('/user/getAll', function(req, res) {
        Sample.find(function(error, samples) {
            if (error)
                res.send(error);
            console.log('samples', samples);
            res.status(200);
            res.json(samples);
        });
    });

}