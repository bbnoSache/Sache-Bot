const {Client, RichEmbed} = require('discord.js')
const bot = new Client()
let activated = '0'

bot.on('ready', ()=>{
    console.log('Online.')
    bot.user.setActivity(`yt.com/Sache`, {type: ("WATCHING")})
    var Channel = bot.channels.get("613187138367913985");
    Channel.fetchMessage("619053215618433071");
})

bot.on('raw', event =>{
    const eventname = event.t
    if(eventname === 'MESSAGE_REACTION_ADD')
    {
        var reactionChannel = bot.channels.get(event.d.channel_id);
        if(event.d.message_id === '619053215618433071')
        {
            reactionChannel.fetchMessage(event.d.message_id)
            .then(msg => {
            var msgReaction = msg.reactions.get(event.d.emoji.name + ":" + event.d.emoji.id);
            var user = bot.users.get(event.d.user_id)
            })
            .catch(err => console.log(err))
        }
        else {
            reactionChannel.fetchMessage(event.d.message_id)
            .then(msg => {
            var msgReaction = msg.reactions.get(event.d.emoji.name + ":" + event.d.emoji.id);
            var user = bot.users.get(event.d.user_id)
            })
            .catch(err => console.log(err))
        }
    }
});

bot.on('messageReactionAdd', (messageReaction, user) =>{
    var roleName = messageReaction.emoji.name
    var role = messageReaction.message.guild.roles.find("name", "Unverified");
    var role2 = messageReaction.message.guild.roles.find("name", "★");
    var role3 = messageReaction.message.guild.roles.find("name", "★");
    console.log(roleName)
    var member = messageReaction.message.guild.members.find(member => member.id === user.id);
    if(member)
    {
        if(roleName === 'Sache'){
            member.removeRole(role.id)
            member.addRole(role2.id)
            member.addRole(role3.id)
            console.log("Success.")
        }
    }
})

bot.on('message', async message => {
    let blacklisted = ['Hoes Mad']
  
    
    let foundInText = false;
    for (var i in blacklisted) {
      if (message.content.toLowerCase().includes(blacklisted[i].toLowerCase())) foundInText = true;
    }
    
  
    
      if (foundInText) {
        message.channel.sendMessage('' + message.author + ' https://youtu.be/czd4GL4RZVs')
    }
});

bot.on('guildMemberAdd', member=>{
    let channel = member.guild.channels.find(channel => channel.id === "612755543940923392")
    const embed = new RichEmbed()
    .setAuthor(`Welcome to Sache's Traphouse`, ``, ``)
    .setDescription(`Peep the ***Rules*** channel to see how to gain access to the server, ${member}`)
    .setImage(`https://cdn.discordapp.com/attachments/612985420350750733/629208287086247947/Sache_Final.gif`)
    .setColor(0x000000);
    channel.sendEmbed(embed)
})

bot.on('guildMemberRemove', member=>{
    let channel = member.guild.channels.find(channel => channel.id === "612755543940923392")
    const embed = new RichEmbed()
    .setAuthor(`Smh`, ``, ``)
    .setDescription(` Damn, ${member} has left the Trap House, Chief said this wasn't it.`)
    .setImage(``)
    .setColor(0xffffff);
    channel.sendEmbed(embed)
})

bot.on('message', async message => {
    let blacklisted = ['nigger', 'faggot', '⛓']
  
    
    let foundInText = false;
    for (var i in blacklisted) {
      if (message.content.toLowerCase().includes(blacklisted[i].toLowerCase())) foundInText = true;
    }
    
  
    
      if (foundInText) {
        message.delete();
        message.channel.sendMessage('Chill out ' + message.author + ', before I yeet that ass straight out this server no cap.')
    }
  });

