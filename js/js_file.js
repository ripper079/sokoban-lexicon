console.log("external js-file loaded");

let xSizeBlock = 32;
let ySizeBlock = 32;

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
    if (code == "ArrowDown" || code == "KeyS")
    {
        movePlayerDown();
        
    }
    //Arrow Up
    else if (code == "ArrowUp" || code == "KeyW")
    {
        movePlayerUp();
        
    }
    //Arrow Left
    else if (code == "ArrowLeft" || code == "KeyA")
    {
        movePlayerLeft();
        
    }    
    //Arrow Right
    else if (code == "ArrowRight" || code == "KeyD")
    {
        movePlayerRight();
        
    }   
    // F12
    else if (code == "KeyP")
    {
        console.log("Get player position");
        console.log("X cord for player:|" + findXCordPlayer() + "|");
        console.log("Y cord for player:|" + findYCordPlayer() + "|");        
    }   
    else {
        console.log("Key not defined yet");
    }

  }, false);

  

// //Setup for container div
let containerForBlocks = document.getElementById("container");
containerForBlocks.style.backgroundColor = "#09f2e6";//Cyan background
containerForBlocks.style.position = "relative";
containerForBlocks.style.width = "900px";
containerForBlocks.style.height = "900px";
containerForBlocks.style.margin = "auto";
containerForBlocks.style.marginTop = "10px";


    function createInitialMap(){        
        for (let y = 0; y < tileMap01.height; y++){
            
            for (let x = 0; x < tileMap01.width; x++){
            //Create a div element
            let divElement = document.createElement('div'); 

            

            //Create id string
            let idString = "x" + x + "y" + y;
            //Set smaller font size
            divElement.style.fontSize = "8px";
            divElement.textContent = idString;
            //Id tag
            divElement.id = idString;
            

            //Set postion style
            divElement.style.position = "absolute";
            
            //Set Color
            

            //Wall color
            if (tileMap01.mapGrid[y][x][0] === "W"){
                divElement.style.backgroundColor = generateWallColor();
                divElement.className = Tiles.Wall;
            }
            //Movable block color
            else if (tileMap01.mapGrid[y][x][0] === "B"){
                divElement.style.backgroundColor = generateBlockColorNotInPosition();
                divElement.className = Entities.Block;
            }
            //Player Color
            else if (tileMap01.mapGrid[y][x][0] === "P"){
                divElement.style.backgroundColor = generatePlayerColor();
                divElement.className = Entities.Character;
            }
            //Goal color
            else if (tileMap01.mapGrid[y][x][0] === "G"){
                divElement.style.backgroundColor = generateGoalColor();
                divElement.className = Tiles.Goal
            }
            //Empty color
            else {
                divElement.style.backgroundColor = generateEmptySpaceColor();
                divElement.className = Tiles.Space;
            }

            divElement.style.border = "1px black solid";
            // Dimension
            
            divElement.style.width = xSizeBlock + "px";            
            divElement.style.height = ySizeBlock + "px";

            let topXCord = xSizeBlock * y;
            let topYCord = ySizeBlock * x;         
            //Position
            divElement.style.top = topXCord + "px";
            divElement.style.left = topYCord + "px";


            //Add the div html element to container
            containerForBlocks.appendChild(divElement);
            }
        }
    }


    //Player functions
    function findXCordPlayer(){
        for (let y = 0; y < tileMap01.height; y++){

            for (let x = 0; x < tileMap01.width; x++){
                if (tileMap01.mapGrid[y][x][0] === "P")
                {
                    return x;
                }
            }
        }
    }

    function findYCordPlayer(){
        for (let y = 0; y < tileMap01.height; y++){

            for (let x = 0; x < tileMap01.width; x++){
                if (tileMap01.mapGrid[y][x][0] === "P")
                {
                    return y;
                }
            }
        }
    }

    function movePlayerUp(){

        console.log("Player moved UP[in function]");
        let currentXCordPlayer = findXCordPlayer();
        let currentYCordPlayer = findYCordPlayer();
    }
    function movePlayerDown(){
        console.log("Player moved DOWN[in functions]");
    }
    function movePlayerLeft(){
        console.log("Player moved LEFT[in function]");
    }
    
    function movePlayerRight(){
        console.log("Player moved RIGHT[In function]");
    }


    
    
    
    // Functions for generating different colors
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
        // let lightPinkColor = "#D59686";
        let lightPinkColor = "#FF0000";
        return lightPinkColor;
    }

    function generateEmptySpaceColor(){
        let emptySpaceColor = "#DED6AD";
        return emptySpaceColor;
    }

    function generatePlayerColor(){
        let playerColor = "#FFFF00";
        return playerColor;
    }



    //Game start
    createInitialMap();












