var faker = require('faker/locale/en');
const TITLE_SIZES = require('./constants').TITLE_SIZES;
const AMOUNT_DATA_PER_FILE = require('./constants').AMOUNT_DATA_PER_FILE;
const TITLES_FILE = require('./constants').TITLES_FILE;
const PARAGRAPH_SIZES = require('./constants').PARAGRAPH_SIZES;
const CONTENT_FILE = require('./constants').CONTENT_FILE;
const TAGS_FILE = require('./constants').TAGS_FILE;
const AMOUNT_PARAGRAPHS_PER_FILE = require('./constants').AMOUNT_PARAGRAPHS_PER_FILE;
const TAG_SIZES = require('./constants').TAG_SIZES;
var utils = require('./utils');


function createTitlesData() {
    let titles = {};
    TITLE_SIZES.forEach(titleSize => {
        let estimateWordsLength = 4;
        let titlesCreated = 0;
        titles[titleSize] = []
        while(titlesCreated < Math.floor(AMOUNT_DATA_PER_FILE / TITLE_SIZES.length)) {
            possibleTitle = faker.lorem.sentence(Math.floor(titleSize / estimateWordsLength )).slice(0, titleSize);
            if(possibleTitle.length == titleSize) {
                titles[titleSize].push(possibleTitle);
                titlesCreated++;
            }
        }
    });
    utils.writeToFile(TITLES_FILE, {"titles": titles});
}

function createContentData() {
    let content = {};
    PARAGRAPH_SIZES.forEach(numberParagraphs => {
        let paragraphsCreated = 0;
        content[numberParagraphs] = []
        while(paragraphsCreated < Math.floor(AMOUNT_PARAGRAPHS_PER_FILE / PARAGRAPH_SIZES.length)) {
            cont = faker.lorem.paragraphs(numberParagraphs);
            content[numberParagraphs].push(cont);
            paragraphsCreated++;
            }
    });
    utils.writeToFile(CONTENT_FILE, {"content": content});
}

function createTagsData() {
    let tags = {};
    let estimateWordsLength = 4;
    TAG_SIZES.forEach(tagSize => {
        let tagsCreated = 0;
        tags[tagSize] = [];
        while(tagsCreated < Math.floor(AMOUNT_DATA_PER_FILE / TAG_SIZES.length)) {
            possibleTagName = faker.lorem.sentence(Math.floor(tagSize / estimateWordsLength )).slice(0, tagSize);
            if(possibleTagName.length == tagSize) {
            tags[tagSize].push(possibleTagName);
            tagsCreated++;
        }
    }});
    utils.writeToFile(TAGS_FILE, {"tags": tags});
}

function getTitle(numCharacters=100) {
    if(!TITLE_SIZES.includes(numCharacters)) {
        numCharacters = 100;
    }
    titles_json = utils.readFileAsJSON(TITLES_FILE);
    return titles_json.titles[numCharacters][utils.getRandNumber(AMOUNT_DATA_PER_FILE / TITLE_SIZES.length)];
}

function getParagraph(numParagraphs=1) {
    if(!PARAGRAPH_SIZES.includes(numParagraphs)) {
        numParagraphs = 1;
    }
    content_json = utils.readFileAsJSON(CONTENT_FILE);
    return content_json.content[numParagraphs][utils.getRandNumber(AMOUNT_PARAGRAPHS_PER_FILE / PARAGRAPH_SIZES.length)];
}

function getTag(tagSize=10) {
    if(!TAG_SIZES.includes(tagSize)) {
        tagSize = 10;
    } 
    tags_json = utils.readFileAsJSON(TAGS_FILE);
    return tags_json.tags[tagSize][utils.getRandNumber(AMOUNT_DATA_PER_FILE / TAG_SIZES.length)];
}

function createAllData() {
    createContentData();
    createTagsData();
    createTitlesData();
    return true;
}

module.exports = {getTitle, getTag, getParagraph, createTagsData, createContentData, createTitlesData, createAllData};
