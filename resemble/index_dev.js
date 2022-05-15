const playwright = require('playwright');
const compareImages = require("resemblejs/compareImages")
const config = require("./config.json");
const fs = require('fs');

const { viewportHeight, viewportWidth, browsers, options } = config;

async function executeTest(){
    if(browsers.length === 0){
      return;
    }
    let resultInfo = {}


    let datetime = new Date().toISOString().replace(/:/g,".");
    for(b of browsers){
        if(!b in ['chromium']){
            return;
        }
        if (!fs.existsSync(`./results/${datetime}`)){
            fs.mkdirSync(`./results/${datetime}`, { recursive: true });
        }


        for (let index = 0; index < 9 ; index++) {

          const data = await compareImages(
            fs.readFileSync(`results/3-41-1/escen04.spec.js/esc04 - `+index+`.png`),
            fs.readFileSync(`results/4-40-0/escen04.spec.js/esc04 - `+index+`.png`),
            options
          );


          resultInfo[index] = {
            index,
            isSameDimensions: data.isSameDimensions,
            dimensionDifference: data.dimensionDifference,
            rawMisMatchPercentage: data.rawMisMatchPercentage,
            misMatchPercentage: data.misMatchPercentage,
            diffBounds: data.diffBounds,
            analysisTime: data.analysisTime
          }

          
        }        
        fs.writeFileSync(`./results/${datetime}/compare-${b}`+index+`.png`, data.getBuffer());
        fs.writeFileSync(`./results/${datetime}/report.html`, createReport(datetime, resultInfo, index));

    }

    fs.copyFileSync('./index.css', `./results/${datetime}/index.css`);

    console.log('------------------------------------------------------------------------------------')
    console.log("Execution finished. Check the report under the results folder")
    console.log(typeof(resultInfo))
    return resultInfo;  
  }
(async ()=>console.log(await executeTest()))();

function browser(b, info, steps){

  let str = ''
  for (let index = 0; index <= steps; index++) {
 
    str+= 
    ` <div class= " step${index}">
        <div class=" browser" id="test${index}">
        <div class=" btitle">
            <h2>Browser: ${b}</h2>
            <p>Data: ${JSON.stringify(info[steps])}</p>
        </div>
        <div class="imgline">
          <div class="imgcontainer">
            <span class="imgname">Reference</span>
            <img class="img2" src="../3-41-1/escen04.spec.js/esc04 - ${index}.png" id="refImage" label="Reference">
          </div>
          <div class="imgcontainer">
            <span class="imgname">Test</span>
            <img class="img2" src="../4-40-0/escen04.spec.js/esc04 - ${index}.png" id="testImage" label="Test">
          </div>
        </div>
        <div class="imgline">
          <div class="imgcontainer">
            <span class="imgname">Diff</span>
            <img class="imgfull" src="./compare-${b}${index}.png" id="diffImage" label="Diff">
          </div>
        </div>
      </div>
    </div>`
   
  }
  return str 
}

function createReport(datetime, resInfo, index){
    return `
    <html>
        <head>
            <title> VRT Report </title>
            <link href="index.css" type="text/css" rel="stylesheet">
        </head>
        <body>
            <h1>Report for 
                 <a href="${config.url}"> ${config.url}</a>
            </h1>
            <p>Executed: ${datetime}</p>
              <div id="visualizer">
                  ${config.browsers.map(b=>browser(b, resInfo, index))}
              </div>
        </body>
    </html>`
}