
const { scrapeNovel } = require('../tool/bqg.js')

  const config = {
  directoryUrl : `https://www.biqusa.cc/4_4504/`, // 假设目录页URL
  nameClass : '#list dt', // 小说名
  chapterLinksClass : '#list dd a',
  chapterContentClass : '#content',
  chapterTitleClass : '.bookname h1',
  origin: 'https://www.biqusa.cc/4_4504/',
}
scrapeNovel(config)