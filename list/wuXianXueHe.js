
const { ibabytxt } = require('../tool/ibabytxt.js')

// 带着网卡回1905
const config = {
  directoryUrl : `https://www.qiukanshu.com/xlist/309178/1/`, // 假设目录页URL
  nameClass : 'a.w',
  chapterLinksClass : '.BCsectionTwo-top-chapter .g',
  chapterTitleClass : '#chapterTitle',
  chapterContentClass : '.RBGsectionThree-content',
  origin: 'https://www.ibabytxt.com',
}
ibabytxt(config)