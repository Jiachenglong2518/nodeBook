
const { scrapeNovel } = require('../tool/scraper.js')
// 清河文学网
const config = {
  directoryUrl : `https://www.waxsh.com/39351/`, // 假设目录页URL
  nameClass : '#info h1',
  chapterLinksClass : '.book_list a',
  chapterContentClass : '.contentbox',
  chapterTitleClass : '.h1title h1',
}
scrapeNovel(config)