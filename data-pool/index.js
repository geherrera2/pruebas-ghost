var faker = require('faker/locale/en');
var constants = require('./constants');
var utils = require('./utils');


function createTitlesData() {
    titles = [];
    maxNumberOfWords = 10;
    for(let i = 0; i < constants.AMOUNT_DATA_PER_FILE; i++) {
        possibleTitle = faker.lorem.words(utils.getRandNumber(maxNumberOfWords));
        if(possibleTitle.length < constants.MAX_SIZE_TITLE) {
            titles.push(possibleTitle);
        }
    }
    utils.writeToFile(constants.TITLES_FILE, {"titles": titles});
}

function createContentData() {
    content = [];
    maxAmountParagraphs = 3;
    for(let i = 0; i < constants.AMOUNT_DATA_PER_FILE; i++) {
        cont = faker.lorem.paragraphs(utils.getRandNumber(maxAmountParagraphs));
        content.push(cont);
    }
    utils.writeToFile(constants.CONTENT_FILE, {"content": content});
}

function createTagsData() {
    tags = [];
    maxNumberOfWords = 5;
    for(let i = 0; i < constants.AMOUNT_DATA_PER_FILE; i++) {
        possibleTagName = faker.lorem.words(utils.getRandNumber(maxNumberOfWords));
        if(possibleTagName.length < constants.MAX_SIZE_TAG_NAME) {
            tags.push(possibleTagName);
        }
    }
    utils.writeToFile(constants.TAGS_FILE, {"tags": tags});
}

function getTitle() {
    titles_json = utils.readFileAsJSON(constants.TITLES_FILE);
    return titles_json.titles[utils.getRandNumber(constants.AMOUNT_DATA_PER_FILE)];
}

function getParagraph() {
    content_json = utils.readFileAsJSON(constants.CONTENT_FILE);
    return content_json.content[utils.getRandNumber(constants.AMOUNT_DATA_PER_FILE)];
}

function getTag() {
    tags_json = utils.readFileAsJSON(constants.TAGS_FILE);
    return tags_json.tags[utils.getRandNumber(constants.AMOUNT_DATA_PER_FILE)];
}

function createAllData() {
    createContentData();
    createTagsData();
    createTitlesData();
    return true;
}

module.exports = {getTitle, getTag, getParagraph, createTagsData, createContentData, createTitlesData, createAllData};
