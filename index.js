const TelegramApi = require('node-telegram-bot-api')
const { ReadableStreamBYOBReader } = require('stream/web')

const token = '5114589412:AAE1JO1uswQrvoDkALopCiRAdn4SBOgiAWM'

const bot = new TelegramApi(token,{polling: true})

var days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
var months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
var weekType = ["Нечетная", "Четная"];
var myDate = new Date();
var fullDate = "Сегодня: "+ days[myDate.getDay()] + ", " + myDate.getDate() + " " + months[myDate.getMonth()] + " " + myDate.getFullYear()  ;
let date = new Date(2022, 4, 25);//начальная дата понедельник
var dayR = Math.ceil(Math.abs(myDate.getTime() - date.getTime()) / (1000 * 3600 * 24));
function week(dayr){
    if (dayr%2===0) {
        return "Четная";
    }
    else if (dayr%2===1) {
        return "Нечетная";
    }
}
const start = () =>{
    bot.setMyCommands([
        {command: '/start', description: 'Старт приложения'},
        {command: '/info', description: 'Информация о боте'},
        {command: '/today', description: 'Расписание на сегодня'},
        {command: '/week', description: 'Расписание на эту неделю'}
    ])
    

    bot.on('message', async msg => {
        const text = msg.text;
        const chatId = msg.chat.id;
        if (text ==='/start') {
            return bot.sendMessage(chatId, 'Здраствуй, указаное расписание для группы КН-2.2.01')
        }
        if (text ==='/today') {
            await bot.sendMessage(chatId, fullDate)
            await bot.sendMessage(chatId, 'Сегодняшнее расписание:')
            var n = myDate.getDay();
            if (n===1||n===3||n===5 ) {
                if ((dayR/7-1)%2===0) {
                    switch (n) {
                        case 1:
                            await bot.sendMessage(chatId, 'с 11.50 до 13.25\n(UI\\UX Dта РКІ) пр \nв. Петрович Я.О\nLink from Zoom: https://zoom.us/j/6214142362?pwd=c3JVVFNMSm9DcW5DdFRyOUpCY1lwZz09')
                            return bot.sendMessage(chatId, 'с 13.40 до 15.15\n(ЧМ) пр\nдоц. Калініна Т.О.\nLink from Zoom: https://zoom.us/j/6214142362?pwd=c3JVVFNMSm9DcW5DdFRyOUpCY1lwZz09')
                        case 3:
                            await bot.sendMessage(chatId, 'c 8.00 до 9.35\nТАл пр\nдоц. Заврак М.В.\nLink from Zoom: https://us04web.zoom.us/j/2280482649?pwd=ZGJQTndMdHdRT2ZGRmttZjdHVzE1UT09')
                            await bot.sendMessage(chatId, 'c 9.50 до 11.25\nКГр лб\nдоц. Трегубова І.А., доц. Заврак М.В.\nLink from Zoom: (Заврак) https://us04web.zoom.us/j/2280482649?pwd=ZGJQTndMdHdRT2ZGRmttZjdHVzE1UT09\n(Трегубова) https://us04web.zoom.us/j/7051339778?pwd=UWZUOW4yTXhWOXVzQklhU2k2RmUzdz09')
                            return bot.sendMessage(chatId, 'c 11.50 до 13.25\nКСАК лб\nвикл. Патлаенко\nLink from Zoom: https://us04web.zoom.us/j/3867814548?pwd=YU1hV25IYWo2K284bDRIK2pwd0xpUT09')
                        case 5:
                            if ((dayR/7-1)%4!==0) {
                                await bot.sendMessage(chatId, 'c 8.00 до 9.35\nОрганізація баз даних та знань(ОБДЗ) ЛК\nдоц. Глазунова Л.В.\nLink from Zoom: https://us04web.zoom.us/j/4074773619?pwd=cnd4SWM3Q0ZaME05dWlsdUMrM2NoQT09')
                            }
                            await bot.sendMessage(chatId, 'c 9.50 до 11.25\n(ЕтаБ)пр\nдоц .Кораблінова І.А.\nLink from Zoom: https://us04web.zoom.us/j/78757671716?pwd=7Yn0hYH0ODqbi5S-r83MfCn8KqxLPX.1')
                            return bot.sendMessage(chatId, 'c 11.50 до 13.25\nОБДЗ лб \nдоц. Глазунова Л.В., доц. Калініна Т.О..\nLink from Zoom: (Глазунова)https://us04web.zoom.us/j/4074773619?pwd=cnd4SWM3Q0ZaME05dWlsdUMrM2NoQT09 (Калініна)https://us04web.zoom.us/j/8572022979?pwd=OG5zb0hGYWpyaUVVWEFITkxGZXRjQT09')
                        default:
                            break;
                    }
                } else {
                    switch (n) {
                        case 1:
                            await bot.sendMessage(chatId, 'с 8.00 до 9.35\nКомп’ютерна схемотехніка та  архітектура комп’ютерів (КСАК) ЛК \nв. Патлаєнко М.Д.\nLink from Zoom: https://us04web.zoom.us/j/3867814548?pwd=YU1hV25IYWo2K284bDRIK2pwd0xpUT09')
                            await bot.sendMessage(chatId, 'с 9.50 до 11.25\nUI\\UX Design та розробка користувальницьких інтерфейфсів( UI\\UX Dта РКІ) ЛК (н) \nв. Петрович Я.О.\nLink from Zoom: https://zoom.us/j/6214142362?pwd=c3JVVFNMSm9DcW5DdFRyOUpCY1lwZz09')
                            return bot.sendMessage(chatId, 'с 11.50 до 13.25\nЧисельні методи (ЧМ) ЛК\nдоц. Глазунова Л.В.\nLink from Zoom: https://us04web.zoom.us/j/4074773619?pwd=cnd4SWM3Q0ZaME05dWlsdUMrM2NoQT09')
                        case 3:
                            await bot.sendMessage(chatId, 'c 8.00 до 9.35\nТАл ЛК\nдоц. Заврак М.В.\nLink from Zoom: https://us04web.zoom.us/j/2280482649?pwd=ZGJQTndMdHdRT2ZGRmttZjdHVzE1UT09')
                            await bot.sendMessage(chatId, 'c 9.50 до 11.25\nКГр ЛК\nдоц. Трегубова І.А.\nLink from Zoom: https://us04web.zoom.us/j/7051339778?pwd=UWZUOW4yTXhWOXVzQklhU2k2RmUzdz09')
                            return bot.sendMessage(chatId, 'c 11.50 до 13.25\nКСАК лб\nвикл. Патлаенко\nLink from Zoom: https://us04web.zoom.us/j/3867814548?pwd=YU1hV25IYWo2K284bDRIK2pwd0xpUT09')
                        case 5:
                            if ((dayR/7-1)%4!==0) {
                                await bot.sendMessage(chatId, 'c 8.00 до 9.35\nОрганізація баз даних та знань(ОБДЗ) ЛК\nдоц. Глазунова Л.В.\nLink from Zoom: https://us04web.zoom.us/j/4074773619?pwd=cnd4SWM3Q0ZaME05dWlsdUMrM2NoQT09')
                            }
                            await bot.sendMessage(chatId, 'c 11.50 до 13.25\nОБДЗ пр \nдоц. Глазунова Л.В., доц. Калініна Т.О..\nLink from Zoom: (Глазунова)https://us04web.zoom.us/j/4074773619?pwd=cnd4SWM3Q0ZaME05dWlsdUMrM2NoQT09 (Калініна)https://us04web.zoom.us/j/8572022979?pwd=OG5zb0hGYWpyaUVVWEFITkxGZXRjQT09')
                            return bot.sendMessage(chatId, 'c 13.40 до 15.15\nЕкономіка та бізнес (ЕтаБ) ЛК\nдоц .Кораблінова І.А.\nLink from Zoom: https://us04web.zoom.us/j/78757671716?pwd=7Yn0hYH0ODqbi5S-r83MfCn8KqxLPX.1')
                        default:
                            break;
                    }
                }
            } else {
                return bot.sendMessage(chatId, 'Сегодня нету пар.')
            }
        }
        if (text ==='/week') {
            await bot.sendMessage(chatId, 'Текущая неделя: ' + week(dayR/7-1))
            return bot.sendMessage(chatId, 'Расписание на неделю:')
        }
        if (text ==='/info') {
            await bot.sendMessage(chatId, 'Информация о расписании:')
            return bot.sendDocument(chatId, './table.xls')
        }
        
        return bot.sendMessage(chatId,'Я тебя не понимаю!')
    })
}

start()