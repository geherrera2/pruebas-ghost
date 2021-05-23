var index = require('./index');
var utils = require('./utils');

utils.createDirectoriesDataPool();
index.createContentData();
index.createTagsData();
index.createTitlesData();


console.log('title: ', index.getTitle());
console.log('paragraph: ', index.getParagraph());
console.log('tag: ', index.getTag());