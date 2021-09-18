const { Telegraf } = require("telegraf")
const config = require("")

const bot = new Telegraf(config.token.telegram_token) { "token": { telegram_token: "2005311694:AAHrIbbs7N_t-w568HlW5HY4HX3vPUdP9xE" } }
console.log("Ilooh Dissociamento bot è un bot che permette di dissociarti.")

bot.command("midissocio", (ctx) => {
        ctx.reply("Ti Stai per dissociare")
                setTimeout(() => {
                ctx.reply("Messaggio indovinato! (" + Math.floor(Math.random() * 10000001) + ")")
                setTimeout(() => {
                                        if (Math.floor(Math.random() * 28) === 7) {
                                                ctx.reply("INon puoi dissociarti! Mi dispiace, rip!")
                                        } else {
                                                ctx.reply("Errore!")
                                setTimeout(() => {
                                ctx.reply("100% dissociato.")
                                }, 15000)
                                        }    
                }, 1000)
                }, 5000)
                }, 7000)
        }, 2000)
})

bot.command("miassocio", (ctx) => {
        ctx.reply(" TI STAI ASSOCIANDO!")
                setTimeout(() => {
                ctx.reply("Messaggio indovinato! (" + Math.floor(Math.random() * 10000001) + ")")
                setTimeout(() => {
                                        ctx.reply("⌚ Associamento in corso...")
                                setTimeout(() => {
                                ctx.reply("100% associato.")
                                }, 15000)  
                }, 1000)
                }, 5000)
                }, 7000)
        }, 2000)
})
