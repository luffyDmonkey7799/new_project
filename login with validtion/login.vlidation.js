document.getElementById("cancleBtn")?.addEventListener('click',()=>{
     console.log('haha');
     location.href = "/Dashboard.html";
     })

var express = require("express");
var mysql = require("mysql");

var connection = mysql.createConnection({
    host: 'localhost',
    username: 'username',
    password: 'password',
    dbname: 'project'
});

var app = express();

connection.connect(function(error) {
    if(error) {
        console.log('Cannot establish connection to database...');
        return;
    }
    console.log('Database connection established...');
});

function getUserAgent(userAgent, versionNumber) {

    var isBrowserCompatible;

    app.get("/path-to-database", function(req, res) {
        connection.query('SELECT BrowserName, VersionNumber, bitGreaterVersions FROM userAgentTable', function(error, rows, fields) {
        connection.end();

            if(error) {
                console.log('Cannot find the results...');
            }

            isBrowserCompatible = false;

            
            for(var i = 0; i < rows.length; i++) {
                
                if(rows[i].BrowserName == userAgent && rows[i].VersionNumber == versionNumber) {
         
                    isBrowserCompatible = true;
                    break;
                  
                } else if(rows[i].BrowserName == userAgent && rows[i].VersionNumber < versionNumber) {
                    if(rows[i].bitGreaterVersions == 'False') {
                       
                    } else {
                      
                        isBrowserCompatible = true;
                        break;
                    }
                }
            }
            return isBrowserCompatible;
        });
    });
    return isBrowserCompatible;

}

