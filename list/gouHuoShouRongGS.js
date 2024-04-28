
const { scrapeNovel } = require('../scraper.js')

// 篝火收容公司
const config = {
  directoryUrl : `http://www.77shuku.la/novel/138510/`, // 假设目录页URL
  nameClass : '#info h1',
  chapterLinksClass : '.zjlist dd a',
  chapterContentClass : '.page-content',
  chapterTitleClass : '#chapter_title_924915',
}
scrapeNovel(config)