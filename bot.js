/* unflipper generated with create-discord-bot CLI */
const Discord = require('discord.js')
require('dotenv').config()
const client = new Discord.Client()

client.on('ready', () => {
  client.user.setActivity('flipping tables', { type: 'WATCHING' })
})

client.on('message', (message) => {
  if (message.author.bot) return
  if (message.content === '(╯°□°）╯︵ ┻━┻') message.channel.send('┬─┬ ノ( ゜-゜ノ)')
})

client.login(process.env.DISCORD_TOKEN);