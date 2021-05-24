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
    titles = [];
    maxNumberOfWords = 10;
    for (let i = 0; i < constants.AMOUNT_DATA_PER_FILE; i++) {
        possibleTitle = faker.lorem.words(utils.getRandNumber(maxNumberOfWords));
        if (possibleTitle.length < constants.MAX_SIZE_TITLE) {
            titles.push(possibleTitle);
        }
    }
    utils.writeToFile(constants.TITLES_FILE, { "titles": titles });
}

function createContentData() {
    content = [];
    maxAmountParagraphs = 3;
    for (let i = 0; i < constants.AMOUNT_DATA_PER_FILE; i++) {
        cont = faker.lorem.paragraphs(utils.getRandNumber(maxAmountParagraphs));
        content.push(cont);
    }
    utils.writeToFile(constants.CONTENT_FILE, { "content": content });
}

function createTagsData() {
    tags = [];
    maxNumberOfWords = 5;
    for (let i = 0; i < constants.AMOUNT_DATA_PER_FILE; i++) {
        possibleTagName = faker.lorem.words(utils.getRandNumber(maxNumberOfWords));
        if (possibleTagName.length < constants.MAX_SIZE_TAG_NAME) {
            tags.push(possibleTagName);
        }
    }
    utils.writeToFile(constants.TAGS_FILE, { "tags": tags });
}

function createUrlsData() {
    urls = [];
    for (let i = 0; i < constants.AMOUNT_DATA_PER_FILE; i++) {
        url = faker.internet.url();
        urls.push(url);
    }
    utils.writeToFile(constants.URLS_FILE, { "urls": urls });
}

function getTitle(numCharacters = 100) {
    if (!TITLE_SIZES.includes(numCharacters)) {
        numCharacters = 100;
    }
    titles_json = utils.readFileAsJSON(TITLES_FILE);
    return titles_json.titles[numCharacters][utils.getRandNumber(AMOUNT_DATA_PER_FILE / TITLE_SIZES.length)];
}

function getParagraph(numParagraphs = 1) {
    if (!PARAGRAPH_SIZES.includes(numParagraphs)) {
        numParagraphs = 1;
    }
    content_json = utils.readFileAsJSON(CONTENT_FILE);
    return content_json.content[numParagraphs][utils.getRandNumber(AMOUNT_PARAGRAPHS_PER_FILE / PARAGRAPH_SIZES.length)];
}

function getTag(tagSize = 10) {
    if (!TAG_SIZES.includes(tagSize)) {
        tagSize = 10;
    }
    tags_json = utils.readFileAsJSON(TAGS_FILE);
    return tags_json.tags[tagSize][utils.getRandNumber(AMOUNT_DATA_PER_FILE / TAG_SIZES.length)];
}

function getUrl() {
    urls_json = utils.readFileAsJSON(constants.URLS_FILE);
    return urls_json.urls[utils.getRandNumber(constants.AMOUNT_DATA_PER_FILE)];
}

function createAllData() {
    createContentData();
    createTagsData();
    createTitlesData();
    createUrlsData();
    return true;
}

module.exports = { getTitle, getTag, getParagraph, getUrl, createTagsData, createContentData, createTitlesData, createUrlsData, createAllData };
