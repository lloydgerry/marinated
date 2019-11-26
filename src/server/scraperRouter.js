// scraperRouter.js
// November 2019


import epicScraper from './webScraper/epicScraper.js';

let url =  'https://www.epicurious.com/recipes/food/views/big-batch-marinated-bell-peppers';

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
scraperRouter(url);

export default scraperRouter;