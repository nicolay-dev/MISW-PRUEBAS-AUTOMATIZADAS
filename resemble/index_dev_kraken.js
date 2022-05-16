const playwright = require('playwright');
const compareImages = require("resemblejs/compareImages")
const config = require("./config.json");
const fs = require('fs');

//Decalarición de const
const { viewportHeight, viewportWidth, browsers, options } = config;
const foldersNumber = ['02','03','04','05','14'];
const imaginesLength = ['12','20','23','11','12'];
const nameImageInit = 'esc';
const nameImageEnd = '.png';
const folderKraken341 = 'GhostKraken/screenshots/';
const folderKraken444 = 'GhostKraken4_44/screenshots/';
let resultInfo = [[],[],[],[],[]];
let contentStructure = '';

async function executeTest(){

    if(browsers.length === 0){
      return;
    }


    let datetime = new Date().toISOString().replace(/:/g,".");
    for(b of browsers){
        if(!b in ['chromium']){
            return;
        }
        if (!fs.existsSync(`./results/${datetime}`)){
            fs.mkdirSync(`./results/${datetime}`, { recursive: true });
        }

        //Recorrecr carpetas
        for (let i = 0; i < foldersNumber.length; i++) {
          //Recorrer numeros archivos
          for (let j = 1; j < imaginesLength[i]; j++) {
            
            const data = await compareImages(
              fs.readFileSync(`../${folderKraken341}${nameImageInit}${foldersNumber[i]}-${j < 10 ? '0'+j : j}${nameImageEnd}`),
              fs.readFileSync(`../${folderKraken444}${nameImageInit}${foldersNumber[i]}-${j < 10 ? '0'+j : j}${nameImageEnd}`),
              options
            );

            //Extracción de analisis
            resultInfo[i][j] = {
              i,
              isSameDimensions: data.isSameDimensions,
              dimensionDifference: data.dimensionDifference,
              rawMisMatchPercentage: data.rawMisMatchPercentage,
              misMatchPercentage: data.misMatchPercentage,
              diffBounds: data.diffBounds,
              analysisTime: data.analysisTime
            };

            contentStructure += browser(datetime, i, j);

            //Escritura de resultados
            fs.writeFileSync(`./results/${datetime}/compare-${foldersNumber[i]} - ${j}.png`, data.getBuffer());
            fs.writeFileSync(`./results/${datetime}/report.html`, createReport(datetime));
          }
          
        }
    }
    fs.copyFileSync('./index.css', `./results/${datetime}/index.css`);

    // fs.copyFileSync('./index.css', `./results/${datetime}/index.css`);

    // console.log('------------------------------------------------------------------------------------');
    // console.log("Execution finished. Check the report under the results folder");
    // console.log(typeof(resultInfo));
    return resultInfo;  
  }
// (async ()=>console.log(await executeTest()))();
(async ()=> await executeTest())();

function browser(b, i, j){
  let str = '';

      str+= 
    ` <div class= " Carpeta ${i} -  Imagen ${j}">
        <div class=" browser" id="test ${i} - ${j}">
        <div class=" btitle">
            <h2>Browser: ${b}</h2>
            <p>Data: ${JSON.stringify(resultInfo[i][j])}</p>
        </div>
        <div class="imgline">
          <div class="imgcontainer">
            <span class="imgname">Reference</span>
            <img class="img2" src="../../../${folderKraken341}${nameImageInit}${foldersNumber[i]}-${j < 10 ? '0'+j : j}${nameImageEnd}"
            id="refImage" label="Reference">
          </div>
          <div class="imgcontainer">
            <span class="imgname">Test</span>
            <img class="img2" src="../../../${folderKraken444}${nameImageInit}${foldersNumber[i]}-${j < 10 ? '0'+j : j}${nameImageEnd}"
            id="testImage" label="Test">
          </div>
        </div>
        <div class="imgline">
          <div class="imgcontainer">
            <span class="imgname">Diff</span>
            <img class="imgfull" src="./compare-${foldersNumber[i]} - ${j}.png" id="diffImage" label="Diff">
          </div>
        </div>
      </div>
    </div>`
      
  return str;
}

function createReport(datetime){
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
              ${contentStructure}
              </div>
        </body>
    </html>`
}