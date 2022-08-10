console.log("external js-file loaded");
console.log("|" +  tileMap01.mapGrid[3][4][0] + "|");

let xSizeBlock = 32;
let ySizeBlock = 32;

let bodypadding = xSizeBlock * 2;

let totalWidthContainerBlock = xSizeBlock * tileMap01.width;
let totalHeightContainerBlock = ySizeBlock * tileMap01.height;

let playerXCord = 11;
let playerYCord = 11;

let countGoals=0;

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
                countGoals++;
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

  
    function movePlayerUp(){
        console.log("Player moved UP[in function]");
        
        //Get cordinates for player
        let xCordPlayer = playerXCord;
        let yCordPlayer = playerYCord;

        //Get cord for div above player
        let xCordAbovePlayer = xCordPlayer;
        let yCordAbovePlayer = yCordPlayer - 1;

        //Get cord 2 div above player
        let xCordTwoAbovePlayer = xCordPlayer;
        let yCordTwoAbovePlayer = yCordPlayer - 2;

        //Id strings
        let idPlayer = "x" + xCordPlayer + "y" + yCordPlayer;
        let idAbovePlayer = "x" + xCordAbovePlayer + "y" + yCordAbovePlayer;
        let idTwoAbovePlayer = "x" + xCordTwoAbovePlayer + "y" + yCordTwoAbovePlayer;

        //Get all div elements
        let divPlayer = document.getElementById(idPlayer);
        let divAbovePlayer = document.getElementById(idAbovePlayer);
        let divTwoAbovePlayer = document.getElementById(idTwoAbovePlayer);

        //Store classnames
        let classNamePlayer = divPlayer.className;
        let classNameAbovePlayer = divAbovePlayer.className;
        let classNameTwoAbovePlayer = divTwoAbovePlayer.className;

        // console.log("Player className: " + classNamePlayer);
        // console.log("AbovePlayer classname: " + classNameAbovePlayer);
        // console.log("TwoAbovePlayer classname: " + classNameTwoAbovePlayer);

        //If above player tile is empty move one step up
        if (classNameAbovePlayer == Tiles.Space){
            console.log("One step movement up is ok");
            //Remove existing classnames
            divPlayer.classList.remove(classNamePlayer);
            divAbovePlayer.classList.remove(classNameAbovePlayer);
            
            //And swap them
            divPlayer.classList.add(classNameAbovePlayer);
            divAbovePlayer.classList.add(classNamePlayer);

            playerYCord--;
        }

    }

    function movePlayerDown(){
        console.log("Player moved DOWN[in functions]");

        //Get cordinates for player
        let xCordPlayer = playerXCord;
        let yCordPlayer = playerYCord;

        //Get cord for div below player
        let xCordBelowPlayer = xCordPlayer;
        let yCordBelowPlayer = yCordPlayer + 1;

        //Get cord 2 div below player
        let xCordTwoBelowPlayer = xCordPlayer;
        let yCordTwoBelowPlayer = yCordPlayer + 2;

        //Id strings
        let idPlayer = "x" + xCordPlayer + "y" + yCordPlayer;                
        let idBelowPlayer = "x" + xCordBelowPlayer + "y" + yCordBelowPlayer;
        let idTwoBelowPlayer = "x" + xCordTwoBelowPlayer + "y" + yCordTwoBelowPlayer;

        //Get all div elements
        let divPlayer = document.getElementById(idPlayer);
        let divBelowPlayer = document.getElementById(idBelowPlayer) 
        let divTwoBelowPlayer = document.getElementById(idTwoBelowPlayer);

        //Store classnames
        let classNamePlayer = divPlayer.className;
        let classNameBelowPlayer = divBelowPlayer.className;
        let classNameTwoBelowPlayer = divTwoBelowPlayer.className;

        console.log("Player className: " + classNamePlayer);
        console.log("BelowPlayer className:" + classNameBelowPlayer);
        console.log("TwoBelowPlayer className: " + classNameTwoBelowPlayer);

        //If below tile is empty move down
        if (classNameBelowPlayer == Tiles.Space){
            console.log("One step movement down is ok");
            //Remove current classes
            divPlayer.classList.remove(classNamePlayer);
            divBelowPlayer.classList.remove(classNameBelowPlayer);

            //And swap them
            divPlayer.classList.add(classNameBelowPlayer);
            divBelowPlayer.classList.add(classNamePlayer);

            playerYCord++;

        }

    }

    function movePlayerLeft(){
        console.log("Player moved LEFT[in function]");

        //Get cordinates for player
        let xCordPlayer = playerXCord;
        let yCordPlayer = playerYCord;

        //Get cord for div left of player
        let xCordLeftPlayer = xCordPlayer - 1;
        let yCordLeftPlayer = yCordPlayer;

        //Get cord 2 div on left player
        let xCordTwoLeftPlayer = xCordPlayer - 2;
        let yCordTwoLeftPlayer = yCordPlayer;

        //Id strings
        let idPlayer = "x" + xCordPlayer + "y" + yCordPlayer;                
        let idLeftPlayer = "x" + xCordLeftPlayer + "y" + yCordLeftPlayer;
        let idTwoLeftPlayer = "x" + xCordTwoLeftPlayer + "y" + yCordTwoLeftPlayer;

        //Get all div elements
        let divPlayer = document.getElementById(idPlayer);
        let divLeftPlayer = document.getElementById(idLeftPlayer) 
        let divTwoLeftPlayer = document.getElementById(idTwoLeftPlayer);

        //Store classnames
        let classNamePlayer = divPlayer.className;
        let classNameLeftPlayer = divLeftPlayer.className;
        let classNameTwoLeftPlayer = divTwoLeftPlayer.className;

        console.log("Player className: " + classNamePlayer);
        console.log("LeftPlayer className:" + classNameLeftPlayer);
        console.log("TwoLeftPlayer className: " + classNameTwoLeftPlayer);

        //If left tile is empty move left
        if (classNameLeftPlayer == Tiles.Space){
            console.log("One step to left is ok");
            //Remove current classes
            divPlayer.classList.remove(classNamePlayer);
            divLeftPlayer.classList.remove(classNameLeftPlayer);

            //And swap them
            divPlayer.classList.add(classNameLeftPlayer);
            divLeftPlayer.classList.add(classNamePlayer);

            playerXCord--;
        }

    }

    
    function movePlayerRight(){
        console.log("Player moved RIGHT[In function]");

        //Get cordinates for player
        let xCordPlayer = playerXCord;
        let yCordPlayer = playerYCord;

        //Get cord for div right of player
        let xCordRightPlayer = xCordPlayer + 1;
        let yCordRightPlayer = yCordPlayer;

        //Get cord of 2 divs on right player
        let xCordTwoRightPlayer = xCordPlayer + 2;
        let yCordTwoRightPlayer = yCordPlayer;

        //Id strings
        let idPlayer = "x" + xCordPlayer + "y" + yCordPlayer;                
        let idRightPlayer = "x" + xCordRightPlayer + "y" + yCordRightPlayer;
        let idTwoRightPlayer = "x" + xCordTwoRightPlayer + "y" + yCordTwoRightPlayer;

        //Get all div elements
        let divPlayer = document.getElementById(idPlayer);
        let divRightPlayer = document.getElementById(idRightPlayer) 
        let divTwoRightPlayer = document.getElementById(idTwoRightPlayer);

        //Store classnames
        let classNamePlayer = divPlayer.className;
        let classNameRightPlayer = divRightPlayer.className;
        let classNameTwoRightPlayer = divTwoRightPlayer.className;

        console.log("Player className: " + classNamePlayer);
        console.log("RightPlayer className:" + classNameRightPlayer);
        console.log("TwoRightPlayer className: " + classNameTwoRightPlayer);

        //If right tile is empty move right
        if (classNameRightPlayer == Tiles.Space){
            console.log("Move one step to right is ok");

            //Remove current classes
            divPlayer.classList.remove(classNamePlayer);
            divRightPlayer.classList.remove(classNameRightPlayer);

            //And swap them
            divPlayer.classList.add(classNameRightPlayer);
            divRightPlayer.classList.add(classNamePlayer);

            playerXCord++;
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

  











