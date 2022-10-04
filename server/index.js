require("dotenv").config();

const TelegramBot = require("node-telegram-bot-api");

const bot = new TelegramBot(process.env.BOT_TOKEN, { polling: true });

const webAppUrl = "https://google.com";

bot.on("message", async (msg) => {
  const chatId = msg.chat.id;
  const text = msg.text;

  // await bot.sendMessage(chatId, "Recei ved message");
  // if (text === "/start") {
  //   await bot.sendMessage(chatId, "Ниже появится форма", {
  //     reply_markup: {
  //       keyboard: [[{ text: "Заполнить форму" }]],
  //     },
  //   });
  // }

  if (text === "/start") {
    await bot.sendMessage(chatId, "Ниже появится форма", {
      reply_markup: {
        inline_keyboard: [
          [{ text: "Заполнить форму", web_app: { url: webAppUrl } }],
        ],
      },
    });
  }
});
