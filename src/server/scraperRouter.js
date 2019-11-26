// scraperRouter.js
// November 2019

const { epicScraper } = require('./webScraper/epicScraper');
// import epicScraper from './webScraper/epiScraper.js';

url =  'https://www.epicurious.com/recipes/food/views/big-batch-marinated-bell-peppers';

const scraperRouter = (url) => {
  recipe = {};
  splitUrl = url.split('.');  
  
  if (splitUrl.includes('epicurious') === true ){
    epicScraper(url)
      .then(res => {
        console.log(res);
        recipe = res;
          });
  } else {
    recipe = `ERROR: ${url} is not supported at this time for import.`
    console.log(recipe);
  }


};
scraperRouter(url);

module.exports = {
  scraperRouter
};

