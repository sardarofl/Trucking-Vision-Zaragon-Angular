const mysql = require('mysql');

var connection = mysql.createPool({
	host:'localhost',
	port:'3307',
	user:'root',
	password:'',
	database:'trucking'
	});

module.exports=connection;
