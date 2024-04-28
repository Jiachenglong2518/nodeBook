// http://www.77shuku.la/novel/79377/

const { scrapeNovel } = require('../scraper.js')

// 每天都离现行更近一步
const config = {
  directoryUrl : `http://www.77shuku.la/novel/79377/`, // 假设目录页URL
  nameClass : '#info h1',
  chapterLinksClass : '.zjlist dd a',
  chapterContentClass : '.page-content',
  chapterTitleClass : '#chapter_title_924915',
}
scrapeNovel(config)