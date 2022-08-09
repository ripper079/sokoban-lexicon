console.log("external js-file loaded");
console.log("|" +  tileMap01.mapGrid[3][4][0] + "|");

let xSizeBlock = 32;
let ySizeBlock = 32;

let bodypadding = xSizeBlock * 2;

let totalWidthContainerBlock = xSizeBlock * tileMap01.width;
let totalHeightContainerBlock = ySizeBlock * tileMap01.height;

let playerXCord = 11;
let playerYCord = 11;; 

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
    else {
        console.log("Key not defined yet");
    }

  }, false);

  

// //Setup for container div
let containerForBlocks = document.getElementById("container");
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
            
            //Wall color
            if (tileMap01.mapGrid[y][x][0] === "W"){                
                divElement.classList.add(Tiles.Wall);
            }
            //Movable block color
            else if (tileMap01.mapGrid[y][x][0] === "B"){
                divElement.classList.add(Entities.Block);
            }
            //Player Color
            else if (tileMap01.mapGrid[y][x][0] === "P"){                
                divElement.classList.add(Entities.Character);
            }
            //Goal color
            else if (tileMap01.mapGrid[y][x][0] === "G"){
                divElement.classList.add(Tiles.Goal);
            }
            //Empty color
            else {
                divElement.classList.add(Tiles.Space);
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

    // //Player functions
    // function findXCordPlayer(){
    //     for (let y = 0; y < tileMap01.height; y++){

    //         for (let x = 0; x < tileMap01.width; x++){
    //             if (tileMap01.mapGrid[y][x][0] === "P")
    //             {
    //                 return x;
    //             }
    //         }
    //     }
    // }

    // function findYCordPlayer(){
    //     for (let y = 0; y < tileMap01.height; y++){

    //         for (let x = 0; x < tileMap01.width; x++){
    //             if (tileMap01.mapGrid[y][x][0] === "P")
    //             {
    //                 return y;
    //             }
    //         }
    //     }
    // }


    function movePlayerUp(){

        console.log("Player moved UP[in function]");
        
        // Get old AND new cordinates        
        let oldXCordPlayer = playerXCord;
        let oldYCordPlayer = playerYCord;
        
        //Get new Cordinates
        let newXCordPlayer = oldXCordPlayer;
        let newYCordPlayer = oldYCordPlayer - 1;

        //Id string player
        let idStringPlayerOld = "x" + oldXCordPlayer + "y" + oldYCordPlayer;
        let idStringUpperElement = "x" + newXCordPlayer + "y" + newYCordPlayer;        

        // console.log("player cordinates:" + idStringPlayerOld);
        // console.log("Block element cordinates above player: " + idStringUpperElement)

        let playerElement = document.getElementById(idStringPlayerOld);
        let blockOverPlayer = document.getElementById(idStringUpperElement);

        //Move UP to tile if possible
        if (blockOverPlayer.className == Tiles.Space){
            console.log("Block over player is:" + Tiles.Space + ". Movement UP is possible");
            document.getElementById(idStringPlayerOld).classList.replace(Entities.Character, Tiles.Space);
            document.getElementById(idStringUpperElement).classList.replace(Tiles.Space, Entities.Character);
            playerYCord -= 1;
        }

        
    }

    function movePlayerDown(){
        console.log("Player moved DOWN[in functions]");

         // Get old AND new cordinates        
         let oldXCordPlayer = playerXCord;
         let oldYCordPlayer = playerYCord;
         
         //Get new Cordinates
         let newXCordPlayer = oldXCordPlayer;
         let newYCordPlayer = oldYCordPlayer + 1;

         //Id string player
        let idStringPlayerOld = "x" + oldXCordPlayer + "y" + oldYCordPlayer;
        let idStringLowerElement = "x" + newXCordPlayer + "y" + newYCordPlayer;  

        console.log("player cordinates:" + idStringPlayerOld);
        console.log("Block element cordinates belove player: " + idStringLowerElement)

        let playerElement = document.getElementById(idStringPlayerOld);
        let blockUnderPlayer = document.getElementById(idStringLowerElement);

        //Move DOWN to tile if possible
        if (blockUnderPlayer.className == Tiles.Space) {
            console.log("Block under player is:" + Tiles.Space + ". Movement DOWN is possible");
            document.getElementById(idStringPlayerOld).classList.replace(Entities.Character, Tiles.Space);
            document.getElementById(idStringLowerElement).classList.replace(Tiles.Space, Entities.Character);
            playerYCord += 1;
        }

    }

    //Implement this dfDFSDFSDFSS DFDFSFDSFDSFDS
    function movePlayerLeft(){
        console.log("Player moved LEFT[in function]");

        // Get old AND new cordinates        
        let oldXCordPlayer = playerXCord;
        let oldYCordPlayer = playerYCord;
        
        //Get new Cordinates
        let newXCordPlayer = oldXCordPlayer - 1;
        let newYCordPlayer = oldYCordPlayer;
        
        //Get moved cordinates for moved crate
        let newXCordCrate = oldXCordPlayer - 2;
        let newYCordCrate = oldYCordPlayer;

         //Id string player
         let idStringPlayerOld = "x" + oldXCordPlayer + "y" + oldYCordPlayer;
         let idStringLeftElement = "x" + newXCordPlayer + "y" + newYCordPlayer;
         //Id string moved crate
         let idStringCrate = "x" + newXCordCrate + "y" + newYCordCrate;

        //  console.log("player cordinates:" + idStringPlayerOld);
        //  console.log("Block element cordinates to LEFT os player: " + idStringLeftElement);
        //  console.log("Block element cordinate to LEFT LEFT of player:" + idStringCrate);

         let playerElement = document.getElementById(idStringPlayerOld);
         let blockLeftToPlayer = document.getElementById(idStringLeftElement);
         let crateNewPos = document.getElementById(idStringCrate);

        let oldClassName = playerElement.className;
        let newClassName = blockLeftToPlayer.className;



         //Move LEFT to tile if possible
        if (blockLeftToPlayer.className == Tiles.Space) {
            console.log("Block to LEFT of player is:" + Tiles.Space + ". Movement LEFT is possible");
            document.getElementById(idStringPlayerOld).classList.replace(Entities.Character, Tiles.Space);
            document.getElementById(idStringLeftElement).classList.replace(Tiles.Space, Entities.Character);
            playerXCord -= 1;
        }
        //Move LEFT to push block to left
        else if (blockLeftToPlayer.className == Entities.Block && crateNewPos.className == Tiles.Space){
            console.log("It is possible to move the crate to left one step");
            document.getElementById(idStringCrate).classList.replace(Tiles.Space, Entities.Block);
            document.getElementById(idStringLeftElement).classList.replace(Entities.Block, Entities.Character);
            document.getElementById(idStringPlayerOld).classList.replace(Entities.Character, Tiles.Space);
            playerXCord -= 1;
        }

    }

    
    function movePlayerRight(){
        console.log("Player moved RIGHT[In function]");

        // Get old AND new cordinates        
        let oldXCordPlayer = playerXCord;
        let oldYCordPlayer = playerYCord;
        
        //Get new Cordinates
        let newXCordPlayer = oldXCordPlayer + 1;
        let newYCordPlayer = oldYCordPlayer;

         //Id string player
         let idStringPlayerOld = "x" + oldXCordPlayer + "y" + oldYCordPlayer;
         let idStringRightElement = "x" + newXCordPlayer + "y" + newYCordPlayer;  

         console.log("player cordinates:" + idStringPlayerOld);
         console.log("Block element cordinates to LEFT os player: " + idStringRightElement);

         let playerElement = document.getElementById(idStringPlayerOld);
         let blockRightToPlayer = document.getElementById(idStringRightElement);

         //Move RIGHT to tile if possible
        if (blockRightToPlayer.className == Tiles.Space) {
            console.log("Block to RIGHT of player is:" + Tiles.Space + ". Movement RIGHT is possible");
            document.getElementById(idStringPlayerOld).classList.replace(Entities.Character, Tiles.Space);
            document.getElementById(idStringRightElement).classList.replace(Tiles.Space, Entities.Character);
            playerXCord += 1;
        }
        
    }


      //Game start
      createInitialMap();

    
































































    
    // Functions for generating different colors
/*
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

*/

  











