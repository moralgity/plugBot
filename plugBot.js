// loads PLug Api And Logs In
var PlugAPI = require('plugapi');
var bot = new PlugAPI({
    email: 'Email',
    password: 'Password'
});

// joins the room
bot.connect('room'); // The part after https://plug.dj 

// basic chat handler to show incoming chats formatted nicely
bot.on('chat', function(data) {
    if (data.type == 'emote') //13-16 logs chat in the terminal
        console.log(data.from + data.message);
    else
        console.log(data.from + "> " + data.message);
    if (data.message.indexOf('cp') > -1)
        bot.sendChat('@staff ' + 'MODS');
    if (data.message == '!nsa')
        bot.meh();
    if (data.message == '!sendNsaData')
        bot.sendChat('Ip address logged..');
    if (data.message == '!help')
        bot.sendChat('http://zqktlwi4fecvo6ri.onion/wiki/index.php/Main_Page')
});


// records users joining
bot.on('userJoin', function(data) {
    console.log(data.username + ' joins');
});


// records users leaving
bot.on('userLeave', function(data) {
    console.log(data.username + ' leaves');
});
       
