/* unflipper generated with create-discord-bot CLI */
const Discord = require('discord.js')
require('dotenv').config()
const client = new Discord.Client()

const TABLEFLIP = '(╯°□°）╯︵ ┻━┻'
const UNFLIPS = ['┬─┬ ノ( ゜-゜ノ)', '┳━┳ ヽ(ಠل͜ಠ)ﾉ', '┬─┬ ಠ_ಠᕗ']

client.on('ready', () => {
  client.user.setActivity('flipping tables', { type: 'WATCHING' })
})

client.on('message', (message) => {
  if (message.author.bot) return
  if (message.content.includes(TABLEFLIP)) message.channel.send(UNFLIPS[Math.floor(Math.random() * UNFLIPS.length)])
})

client.login(process.env.DISCORD_TOKEN)
