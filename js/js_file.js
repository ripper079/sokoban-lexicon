//Size of each tile
const xSizeBlock = 32;
const ySizeBlock = 32;

//Not used - Yet
//const totalWidthContainerBlock = xSizeBlock * tileMap01.width;
//const totalHeightContainerBlock = ySizeBlock * tileMap01.height;

//Player position
let playerXCord = 11;
let playerYCord = 11;

//How many goal tiles - Calculated after map creating
let countGoals = 0;


// Add event listener on keydown
document.addEventListener('keydown', (event) => {
    //Disable multiple keypresses when key is down
    event.preventDefault();
    if (event.repeat)
        return ;

    var code = event.code;
    //Arrow Down - WASD
    if (code == "ArrowDown" || code == "KeyS"){        
        movePlayerDown();        
    }
    //Arrow Up
    else if (code == "ArrowUp" || code == "KeyW"){        
        movePlayerUp();        
    }
    //Arrow Left
    else if (code == "ArrowLeft" || code == "KeyA"){
        movePlayerLeft();        
    }    
    //Arrow Right
    else if (code == "ArrowRight" || code == "KeyD"){
        movePlayerRight();        
    }        
    else {
        // console.log("Key not defined yet");
    }
    
    //Has player Won?
    if (countNumberBlocksDone() == countGoals){        
        alert("You won, congrats! Reload page for replaying");
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
        //divElement.textContent = idString;
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
            //Added
            divElement.classList.add(Tiles.Space);
        }
        //Player Color
        else if (tileMap01.mapGrid[y][x][0] === "P"){                
            divElement.classList.add(Entities.Character);
            //Added
            divElement.classList.add(Tiles.Space);
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


//Return number of crate in goal
function countNumberBlocksDone(){
    var classStringToMatch = Tiles.Goal + " " + Entities.Block;
    var counterMatches = 0;
    //console.log("Correct string to match:|" + classStringToMatch + "|");
    for (let y = 0; y < tileMap01.height; y++){
        for (let x = 0; x < tileMap01.width; x++){
            
            //Create id string
            let idString = "x" + x + "y" + y;

            if (document.getElementById(idString).className == classStringToMatch){
                counterMatches++;
            }
        }
    }

    return counterMatches;                
}

function movePlayerUp(){    
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

    //Store classnames
    let classNamePlayer = divPlayer.className;
    let classNameAbovePlayer = divAbovePlayer.className;

    //Any of theese conditions prevent movement
    if (classNameAbovePlayer == Tiles.Wall ){
        //no opp
    }
    //If block above player is a crate
    else if (divAbovePlayer.classList.contains(Entities.Block)){
        //2 blocks away from player, determine
        let divTwoAbovePlayer = document.getElementById(idTwoAbovePlayer);
        let classNameTwoAbovePlayer = divTwoAbovePlayer.className;

        //If following block contains a crate or wall then move not possible
        if (divTwoAbovePlayer.classList.contains(Entities.Block) || divTwoAbovePlayer.classList.contains(Tiles.Wall)){
            ;//no op
        }
        else {
            divPlayer.classList.remove(Entities.Character);
            divAbovePlayer.classList.remove(Entities.Block);

            divTwoAbovePlayer.classList.add(Entities.Block);
            divAbovePlayer.classList.add(Entities.Character);
            playerYCord--;
        }
    }
    else {
        //If movement possible, do these 3 statement
        divPlayer.classList.remove(Entities.Character);
        divAbovePlayer.classList.add(Entities.Character);
        //Update player Cordinates
        playerYCord--;
    }
}

function movePlayerDown(){    
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
    
    //Store classnames
    let classNamePlayer = divPlayer.className;
    let classNameBelowPlayer = divBelowPlayer.className;

    //Any of theese conditions prevent movement
    if (classNameBelowPlayer == Tiles.Wall){
        ;//No op
    }        
    //If block below of player is a crate
    else if (divBelowPlayer.classList.contains(Entities.Block)){
        //2 block away from player, determine
        let divTwoBelowPlayer = document.getElementById(idTwoBelowPlayer);
        let classNameTwoBelowPlayer = divTwoBelowPlayer.className;

        //If follwing block contains a crate or wall then move not possible
        if (divTwoBelowPlayer.classList.contains(Entities.Block) || divTwoBelowPlayer.classList.contains(Tiles.Wall)){
            ;//no op
        }
        else {
            divPlayer.classList.remove(Entities.Character);
            divBelowPlayer.classList.remove(Entities.Block);

            divTwoBelowPlayer.classList.add(Entities.Block);
            divBelowPlayer.classList.add(Entities.Character);
            //divPlayer.classList.replace()
            playerYCord++;
        }
    }
    else {
        //If movement possible, do these 3 statement
        divPlayer.classList.remove(Entities.Character);
        divBelowPlayer.classList.add(Entities.Character);
        //Update player Cordinates
        playerYCord++;
    }
}

function movePlayerLeft(){

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

    //Store classnames
    let classNamePlayer = divPlayer.className;
    let classNameLeftPlayer = divLeftPlayer.className;

    //Movement Not allowed
    if (classNameLeftPlayer == Tiles.Wall){
        ;//no op
    }
    //If block on left side of player is a crate 
    else if (divLeftPlayer.classList.contains(Entities.Block)){
        console.log("Träffar:" + classNameLeftPlayer);
        //2 blocks aways from player, determine
        let divTwoLeftPlayer = document.getElementById(idTwoLeftPlayer);
        let classNameTwoLeftPlayer = divTwoLeftPlayer.className;
        
        //If following block contains a crate or wall then move not possible
        if (divTwoLeftPlayer.classList.contains(Entities.Block) || divTwoLeftPlayer.classList.contains(Tiles.Wall)){
            ;//No op
        }
        else {
            divPlayer.classList.remove(Entities.Character);
            divLeftPlayer.classList.remove(Entities.Block);
            
            divTwoLeftPlayer.classList.add(Entities.Block);
            divLeftPlayer.classList.add(Entities.Character);

            playerXCord--;
        }
    }
    else {
        //If movement possible, do these 3 statement
        divPlayer.classList.remove(Entities.Character);
        divLeftPlayer.classList.add(Entities.Character);
        //Update player Cordinates
        playerXCord--;
    }
}

function movePlayerRight(){
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

    //Store classnames
    let classNamePlayer = divPlayer.className;
    let classNameRightPlayer = divRightPlayer.className;

    if (classNameRightPlayer == Tiles.Wall){
        //No op
    }
    //If block on right side of player is a crate
    else if (divRightPlayer.classList.contains(Entities.Block)){
        divTwoRightPlayer = document.getElementById(idTwoRightPlayer); 
        let classNameTwoRightPlayer = divTwoRightPlayer.className;

        //If following block contains a crate or wall then move not possible
        if (divTwoRightPlayer.classList.contains(Entities.Block) || divTwoRightPlayer.classList.contains(Tiles.Wall)){
            ;//no op
        }
        else {
            divPlayer.classList.remove(Entities.Character);
            divRightPlayer.classList.remove(Entities.Block);

            divTwoRightPlayer.classList.add(Entities.Block);
            divRightPlayer.classList.add(Entities.Character);

            playerXCord++;
        }
    }
    else {
        //If movement possible, do these 3 statement
        divPlayer.classList.remove(Entities.Character);
        divRightPlayer.classList.add(Entities.Character);
        //Update player Cordinates
        playerXCord++;
    }
}

//Create map and start game
createInitialMap();