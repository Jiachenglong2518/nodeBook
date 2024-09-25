
const { scrapeNovel } = require('../tool/scraper.js')

const config = {
  directoryUrl : `https://www.qhyrzs.com/11833/`, // 假设目录页URL
  nameClass : '#info h1',
  chapterLinksClass : '.zjlist dd a',
  chapterContentClass : '.page-content',
  chapterTitleClass : '#chapter_title_924915',
}
scrapeNovel(config)