bot.on('message', msg =>{
    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    if(msg.author.id === '588977246744608778')
    {
        if(msg.content === '-activate')
        {
            activated = '1'
        }
        if(msg.content === '-deactivate')
        {
            activated = '0'
        }
    }
    if(msg.author.id === '588977246744608778')
    {
        if(activated === '1')
        {
            console.log('wtf')
            let content = msg.content
            msg.channel.bulkDelete('1')
            msg.channel.send(content)
        }
    }
    let args = msg.content.split(' ')
    switch(args[0]){
        case '!dm':
            if(msg.author.id === "588977246744608778"){
                let mentioned = msg.mentions.users.first()
                let message = args.join(' ').slice(25)
                msg.channel.bulkDelete('1')
                mentioned.send(message)   
            }
        break;
        case '!kick':
            if(!msg.member.hasPermission("KICK_MEMBERS")) return msg.channel.sendMessage("Boy you ain't got the juice to do that.");
            if(!msg.guild.me.hasPermission("KICK_MEMBERS")) return msg.channel.sendMessage("Boy you ain't got the juice to do that.");
            if(!args[1]) return msg.channel.sendMessage('Who we finna yeet?')
            const tuser = msg.mentions.users.first();
            const kreason = args.join(" ").slice(28);
            if(tuser){
                const member = msg.guild.member(tuser)
                if(member){
                    if(!kreason){
                        member.kick('You were kicked.');
                        const kembed = new RichEmbed()
                        .setTitle('Get the fuck out.')
                        .addField("User", tuser)
                        msg.channel.sendEmbed(kembed);
                    }
                    else{
                        member.kick(kreason);
                        const kembed = new RichEmbed()
                        .setTitle('Get the fuck out.')
                        .addField("User", tuser)
                        msg.channel.sendEmbed(kembed);
                    }
                }
            }
        break;
        case '!ban':
            if(!msg.member.hasPermission("BAN_MEMBERS")) return msg.channel.sendMessage("Boy you ain't got the juice to do that.");
            if(!msg.guild.me.hasPermission("BAN_MEMBERS")) return msg.channel.sendMessage("Boy you ain't got the juice to do that.");
            if(!args[1]) return msg.channel.sendMessage('Which homie are we eviscerating?')
            const user = msg.mentions.users.first();
            const breason = args.join(" ").slice(27);
            if(user){
                const member = msg.guild.member(user)
                if(member){
                    if(!breason){
                        member.ban('You were banned.');
                        const bembed = new RichEmbed()
                        .setTitle('Get the fuck out.')
                        .addField("User's name", user)
                        .addField("User's ID", user.id)
                        .addField("Reason", 'No reason specified.');
                        msg.channel.sendEmbed(bembed);
                    }
                    else{
                        member.ban(breason);
                        const bembed = new RichEmbed()
                        .setTitle('Get the fuck out.')
                        .addField("User's name", user)
                        .addField("User's ID", user.id)
                        .addField("Reason", breason);
                        msg.channel.sendEmbed(bembed);
                    }
                }
            }
        break;
        case '!unban':
            if(!msg.member.hasPermission("BAN_MEMBERS")) return msg.channel.sendMessage("You don't have the permission to unban someone!");
            if(!msg.guild.me.hasPermission("BAN_MEMBERS")) return msg.channel.sendMessage("I don't have the allowed permission to unban someone!");
            if(!args[1]) return msg.channel.sendMessage('Please specify a user ID!')
            msg.guild.unban(args[1])
            const uembed = new RichEmbed()
            .setTitle('User has been unbanned!')
            msg.channel.sendEmbed(uembed);
        break;
        case "!sotd":
            let memberx = msg.mentions.users.first();

            const embed = new RichEmbed()
            .setAuthor(`SOTD - 9/9/2019 - Calm Snow - I See Stars `, `https://cdn.discordapp.com/attachments/601536698987577344/617144814902706196/Sache_New_Test.png`, ``)
            .setTitle(`https://youtu.be/LXvkrEwy0Xs`)
            .setColor(0x000000);
             msg.channel.sendEmbed(embed);
        break;
        case "Google":
            let memberv = msg.author;

            msg.channel.send(`${memberv} Are you still using Google? Then I have something to show you! Ecosia, is a free Search Engine, just like Google...a bunch of bullshit.`);
        break;      
        case "!latest":
            const embed2 = new RichEmbed()
            .setAuthor(`Peep Saches latest video, "No Video Available"`, `https://cdn.discordapp.com/attachments/601536698987577344/617144814902706196/Sache_New_Test.png`, ``)
            .setTitle(`https://youtu.be/`)
            .setColor(0x000000);
             msg.channel.sendEmbed(embed2);
        break;
        case "Slap":
            let memberz = msg.mentions.members.first();
            let membery = msg.author;

            if(msg.mentions.users.size < 1) return msg.channel.send("You forgot to name a bitch to slap.");
            msg.channel.send(`${membery} Just slapped the ***fuck*** out of ${memberz} :clap: `);
        break;
        case '!clear':
            if(!msg.member.hasPermission("MANAGE_MESSAGES")) return msg.channel.sendMessage("Boy stop trynna clear my chat.");
            if(!msg.guild.me.hasPermission("MANAGE_MESSAGES")) return msg.channel.sendMessage("Boy stop trynna clear my chat.");
            if(!args[1]) return msg.channel.sendMessage('How many messages we clearing chief?');
            if(isNaN(parseFloat(args[1]))){
                return msg.channel.sendMessage('Are you really trying to purge "' + args[1] + '" messages?');
            }
            msg.channel.bulkDelete(args[1]);
        break;
        case '!dmall':
            if(msg.author.id === '588977246744608778'){
            if(!args[1]) return msg.channel.sendMessage('?');
            let dmGuild = msg.guild;
            var message = msg.content.slice(6);
            let memberarray = dmGuild.members.array();
            let membercount = memberarray.length;
            console.log(`Responding to ${msg.author.username} :  Sending message to all ${membercount} members of ${dmGuild.name}.`)
            for (var i = 0; i < membercount; i++) {
                if(!args[1]) return msg.channel.sendMessage('?');
                let timeout = Math.floor((Math.random() * (10 - 0.01)) * 1000) + 10;
                let member = memberarray[i];
                sleep(timeout)
                if(i == (membercount-1)) {
                    console.log(`Waited ${timeout}ms.\t\\/\tDMing ${member.user.username}`);
                } else {
                    console.log(`Waited ${timeout}ms.\t|${i + 1}|\tDMing ${member.user.username}`);
                }
                member.send(`${message}`);
            }
            }
        break;
    }
})

bot.login(process.env.BOT_TOKEN)
