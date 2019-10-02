//This file holds any configuration variables we may need 
//'config.js' is ignored by git to protect sensitive information, such as your database's username and password
//copy this file's contents to another file 'config.js' and store your MongoLab uri there

//I had to indicate the database in the string

module.exports = {
    db: {
        uri: 'mongodb://localhost:27017/bootcamp3'
    },
    openCage: {
        key: '5374099c18c840c886c3ce7a7eb2db75' //place your openCage public key here - Sign-up for a free key https://opencagedata.com/
    },
    port: 8080
};