    
    //initialize variables for the game
    var targetTtl = (Math.floor(Math.random() * (120-19+1)) +19);
    var playerTtl = 0;
    var amethystVal = (Math.floor(Math.random() * 12) +1);
    var blueTopazVal = (Math.floor(Math.random() * 12) +1);
    var peridotVal = (Math.floor(Math.random() * 12) +1);
    var rubyVal = (Math.floor(Math.random() * 12) +1);
    var wins = 0;
    var losses = 0;
    //console.log("Amethyst total: " + amethystVal);
    
    
    //Create variables to dipslay text
    $("#target-total").text("Target Total: " + targetTtl);

    function winLoseCheck() {
        if (playerTtl === targetTtl) {
            wins++;
            reset();
            alert("you win! the game has been reset!");
            $("#target-total").text("Target Total: " + targetTtl);
            $("#player-total").text("Player Total: " + playerTtl);
            $("#win").text("Wins: " + wins);
        } else if(playerTtl > targetTtl) {
            losses++;
            reset();
            alert("you lose! the game has been reset!");
            $("#target-total").text("Target Total: " + targetTtl);
            $("#player-total").text("Player Total: " + playerTtl);
            $("#loss").text("Losses: " + losses);            
        } else {
            return;
        }
    } 

    function reset() {
        playerTtl = 0;
        targetTtl = 0;
        targetTtl = (Math.floor(Math.random() * (120-19+1)) +19);
        amethystVal = (Math.floor(Math.random() * 12) +1);
        blueTopazVal = (Math.floor(Math.random() * 12) +1);
        peridotVal = (Math.floor(Math.random() * 12) +1);       
        rubyVal = (Math.floor(Math.random() * 12) +1);
    }   



    //Check for button click
    $("button").on("click", function(){
            if ($(this).hasClass("amethyst")) {
                playerTtl = playerTtl + amethystVal;
                $("#player-total").text("Player Total: " + playerTtl);
                //console.log("amethyst was clicked!");
                winLoseCheck();
               
            } else if ($(this).hasClass("blue-topaz")) {
                playerTtl = playerTtl + blueTopazVal;
                $("#player-total").text("Player Total: " + playerTtl);
                //console.log("blue topaz was clicked!");
                winLoseCheck();
                
            } else if ($(this).hasClass("peridot")) {
                playerTtl = playerTtl + peridotVal;
                $("#player-total").text("Player Total: " + playerTtl);
                //console.log("peridot was clicked!");
                winLoseCheck();
            
            } else {
                playerTtl = playerTtl + rubyVal;
                $("#player-total").text("Player Total: " + playerTtl);
                //console.log("ruby was clicked!");
                winLoseCheck();
                
            }
    


    })