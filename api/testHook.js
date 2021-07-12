//require('console-stamp')(console, 'yyyy-mm-dd  HH:MM:ss');

const config = require('./config'),
      express = require('express'),
      fs = require('fs'),
      https = require('https'),
      bodyParser = require('body-parser'),
      testHookPort = 2828;

var app = express();
app.use(bodyParser.json({limit: '10mb'}));
app.use(bodyParser.urlencoded({extended: true, limit: '10mb'}));


var options = {
      key: fs.readFileSync('./wildcard2019/wildcard.key'),
      cert: fs.readFileSync('./wildcard2019/cert.pem'),
      ca: fs.readFileSync('./wildcard2019/ca.pem'),
};


app.get('/webhook', async function(req,res){ 
      res.status(200).json({llego:true}).end();
});

var cont = 0;

app.post('/webhook', async function(req,res){       
      var data =  req.body || {};
      var session = data.data;
      var logData = {
            event: data.event,
            cnt: cont++,
            channel: session.channel,
            platformId: session.platformId,
            session: session.session,
            lastUpdate: session.lastUpdate,
            ability: session.ability,
            idMessageHey : session.idMessageHey,
            idMessage : session.idMessage,
            incoming: session.incoming,
            message: session.message,
      }      

      return res.status(200).end();
});

var server = https.createServer(options, app)
                  .listen(testHookPort, () => console.info("DirectApiPort: " + testHookPort));