
const { ibabytxt } = require('../ibabytxt.js')

// 带着网卡回1905
const config = {
  directoryUrl : `https://www.ibabytxt.com/indexlist/261072/1/`, // 假设目录页URL
  nameClass : 'a.w',
  chapterLinksClass : '.BCsectionTwo-top-chapter .g',
  chapterTitleClass : '#chapterTitle',
  chapterContentClass : '#content',
  origin: 'https://www.ibabytxt.com',
}
ibabytxt(config)