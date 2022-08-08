console.log("external js-file loaded");

// var foo = tileMap01.mapGrid[3][4];

// console.log(foo);


// elem.addEventListener('keydown', function(evt){
//     if (evt.key === ArrowDown)
//     {
//         console.log("Player tries move UP");
//     }
//     // else if(evt.key === ArrowDown){
//     //     console.log("Player tries move DOWN");
//     // }
//     else if (evt.key === ArrowLeft){
//         console.log("Player tries move LEFT");
//     }
//     else if (evt.key === ArrowRight){
//         console.log("Player tries move RIGTH");
//     }
// });


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