var index = require('./index');
var utils = require('./utils');

utils.createDirectoriesDataPool();
index.createContentData();
index.createTagsData();
index.createUrlsData();
index.createFileDate();
index.createTitlesData();

console.log('title: ', index.getTitle());
console.log('paragraph: ', index.getParagraph());
console.log('url: ', index.getUrl());
console.log('tag: ', index.getTag());
console.log('date_future: ', index.getDateFuture());
console.log('date_pass: ', index.getDatePass());