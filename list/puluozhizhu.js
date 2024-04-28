
const { scrapeNovel } = require('../scraper.js')

// 普罗之主
const config = {
  directoryUrl : `http://www.77shuku.la/novel/139880/`, // 假设目录页URL
  nameClass : '#info h1',
  chapterLinksClass : '.zjlist dd a',
  chapterContentClass : '.page-content',
  chapterTitleClass : '#chapter_title_924915',
}
scrapeNovel(config)