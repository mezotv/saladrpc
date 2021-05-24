const DiscordRPC = require('discord-rpc');
const client = new DiscordRPC.Client({ transport: 'ipc' });
require('dotenv').config();

(async () => {
    client.on('ready', async () => {
        await client.setActivity({ 
            buttons: [{ label: "Join me here!", url: "https://salad.io" }, { label: "Discord", url: "https://discord.gg/zw27kekmqF" }],
            details: "Download Salad.io for free money!",
            state: "Use code <your code> for a x2 earning boost!",
            largeImageKey: "discord",
            largeImageText: "Salad.io",
            startTimestamp: new Date(),
            
        }).catch(err => console.log(err));

        console.log("SaladRPC has been enabled.");
    });

    await client.login({ clientId: process.env.applicationID }).catch(console.error);
})();