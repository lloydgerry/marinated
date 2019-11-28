// epicScraper.js

const puppeteer = require('puppeteer');
const cheerio = require('cheerio');

const epicScraper = (url) => {

  const recipe = {};
  let browser;

  return puppeteer
    .launch()
    .then(b => {
      browser = b;
      return b.newPage();
    })
    .then(page => {
      page.setUserAgent('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36');
      return page.goto(url).then(() => page.content());
    })
    .then(html => {
      const $ = cheerio.load(html);
      
      recipe.source_url = url;
      recipe.title = $('h1').text();
      recipe.image_url = `https://www.epicurious.com${$('img.photo').attr('src')}`;
      recipe.author = $('.contributors > .contributor').attr('title');
      recipe.summary = $('.dek > p').text();
      recipe.prep_time = $('dd.total-time').text();
      recipe.servings = $('dd.yield').text(); 

      recipe.ingredients = [];
      $('.ingredients li').each((i, el) => {
        recipe.ingredients.push($(el).text());
      });

      recipe.preperation = [];
      $('.preparation-steps > li').each((i, el) => {
        recipe.preperation.push($(el).text().trim('\n'));
      });

      browser.close();
      return recipe;
    })
    .catch(console.error);
};

module.exports = { 
  epicScraper
};