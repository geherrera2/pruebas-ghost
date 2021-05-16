const compareImages = require("resemblejs/compareImages")
const config = require("./config.json");
const fs = require('fs');

const { viewportHeight, viewportWidth, stories, options } = config;

async function compareWithResembleJS() {
    let resultInfo = Array();
    let datetime = new Date().toISOString().replace(/:/g, ".");

    if (!fs.existsSync(`./results/${datetime}`)) {
        fs.mkdirSync(`./results/${datetime}`, { recursive: true });
    }

    stories.forEach(s => {
        let screenshots = 0;
        const dirOne = `../proyecto-cypress/cypress/screenshots/ghost3.3.0/escenario-${s}.js`;
        const dirTwo = `../proyecto-cypress/cypress/screenshots/ghost3.42.5/escenario-${s}.js`;
        fs.readdir(dirOne, async (err, files) => {
            if (err) throw err;

            screenshots = files.length;
            if (screenshots === 0) {
                return;
            }

            for (file of files) {
                fs.copyFileSync(`${dirOne}/${file}`, `./results/${datetime}/ghost33-${s}-${file}`);
                fs.copyFileSync(`${dirTwo}/${file}`, `./results/${datetime}/ghost34-${s}-${file}`);

                const data = await compareImages(
                    fs.readFileSync(`${dirOne}/${file}`),
                    fs.readFileSync(`${dirTwo}/${file}`),
                    options
                );
                resultInfo.push({
                    isSameDimensions: data.isSameDimensions,
                    dimensionDifference: data.dimensionDifference,
                    rawMisMatchPercentage: data.rawMisMatchPercentage,
                    misMatchPercentage: data.misMatchPercentage,
                    diffBounds: data.diffBounds,
                    analysisTime: data.analysisTime,
                    parent: s,
                    file: file
                })
                fs.writeFileSync(`./results/${datetime}/compare-${s}-${file}`, data.getBuffer());
            }

            fs.writeFileSync(`./results/${datetime}/report-${s}.html`, createReport(datetime, resultInfo));
            fs.copyFileSync('./index.css', `./results/${datetime}/index.css`);
        });
    });
}
(async () => console.log(await compareWithResembleJS()))();

function browser(b, info) {
    return `<div class=" browser" id="test0">
    <div class=" btitle">
        <h2>Escenario: ${b}</h2>
        <p>Data: ${JSON.stringify(info)}</p>
    </div>
    <div class="imgline">
      <div class="imgcontainer">
        <span class="imgname">Reference</span>
        <img class="img2" src="./ghost33-${info.s}-${info.file}" id="refImage" label="Reference">
      </div>
      <div class="imgcontainer">
        <span class="imgname">Test</span>
        <img class="img2" src="./ghost34-${info.s}-${info.file}" id="testImage" label="Test">
      </div>
    </div>
    <div class="imgline">
      <div class="imgcontainer">
        <span class="imgname">Diff</span>
        <img class="imgfull" src="./compare-${info.s}-${info.file}" id="diffImage" label="Diff">
      </div>
    </div>
  </div>`
}

function browser2() {
    return `<div class=" browser" id="test0">
    <div class=" btitle">
        <h2>Escenario: </h2>
        <p>Data: </p>
    </div>
    <div class="imgline">
      <div class="imgcontainer">
        <span class="imgname">Reference</span>
        <img class="img2" src="./ghost33-" id="refImage" label="Reference">
      </div>
      <div class="imgcontainer">
        <span class="imgname">Test</span>
        <img class="img2" src="./ghost34-" id="testImage" label="Test">
      </div>
    </div>
    <div class="imgline">
      <div class="imgcontainer">
        <span class="imgname">Diff</span>
        <img class="imgfull" src="./compare-" id="diffImage" label="Diff">
      </div>
    </div>
  </div>`
}


function createReport(datetime, resInfo) {
    console.log('resInfo');
    console.log(resInfo);
    return `
    <html>
        <head>
            <title>Report</title>
            <link href="index.css" type="text/css" rel="stylesheet">
        </head>
        <body>
            <h1>Report for 
                 <a href="${config.url}"> ${config.url}</a>
            </h1>
            <p>Executed: ${datetime}</p>
            <div id="visualizer">
        </div >
        </body >
    </html > `
}
