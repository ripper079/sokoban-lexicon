console.log("external js-file loaded");

let xSizeBlock = 50;
let ySizeBlock = 50;

let bodypadding = xSizeBlock * 2;

let totalWidthContainerBlock = xSizeBlock * tileMap01.width;
let totalHeightContainerBlock = ySizeBlock * tileMap01.height;


// Add event listener on keydown
document.addEventListener('keyup', (event) => {
    var name = event.key;
    var code = event.code;
    // Alert the key name and key code on keydown
    // console.log(`Key pressed ${name} \r\n Key code value: ${code}`);

    //Arrow Down
    if (code == "ArrowDown")
    {
        console.log("Player moved DOWN");
    }
    //Arrow Up
    else if (code == "ArrowUp")
    {
        console.log("Player moved UP");
    }
    //Arrow Left
    else if (code == "ArrowLeft")
    {
        console.log("Player moved LEFT");
    }    
    //Arrow Right
    else if (code == "ArrowRight")
    {
        console.log("Player moved RIGHT");
    }    
    else {
        console.log("Key not defined yet");
    }

  }, false);

  

//Setup for container div
let containerForBlocks = document.getElementById("container");
containerForBlocks.style.backgroundColor = "#0000ff";//Blue background
containerForBlocks.style.position = "relative";
containerForBlocks.style.width = "800px";
containerForBlocks.style.height = "450px";
containerForBlocks.style.margin = "auto";
containerForBlocks.style.marginTop = "40px";

//The Div element - First
let divElement = document.createElement('div');
divElement.id = "x0y0";
//divElement.style.backgroundColor = "#00ff00";//Green background
divElement.style.backgroundColor = generateWallColor();
divElement.style.position = "absolute";
//divElement.style.width = "50px";
divElement.style.width = xSizeBlock + "px";
//divElement.style.height = "50px";
divElement.style.height = ySizeBlock + "px";
divElement.style.top = "0px";
divElement.style.left = "0px";


//Add the div html element to container
containerForBlocks.appendChild(divElement);


//The Div element - Second
divElement = document.createElement('div');
divElement.id = "x1y0";
//divElement.style.backgroundColor = "#00ff00";//Green background
divElement.style.backgroundColor = generateGoalColor();
divElement.style.position = "absolute";
//divElement.style.width = "50px";
divElement.style.width = xSizeBlock + "px";
//divElement.style.height = "50px";
divElement.style.height = ySizeBlock + "px";
divElement.style.top = "0px";
divElement.style.left = "50px";


//Add the div html element to container
containerForBlocks.appendChild(divElement);

//The Div element - Third
divElement = document.createElement('div');
divElement.id = "x1y0";
//divElement.style.backgroundColor = "#00ff00";//Green background
divElement.style.backgroundColor = generateBlockColorNotInPosition();
divElement.style.position = "absolute";
//divElement.style.width = "50px";
divElement.style.width = xSizeBlock + "px";
//divElement.style.height = "50px";
divElement.style.height = ySizeBlock + "px";
divElement.style.top = "0px";
divElement.style.left = "100px";


//Add the div html element to container
containerForBlocks.appendChild(divElement);


  
//   function createMap(){
    //   //Create a html element - div  
    //   let divElement = document.createElement('div');  
    //   //Set content
    //   divElement.textContent = "A";
    //   //Set id
    //   divElement.id = "x0y0";

    // Set background for body to pink    
    // document.body.style.backgroundColor = generateRandomColor();

    //Add padding to top, bottom, left and right
    // document.body.style.width = (bodypadding + totalWidthContainerBlock + bodypadding) + "px";
    // document.body.style.height = (bodypadding + totalHeightContainerBlock + bodypadding) + "px";

    // document.body.style.position = "relative";

    // let containerForBlocks = document.getElementById("container");


    // let divElement = document.createElement('div');
    // divElement.id = "fooo";
    // divElement.style.width = xSizeBlock + "px";
    // divElement.style.width = ySizeBlock + "px";
    // divElement.style.position = "absolute";
    // divElement.style.top = "100px"
    // divElement.style.left = "100px"
    // divElement.style.zIndex = "1";
    

    // //Light blue
    // divElement.style.backgroundColor = "#85ABCF";
    // containerForBlocks.appendChild(divElement);


    // containerForCells.style.maxHeight = "1000px";
    // containerForCells.style.gridAutoRows = "100px";
    // containerForCells.style.gridAutoColumns = "100px";
    // containerForCells.style.display = "grid";
    // containerForCells.style.gap = "2px";
    // containerForCells.style.gridTemplateColumns = "repeat(19, 1fr)";
    // containerForCells.style.gridTemplateRows = "repeat(16, 1fr)";
    // //Dark blue
    // document.body.style.backgroundColor = "#35497C";
      
    //   for (let y = 0; y < tileMap01.height; y++){
    //     let divElement;
          
    //     for (let x = 0; x < tileMap01.width; x++){
    //         //Create id string
    //         let idString = "x" + x + "y" + y;
    //         divElement = document.createElement('div');
    //         divElement.textContent = idString;
    //         divElement.id = idString;
    //         //Text color - White smoke
    //         divElement.style.color = "#f5f5f5";
    //         //Light blue
    //         divElement.style.backgroundColor = "#85ABCF";
            
    //         divElement.height = "100px";
    //         divElement.width = "100px";
    //         // divElement.style.margin = "4px";
    //         divElement.style.textAlign = "center";


    //         document.body.appendChild(divElement);
    //     }

    //   }


    // containerForBlocks.style.width = totalWidthContainerBlock;
    // containerForBlocks.style.height = totalHeightContainerBlock;
    // containerForBlocks.style.border = "2px solid yellow";
    // console.log("Width: " + totalWidthContainerBlock);
    // console.log("Heigth: " + totalHeightContainerBlock);
      
    // }
    // createMap();
    
    function generateRandomColor()
    {
        const arrayOfColorFunctions = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f'];
        let randomColorString = '#';

        for (let x = 0; x < 6; x++){
            let index = Math.floor(Math.random() * arrayOfColorFunctions.length);
            let value = arrayOfColorFunctions[index];
            randomColorString += value;
    }

    return randomColorString;    
    }

    function generateWallColor(){
        let brownColor = "#848484"
        return brownColor;
    }

    function generateBlockColorNotInPosition(){
        let lightOrangeColor = "#FFB552";
        return lightOrangeColor;
    }

    function generateBlockColorInPosition(){
        let darkOrangeColor = "#BA650D";
        return darkOrangeColor;
    }

    function generateGoalColor(){
        let lightPinkColor = "#D59686";
        return lightPinkColor;
    }

    function generateEmptySpaceColor(){
        let emptySpaceColor = "#DED6AD";
        return emptySpaceColor;
    }















