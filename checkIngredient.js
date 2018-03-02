const fs = require('fs');

const GOOD_INGREDIENTS = [
  'spinach', 'romaine', 'garbanzo', 'chickpeas'
];

const BAD_INGREDIENTS = [
  'grapes', 'corn'
];

module.exports = (ingredient) => {
  const isIngredientGood = GOOD_INGREDIENTS.filter(x => x === ingredient).length > 0;
  const isIngredientBad = BAD_INGREDIENTS.filter(x => x === ingredient).length > 0;
  
  if(isIngredientGood) {
    return 'YES';  
  } else if(isIngredientBad) {
    return 'NO';
  } else {
    return 'MAYBE';
  }
}