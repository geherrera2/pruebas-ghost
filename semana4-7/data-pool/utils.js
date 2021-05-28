var fs = require('fs');
var DATA_POOL_DIRECTORY = require('./constants').DATA_POOL_DIRECTORY;
var FILES_OF_DATA = require('./constants').FILES_OF_DATA;


function createDirectoriesDataPool() {
    if(!fs.existsSync(DATA_POOL_DIRECTORY)) {
        fs.mkdirSync(DATA_POOL_DIRECTORY);
    }
    FILES_OF_DATA.forEach(fileName => {
        let path = pathToFile(fileName);
        if(!fs.existsSync(path)) {
            fs.writeFileSync(path, "");
        }
    });
}

function getRandNumber(maxNumber) {
    return Math.floor(Math.random() * maxNumber);
}

function pathToFile(fileName) {
    return DATA_POOL_DIRECTORY + '/' + fileName;
}

function writeToFile(fileName, content) {
    fs.writeFileSync(pathToFile(fileName), JSON.stringify(content));
}

function readFileAsJSON(fileName) {
    fileContent = fs.readFileSync(DATA_POOL_DIRECTORY +  fileName);
    return JSON.parse(fileContent);
}

module.exports = {createDirectoriesDataPool, readFileAsJSON, writeToFile, getRandNumber};
