const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');

/**
 * 爬取网络小说的目录和内容，并保存为TXT文件。
 * @param {Object} options 配置参数对象
 * @param {string} options.directoryUrl 目录页的URL地址
 * @param {string} options.nameClass 页面中小说名称的CSS选择器
 * @param {string} options.chapterLinksClass 页面中所有章节链接的CSS选择器
 * @param {string} options.chapterContentClass 页面中章节内容的CSS选择器
 * @param {string} options.chapterTitleClass 页面中章节标题的CSS选择器
 * @returns {void} 无返回值
 */
async function scrapeNovel({
  directoryUrl, // 假设目录页URL
  nameClass,
  chapterLinksClass,
  chapterContentClass,
  chapterTitleClass,
  outputRootFilePath = './down'
}) {
  try {
    // 获取目录页HTML
    const directoryResponse = await axios.get(directoryUrl);
    const directoryHtml = directoryResponse.data;

    // 解析目录页，获取所有章节链接
    const $ = cheerio.load(directoryHtml);
    const chapterLinks =  $(chapterLinksClass).map((i, el) => $(el).attr('href'));
    const title = $(nameClass).text().trim();
    console.log(`共发现 ${chapterLinks.length} 章节`);

    const outputFilePath = `${outputRootFilePath}/${title}.txt`
    // 创建并打开输出文件
    const outputFileStream = fs.createWriteStream(`${outputFilePath}`);

    // 按顺序爬取每个章节内容，并写入文件
    for (let i = 0; i < chapterLinks.length; i++) {
      const chapterUrl = `${chapterLinks[i]}`;
      const chapterResponse = await axios.get(chapterUrl);
      const chapterHtml = chapterResponse.data;

      const $chapter = cheerio.load(chapterHtml);
      const chapterTitle = $chapter(chapterTitleClass).text().trim();
      const chapterContent = $chapter(chapterContentClass)
        .text()
        .replace('/    /g', '  ')
        .replace('/最新网址：www.77shuku.la          /g', '')
        .trim();

      // 将章节标题与内容写入文件，之间以空行分隔
      outputFileStream.write(`${chapterTitle}\n\n${chapterContent}\n\n`);
      console.log(`已爬取第${i + 1}章 ${chapterTitle}`);
      // 可选：实时更新文件，便于查看进度（可能会降低性能）
      // outputFileStream.flush();
    }

    // 关闭输出文件流
    outputFileStream.end();

    console.log('完成爬取，TXT文件已保存至', outputFilePath);
  } catch (error) {
  console.error('爬取过程中发生错误:', error);
  }
}

module.exports = {
  scrapeNovel
}