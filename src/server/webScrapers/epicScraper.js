// epicScraper.js

const puppeteer = require('puppeteer');
const cheerio = require('cheerio');

const epicScraper = (url) => {


  const recipe = {};
  let browser;

  return puppeteer
    .launch({ args: ['--no-sandbox'] })
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
      recipe.image_url = `${$('source').attr('srcset')}`;
      recipe.author = $('.contributors > .contributor').attr('title');
      recipe.summary = $('.dek > p').text();
      recipe.prep_time = $('dd.total-time').text();
      recipe.servings = $('dd.yield').text(); 

      recipe.ingredients = [];
      $('.ingredients li').each((i, el) => {
        recipe.ingredients.push($(el).text());
      });

      recipe.preparation = [];
      $('.preparation-steps > li').each((i, el) => {
        recipe.preparation.push($(el).text().trim('\n'));
      });
      
      recipe.tags = $('meta[name="keywords"]').attr('content');

      browser.close();
      return recipe;
    })
    .catch(console.error);
};


module.exports = { 
  epicScraper
};