
var dataScenarios = [];
var valueMisMatchThreshold = 0.1;
var versionFolderGhost = "ghost3.3.0";

process.argv.forEach(function (val, index, array) {
    if(val === "reference"){
        versionFolderGhost = "ghost3.3.0";
    }

    if(val === "approve"){
        versionFolderGhost = "ghost3.42.5";
    }
});

var scenarios = [
    {
        "nombre": "escenario-01.js",
        "step": 5,
        "prefijo": "step0"
    },
    {
        "nombre": "escenario-02.js",
        "step": 3,
        "prefijo": "step0"
    },
    {
        "nombre": "escenario-03.js",
        "step": 5,
        "prefijo": "step00"
    },
    {
        "nombre": "escenario-04.js",
        "step": 11,
        "prefijo": "step00"
    },
    {
        "nombre": "escenario-05.js",
        "step": 9,
        "prefijo": "step0"
    },
    {
        "nombre": "escenario-06.js",
        "step": 6,
        "prefijo": "step0"
    },
    {
        "nombre": "escenario-07.js",
        "step": 7,
        "prefijo": "step00"
    },
    {
        "nombre": "escenario-08.js",
        "step": 11,
        "prefijo": "step00"
    },
    {
        "nombre": "escenario-09.js",
        "step": 7,
        "prefijo": "step0"
    },
    {
        "nombre": "escenario-10.js",
        "step": 7,
        "prefijo": "step0"
    },
    {
        "nombre": "escenario-11.js",
        "step": 7,
        "prefijo": "step00"
    },
    {
        "nombre": "escenario-12.js",
        "step": 5,
        "prefijo": "step00"
    },
    {
        "nombre": "escenario-13.js",
        "step": 8,
        "prefijo": "step0"
    },
    {
        "nombre": "escenario-14.js",
        "step": 6,
        "prefijo": "step0"
    },
    {
        "nombre": "escenario-15.js",
        "step": 5,
        "prefijo": "step00"
    },
    {
        "nombre": "escenario-16.js",
        "step": 6,
        "prefijo": "step00"
    },
    {
        "nombre": "escenario-17.js",
        "step": 9,
        "prefijo": "step0"
    },
    {
        "nombre": "escenario-18.js",
        "step": 4,
        "prefijo": "step0"
    },
    {
        "nombre": "escenario-19.js",
        "step": 4,
        "prefijo": "step00"
    },
    {
        "nombre": "escenario-20.js",
        "step": 7,
        "prefijo": "step00"
    }
]


scenarios.forEach( (e)=>{
    for (let index = 1; index <= e.step; index++) {
        dataScenarios.push({
            "label": e.nombre,
            "url": `../proyecto-cypress/cypress/screenshots/ghost3.3.0/${e.nombre}/${e.prefijo}${index}.png`,
            "referenceUrl": `../proyecto-cypress/cypress/screenshots/${versionFolderGhost}/${e.nombre}/${e.prefijo}${index}.png`,
            "misMatchThreshold" : valueMisMatchThreshold,
          })
    }
});


var dataBackstop = {
    "id": "backstop_default",
    "viewports": [
      {
        "label": "default",
        "width": 800,
        "height": 600
      }
    ],
    "onBeforeScript": "puppet/onBefore.js",
    "onReadyScript": "puppet/onReady.js",
    "scenarios": dataScenarios,
    "paths": {
      "bitmaps_reference": "backstop_data/bitmaps_reference",
      "bitmaps_test": "backstop_data/bitmaps_test",
      "engine_scripts": "backstop_data/engine_scripts",
      "html_report": "backstop_data/html_report",
      "ci_report": "backstop_data/ci_report"
    },
    "report": ["browser"],
    "engine": "puppeteer",
    "engineOptions": {
      "args": ["--no-sandbox"]
    },
    "asyncCaptureLimit": 5,
    "asyncCompareLimit": 50,
    "debug": false,
    "debugWindow": false
  };

    var dictstring = JSON.stringify(dataBackstop);

var fs = require('fs');
fs.writeFile("backstop.json", dictstring, function(err, result) {
    if(err) console.log('error', err);
});