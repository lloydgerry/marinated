// scraperRouter.js
// November 2019


const epicScraper = require('./webScrapers/epicScraper.js');


const scraperRouter = (url) => {
  let recipe = {};
  const splitUrl = url.split('.');  
  
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

module.exports = { scraperRouter };