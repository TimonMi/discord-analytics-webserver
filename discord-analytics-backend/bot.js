const Discord = require('discord.js');
const client = new Discord.Client();
const token = process.env.DISCORD_BOT_TOKEN;

if(!token) {
  console.err("You don't have a discord bot token defined! Declare one using the enviroment variable DISCORD_BOT_TOKEN");
}

module.exports = {
  getData: async function(id) {
    return new Promise(async function(resolve, reject) {
      if (client.readyTimestamp == null) {
        await client.login(token);
      }
      try {
        user = await client.fetchUser(id);
        data = {
          response: {
            param: '?id=' + id,
            code: 200,
          },
          name: user.username,
          tag: user.tag,
          id: id,
          avatarURL: user.displayAvatarURL,
          createdTimestamp: user.createdTimestamp,
          bot: user.bot,
        };
      } catch (err) {
        data = {
          response: {
            param: '?id=' + id,
            code: 409,
          },
        };
      }
      resolve([data, data.response.code]);
    });
  },
};
