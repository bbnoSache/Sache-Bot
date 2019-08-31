const {Client, RichEmbed} = require('discord.js')
const bot = new Client()
let activated = '0'

bot.on('ready', ()=>{
    console.log('Online.')
    bot.user.setActivity(`Sache's Videos`, {type: ("WATCHING")})
    var Channel = bot.channels.get("613187138367913985");
    Channel.fetchMessage("613188652469714964");
})

bot.on('raw', event =>{
    const eventname = event.t
    if(eventname === 'MESSAGE_REACTION_ADD')
    {
        var reactionChannel = bot.channels.get(event.d.channel_id);
        if(event.d.message_id === '613188652469714964')
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
    var role2 = messageReaction.message.guild.roles.find("name", "Omega (Ω)");
    console.log(roleName)
    var member = messageReaction.message.guild.members.find(member => member.id === user.id);
    if(member)
    {
        if(roleName === '💯'){
            member.removeRole(role.id)
            member.addRole(role2.id)
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
    .setAuthor(`Welcome to Sache's Traphouse`, `https://cdn.discordapp.com/attachments/601536698987577344/617144814902706196/Sache_New_Test.png`, ``)
    .setDescription(`Peep the ***Rules*** & ***Welcome*** channel to see how to gain access to the server, ${member}`)
    .setImage(`https://cdn.discordapp.com/attachments/601536698987577344/617144814902706196/Sache_New_Test.png`)
    .setColor(0x000000);
    channel.sendEmbed(embed)
})

bot.on('guildMemberRemove', member=>{
    let channel = member.guild.channels.find(channel => channel.id === "612755543940923392")
    const embed = new RichEmbed()
    .setAuthor(`Smh`, ``, ``)
    .setDescription(` Damn, ${member} has left the Trap House, Chief said this wasn't it.`)
    .setImage(``)
    .setColor(0x000000);
    channel.sendEmbed(embed)
})

bot.on('message', async message => {
    let blacklisted = ['nigger', 'nigga', 'faggot',]
  
    
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
                        .setTitle('Oh Shit, they just got yeeted from the server lmao.')
                        .addField("User", tuser)
                        msg.channel.sendEmbed(kembed);
                    }
                    else{
                        member.kick(kreason);
                        const kembed = new RichEmbed()
                        .setTitle('Oh Shit, they just got yeeted from the server lmao.')
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
                        .setTitle('User has been banned!')
                        .addField("User's name", user)
                        .addField("User's ID", user.id)
                        .addField("Reason", 'No reason specified.');
                        msg.channel.sendEmbed(bembed);
                    }
                    else{
                        member.ban(breason);
                        const bembed = new RichEmbed()
                        .setTitle('User has been banned!')
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
            var message = msg.content.slice(22);
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
        case '-addrole':
            if(!msg.member.hasPermission("MANAGE_ROLES")) return msg.channel.sendMessage("You do not have permissions to add roles.");
            if(!msg.guild.me.hasPermission("MANAGE_ROLES")) return msg.channel.sendMessage("I do not have permissions.");
            let member = msg.mentions.users.first()
            if(!member) return msg.channel.send("Please specify a real user")
            if(!args[1]) return msg.channel.send('Specify something!')
            if(!args[2]) return msg.channel.send('Say a role Pilgrim')
            let role = msg.content.slice(31)
            let getmember = msg.guild.members.find("id", member)
            let getRole = msg.guild.roles.find("name", role);
            if(!getRole) return msg.channel.send("Can't find that role")
            getmember.addRole(getRole.id)
            msg.channel.send(`<@${member}> You've been given ${getRole.name}`)
        break;
        case '-removerole':
            if(!msg.member.hasPermission("MANAGE_ROLES")) return msg.channel.sendMessage("You do not have permissions to add roles.");
            if(!msg.guild.me.hasPermission("MANAGE_ROLES")) return msg.channel.sendMessage("I do not have permissions.");
            let member2 = msg.mentions.users.first()
            if(!member2) return msg.channel.send("Please specify a real user")
            if(!args[1]) return msg.channel.send('Specify something!')
            if(!args[2]) return msg.channel.send('Say a role')
            let getmember2 = msg.guild.members.find("id", member2)
            let getRole2 = msg.guild.roles.find("name", role2);
            if(!getRole2) return msg.channel.send("Can't find that role")
            getmember2.removeRole(getRole2.id)
            msg.channel.send(`<@${member2}> You've been given ${getRole2.name}`)
        break;
    }
})

bot.login(process.env.BOT_TOKEN)
