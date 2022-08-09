console.log("external js-file loaded");
console.log("|" +  tileMap01.mapGrid[3][4][0] + "|");

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
    // P - Print Player Position
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
        
        // Get old AND new cordinates
        
        let oldXCordPlayer = findXCordPlayer();
        let oldYCordPlayer = findYCordPlayer();
        
        let newXCordPlayer = oldXCordPlayer;
        let newYCordPlayer = oldYCordPlayer - 1;

        //Id string player
        let idStringPlayerOld = "x" + oldXCordPlayer + "y" + oldYCordPlayer;
        let idStringUpperElement = "x" + newXCordPlayer + "y" + newYCordPlayer;        

        console.log("player cordinates:" + idStringPlayerOld);
        console.log("Block element cordinates above player: " + idStringUpperElement)

        let playerElement = document.getElementById(idStringPlayerOld);
        let blockElement = document.getElementById(idStringUpperElement);


        //Swap the elements [Without checkes - But works]
        // playerElement.style.backgroundColor = "#0000ff";
        // blockElement.style.backgroundColor = "#00ff00";

        //Determine which block is above player
        //An empty block - swap is possible
        if (blockElement.className == Tiles.Space)
        {
            console.log("Swap is possible");
            console.log("Swapping between player and empty space");
            
            playerElement.style.backgroundColor = generateEmptySpaceColor();
            blockElement.style.backgroundColor = generatePlayerColor();
            //Swap "P" with " "

            tileMap01.mapGrid[oldYCordPlayer][oldXCordPlayer][0] = " ";
            tileMap01.mapGrid[newYCordPlayer][newXCordPlayer][0] = "P";

        }

        //Get player block AND upper block [from id string]

        //Swap playerblock with upperblock
        
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

    //Game start
    createInitialMap();












