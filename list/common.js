
const { scrapeNovel } = require('../tool/scraper.js')

const config = {
  directoryUrl : `https://www.qhyrzs.com/42206/`, // 假设目录页URL
  nameClass : '#info h1',
  chapterLinksClass : '.book_list a',
  chapterContentClass : '.contentbox',
  chapterTitleClass : '.h1title h1',
}
scrapeNovel(config)