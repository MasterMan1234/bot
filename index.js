const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '+';


client.once('ready', () => {
    client.user.setActivity('+help', { type: "PLAYING"})
    console.log('Bot is online!'); 	
});

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();


    if(command === 'ping'){
        message.channel.send('pong!');
    }

    else if (command === 'prefix') {
		message.reply(`you can either ping me or use \`${prefix}\` as my prefix.`);
	}

    else if(command === 'hello'){
    	message.channel.send(`Hi, what's up?`);
    }

    else if(command === 'games') {
    	message.channel.send('try these ones: \n https://Krunker.io \n https://slither.io \n https://minecraft.net \n https://aquapark.io \n https://surviv.io \n https://arpantaneja.github.io');
    }


    else if (command === 'server-info') {
        const infoEmbed = new Discord.MessageEmbed()
        .setColor('#00ffea')
        .setTitle('Server-Info')
        .setDescription(` \n Server name: ${message.guild.name}\nTotal members: ${message.guild.memberCount} \n \n Tip: work towards saving the Earth, there's no planet B. more on +facts`)
        .setTimestamp()
        

            message.channel.send(infoEmbed);
    }

    else if(command === 'nitro') {
        const nitroEmbed = new Discord.MessageEmbed()
        .setColor('#00ffea')
        .setTitle('Free Nitro')
        .setDescription('\n Join this server for free nitro Giveaways! \n \n https://discord.gg/xntBVEb')
        .setTimestamp()
            message.channel.send(nitroEmbed);  
    }

    else if (command === 'help') {
        const exampleEmbed = new Discord.MessageEmbed()
	        .setColor('#00ffea')
	        .setTitle('Planet Bot Commands:')
            .setDescription('`+server-info`\n gives server info \n \n `+help` \n for all commands \n \n `+nitro`\n *free* discord nitro! \n \n `+games`\n for some fun games! \n \n  `+facts`\n get interesting facts about Earth \n \n `+ping` or `+hello` \ncheck if the bot is online \n \n `+kick` \nto kick somebody \n \n `+ban`\n to ban someone \n\n **more commands coming soon!**')
            .setTimestamp()

    message.channel.send(exampleEmbed);

    }

    else if (command === 'facts') {
        var arr = ["The Earth’s rotation is gradually slowing.", "There is more carbon dioxide in the atmosphere today than at any point in the last 800,000 years.", "**Alaska had the largest earthquake** \n As of March 2016, the largest earthquake to shake the United States was a magnitude-9.2 temblor that struck Prince William Sound, Alaska, on Good Friday, March 28, 1964. src:livescience.com", "**The hottest spot is in Libya** \n The fiery award for Earth’s hottest spot goes to El Azizia, Libya, where temperature records from weather stations reveal it hit 136 degrees Fahrenheit (57.8 degrees Celsius) on Sept. 13, 1922, according to NASA Earth Observatory. src:livescience.com", "Our amazing planet has been around for quite some time. By researching our planet’s rocks, scientists have calculated the Earth to be around 4.5 billion years old! src:natgeo", "People often think of Earth as a gigantic sphere. But, in fact, its shape is more like a squished ball that bulges out at the equator –– an imaginary line around the middle of the planet, exactly between the North Pole and the South Pole.", "Earth’s ‘atmosphere’ is also hugely important for sustaining life. The atmosphere is a huge blanket of gases – mostly oxygen and nitrogen – wrapped around Earth, protecting our planet from the sun’s strong rays. At the same time, the atmosphere helps keep the Earth’s temperature comfortable for living beings – and it protects us from meteors, too!"];
        message.channel.send(arr[Math.floor(Math.random() * arr.length)]);
    }
    
});





client.login();

//invite link:  https://discord.com/oauth2/authorize?client_id=746232069348261950&scope=bot&permissions=1281875137