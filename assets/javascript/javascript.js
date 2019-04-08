//The fight variable in each character is their ability to fight, in use determines whether or not they are currently being used.
//Stats for each character. Characters deal rage damage based on 1/4 of their missing hp
var roy = { health : 250,
            maxHealth : 250,
            attack : 30,
            rage : 0,
            fight : true,
            inUse : false,
            type : "sword",
            //Does bonus damage to non sword users
            bonusDmg : 3,

            //Roys image
            img :  '<img  id = "roy" class ="fight" src = "assets/images/boy.png">',
            imgCPU :  '<img  id = "roy" src = "assets/images/boy.png">'
            
        }
var ridley = {health : 400,
              maxHealth : 400,
              attack : 25,
              type : "claw",
              rage : 0,
              fight : true,
              inUse : false,
              //Has a chance to critical hit for triple damage chance is one in 10
              chance : 10,
              bonusDmg : 4,

              //Ridley's Image
              img : '<img  id = "ridley" class ="fight" src = "assets/images/dargon.png"></img>',
              imgCPU : '<img  id = "ridley" src = "assets/images/dargon.png"></img>'
            }

var cloud = {health : 220,
             maxHealth : 220,
             attack : 30,
             type : "sword",
             rage : 0,
             fight : true,
             inUse : false,
             //every time limit reaches 5 cloud can deal double damage
             limit : 0,
             bonusDmg : 2,

             //Cloud Image
             img : '<img  id = "cloud" class ="fight" src = "assets/images/clod.png">',
             imgCPU : '<img  id = "cloud" src = "assets/images/clod.png">'
            }

var incineroar = {health : 300,
                  maxHealth : 300,
                  attack : 35,
                  type : "claw",
                  rage : 0,
                  fight : true,
                  inUse : false,
                  //gains an additional 3/4 rage damage in the form of revenge.
                  revenge : 0,

                  //Incineroar Image
                  img : '<img  id = "incineroar" class ="fight" src = "assets/images/cat.png">',
                  imgCPU : '<img  id = "incineroar" src = "assets/images/cat.png">'
}
//Additional Variables
slotOneFull = false;
slotTwoFull = false;
playerKOs = 0;
playerChar = "";
computerChar = "";
damage = 0;
counterDamage = 0;

bluelight = "<img class = 'light' src = 'assets/images/blueglow.png'>"
redlight = "<img class = 'light' src = 'assets/images/redglow.png'>"

$("document").ready(function(){
//HTML manipulation. Have the boxes where players fight invisible until a player makes a selection. alternatively remove it
//then call it with player selecting their character. 
//These slots are now hidden
$(".fight-cpu").hide();
$(".fight-pc").hide();

//Loads in characters stats
$("#roy-hp").html(roy.health);
$("#roy-att").html(roy.attack);

$("#ridley-hp").html(ridley.health);
$("#ridley-att").html(ridley.attack);

$("#cloud-hp").html(cloud.health);
$("#cloud-att").html(cloud.attack);

$("#incineroar-hp").html(incineroar.health);
$("#incineroar-att").html(incineroar.attack);



//Clicking a character moves them to the battle arena. Have an on click function for 
//each character. Player character is always picked first and sets slotOneFull to true
//If slot one is full slot two can be picked. If both are full, then no one can be clicked.
//Character select will also check if the fighter is available to fight by whether or not they are knocked out.

$("#roy").click(function(){
  if (slotOneFull === false && roy.inUse === false && roy.fight === true){
    //Brings character up to the slot
    
    slotOneFull = true;
    roy.inUse = true;
    playerChar = "roy";
    $(".fight-pc").show()
    $("#pc").html(roy.img)
    $("#pc-health").html(roy.health)
    $("#pc-attack").html(roy.attack)

    $(".roy-small").addClass('grayScale')
   


    
  }
  //This code goes if someone is already in slot one!
  else if(slotOneFull === true && slotTwoFull === false && roy.inUse === false && roy.fight === true){
    slotTwoFull = true;
    roy.inUse = true;
    computerChar = "roy"
    $(".fight-cpu").show()
    $("#cpu").html(roy.imgCPU)
    $("#cpu-health").html(roy.health)
    $("#cpu-attack").html(roy.attack)

  }
})

//**************** RIDLEY
$("#ridley").click(function(){
  if (slotOneFull === false && ridley.inUse === false && ridley.fight === true){
    //Brings character up to the slot
    slotOneFull = true;
    ridley.inUse = true;
    playerChar = "ridley"
    $(".fight-pc").show()
    $("#pc").html(ridley.img)
    $("#pc-health").html(ridley.health)
    $("#pc-attack").html(ridley.attack)

   

    $(".ridley-small").addClass('grayScale')
    
  }
  //This code goes if someone is already in slot one!
  else if(slotOneFull === true && slotTwoFull === false && ridley.inUse === false && ridley.fight === true){
    slotTwoFull = true;
    ridley.inUse = true;
    computerChar = "ridley"
    $(".fight-cpu").show()
    $("#cpu").html(ridley.imgCPU)
    $("#cpu-health").html(ridley.health)
    $("#cpu-attack").html(ridley.attack)
  }
})

//**********************CLOUD 
$("#cloud").click(function(){
  if (slotOneFull === false && cloud.inUse === false && cloud.fight === true){
    //Brings character up to the slot
    slotOneFull = true;
    cloud.inUse = true;
    playerChar = "cloud"
    $(".fight-pc").show()
    $("#pc").html(cloud.img)
    $("#pc-health").html(cloud.health)
    $("#pc-attack").html(cloud.attack)

    $(".cloud-small").addClass('grayScale')

    
  }
  //This code goes if someone is already in slot one!
  else if(slotOneFull === true && slotTwoFull === false && cloud.inUse === false && cloud.fight === true){
    slotTwoFull = true;
    cloud.inUse = true;
    computerChar = "cloud"
    $(".fight-cpu").show()
    $("#cpu").html(cloud.imgCPU)
    $("#cpu-health").html(cloud.health)
    $("#cpu-attack").html(cloud.attack)
  }
})

//************************** CAT
$("#incineroar").click(function(){
  if (slotOneFull === false && incineroar.inUse === false && incineroar.fight === true){
    //Brings character up to the slot
    slotOneFull = true;
    incineroar.inUse = true;
    playerChar = "incineroar"
    $(".fight-pc").show()
    $("#pc").html(incineroar.img)
    $("#pc-health").html(incineroar.health)
    $("#pc-attack").html(incineroar.attack)

    $(".incineroar-small").addClass('grayScale')

    
  }
  //This code goes if someone is already in slot one!
  else if(slotOneFull === true && slotTwoFull === false && incineroar.inUse === false && incineroar.fight === true){
    slotTwoFull = true;
    incineroar.inUse = true;
    computerChar = "incineroar";
    $(".fight-cpu").show()
    $("#cpu").html(incineroar.imgCPU)
    $("#cpu-health").html(incineroar.health)
    $("#cpu-attack").html(incineroar.attack)
  }
})


//Displays their stats in the div below display fighter stats and health at the bottom
//An attack button will be present either with the stats, by clicking on the character
//or in the middle. Each character should have a function that runs their attack and unique
//traits. Refreshes dom after attack is run. runs the enemy attack after their own.
//Enemy attacks will be similar to player attacks but called by their own function after the player
//attacks.



//Roy Attack
function royAtt(){
roy.rage = Math.floor(1/4 * (roy.maxHealth - roy.health))
counterDamage = roy.attack
  //Checks to see what computer characters are for roys bonus damage.
  if (computerChar === "ridley" || computerChar === "incineroar"){
    
    damage = roy.attack * roy.bonusDmg + roy.rage
    
    //If opponent is ridley
    if (computerChar === "ridley"){
      
      ridley.health = ridley.health - damage;
      $("#cpu-health").html(ridley.health)
      winCheck();
      ridleyAtt();

    } if (computerChar === "incineroar"){
      incineroar.health = incineroar.health - damage;
      $("#cpu-health").html(incineroar.health)
      winCheck();
      incineroarAtt();

    }
  }
  //If cloud is the enemy
  if (computerChar === "cloud"){
    damage = roy.attack + roy.rage;
    $("#cpu-health").html(cloud.health)
    winCheck();
    cloudAtt();
    
    
  }
  //If character is a cpu
  //Checks to see if the characters have a sword
  if(playerChar === "ridley" || playerChar === "incineroar"){
   counterDamage = roy.attack * roy.bonusDmg 
   if (playerChar === "ridley"){
     ridley.health = ridley.health - counterDamage
     $("#pc-health").html(ridley.health)
   }
   if (playerChar === "incineroar"){
     incineroar.health = incineroar.health - counterDamage;
     $("#pc-health").html(incineroar.health)
   }
  }
  if (playerChar ==="cloud"){
    cloud.health = cloud.health - counterDamage
    $("#pc-health").html(cloud.health)
  }
}

//Ridley Attack Function
function ridleyAtt(){
//Checks ridleys Special attack function
rng = Math.floor(Math.random() * 11)
ridley.rage = Math.floor(1/4 * (ridley.maxHealth - ridley.health))
damage = ridley.attack + ridley.rage
counterDamage = ridley.attack
//Checks if ridley gets his bonus damage
if (rng === ridley.chance){
  alert("Critical Hit! ridley dealt " + damage + "!")
  damage = ridley.attack * ridley.bonusDmg + ridley.rage
  counterDamage = ridley.attack * ridley.bonusDmg
}

  //Ridley as player Character
  if (computerChar === "roy"){
    roy.health -= damage
    $("#cpu-health").html(roy.health)
    winCheck();
    royAtt();
  }
  if (computerChar === "cloud"){
    cloud.health -= damage
    $("#cpu-health").html(cloud.health)
    winCheck();
    cloudAtt()
  }
  if(computerChar === "incineroar"){
    incineroar.health -= damage
    $("#cpu-health").html(incineroar.health)
    winCheck();
    incineroarAtt()
  }

  //Ridley as CPU
  if(playerChar === "roy"){
    roy.health -= counterDamage;
    $("#pc-health").html(roy.health)

  }
  if(playerChar === "cloud"){
    cloud.health -= counterDamage
    $("#pc-health").html(cloud.health)
  }
  if(playerChar === "incineroar"){
    incineroar.health -= counterDamage
    $("#pc-health").html(incineroar.health)
  }
}

//Cloud Attack Function
function cloudAtt(){
  cloud.rage = Math.floor(1/4 * (cloud.maxHealth - cloud.health))
  damage = cloud.attack + cloud.rage
  counterDamage = cloud.attack
  if (cloud.limit > 4){
    alert("Limit Break! Cloud dealt " + damage + "!")
    cloud.limit = 0;
    damage = (cloud.attack + cloud.rage) * cloud.bonusDmg
    counterDamage = cloud.attack * cloud.bonusDmg
  }

  //For cloud as player

  if (computerChar === "roy"){
    roy.health -= damage
    $("#cpu-health").html(roy.health)
    winCheck();
    royAtt();
  }
  if (computerChar === "ridley"){
    ridley.health -= damage
    $("#cpu-health").html(cloud.health)
    winCheck();
    ridleyAtt()
  }
  if(computerChar === "incineroar"){
    incineroar.health -= damage
    $("#cpu-health").html(incineroar.health)
    winCheck();
    incineroarAtt()}

    //for cloud as a cpu
    if(playerChar === "roy"){
      roy.health -= counterDamage;
      $("#pc-health").html(roy.health)
  
    }
    if(playerChar === "ridley"){
      ridley.health -= counterDamage
      $("#pc-health").html(cloud.health)
    }
    if(playerChar === "incineroar"){
      incineroar.health -= counterDamage
      $("#pc-health").html(incineroar.health)
    }
      
      cloud.limit++;
}

function incineroarAtt(){
  incineroar.rage = incineroar.maxHealth - incineroar.health
  damage = incineroar.attack + incineroar.rage
  counterDamage = incineroar.attack + Math.floor(1/2 *(incineroar.rage))

    //for incineroar as a player 
    if (computerChar === "roy"){
      roy.health -= damage
      $("#cpu-health").html(roy.health)
      winCheck();
      royAtt();
    }
    if (computerChar === "ridley"){
      ridley.health -= damage
      $("#cpu-health").html(ridley.health)
      winCheck();
      ridleyAtt()
    }
    if(computerChar === "cloud"){
      cloud.health -= damage
      $("#cpu-health").html(cloud.health)
      winCheck();
      cloudAtt()}

      //For incineroar as a cpu

      if(playerChar === "roy"){
        roy.health -= counterDamage;
        $("#pc-health").html(roy.health)
    
      }
      if(playerChar === "ridley"){
        ridley.health -= counterDamage
        $("#pc-health").html(cloud.health)
      }
      if(playerChar === "cloud"){
        cloud.health -= counterDamage
        $("#pc-health").html(cloud.health)
      }

}


//Lets div with player portait be clicked
//makes sure both slots have been selected before attacks can be made
$("#pc").on("click", function(){
  if (slotOneFull === true && slotTwoFull === true){
      if (playerChar === "roy"){
        royAtt();
        lossCheck();
        
      }

      if (playerChar === "ridley"){
      ridleyAtt();
      lossCheck();
    }

      if (playerChar === "cloud"){
        cloudAtt();
        lossCheck();
    }

      if (playerChar === "incineroar"){
        incineroarAtt();
        lossCheck();
      }
  }
})

//If player one's hp is set to 0, alert that the game is over and give an option to restart.
//If player two's hp is set to 0, alert that you won a game and restore a small amount of hp. Allow the player to select another character
//to fight. All hp checks should be done immediately after an attack.

//This function resets the game to base!
function reset(){
      roy.health = roy.maxHealth;
      incineroar.health = incineroar.maxHealth;
      ridley.health = ridley.maxHealth;
      cloud.health = cloud.maxHealth;
      cloud.limit = 0;
      $("#cpu-health").html();
      $("#cpu-attack").html();
      $("#pc-health").html();
      $("#pc-attack").html();
      $(".fight-cpu").hide();
      $(".fight-pc").hide();
      slotOneFull = false;
      slotTwoFull = false;
      playerKOs = 0;
      playerChar = "";
      computerChar = "";
      roy.inUse = false;
      roy.fight = true;
      ridley.inUse = false;
      ridley.fight = true;
      cloud.inUse = false;
      cloud.fight = true;
      incineroar.inUse = false;
      incineroar.fight = true;
      $(".ridley-small").removeClass('grayScale')
      $(".cloud-small").removeClass('grayScale')
      $(".roy-small").removeClass('grayScale')
      $(".incineroar-small").removeClass('grayScale')

}

//This function checks to see if you lost!
function lossCheck() {
  if (playerChar === "roy"){
    if (roy.health <= 0){
      alert("You lose!")
      reset();
      
    }
  }

  if (playerChar === "ridley"){
    if (ridley.health <= 0){
      alert("You lose!")
      reset();
    }
  }

  if (playerChar === "cloud"){
    if (cloud.health <= 0){
      alert("You lose!")
      reset();
    }
  }

  if (playerChar === "incineroar"){
    if (incineroar.health <= 0){
      alert("You lose!")
      reset();
    }
  }
}
//This function checks to see if you win!
function winCheck(){
  //Checks CPU Character
  if (computerChar === "roy"){
    
    //Checks Health of CPU Character
    if (roy.health < 1 && roy.fight === true){
      $(".roy-small").addClass('grayScale')
      alert("Knockout!")
      slotTwoFull = false;
      roy.fight = false;
      roy.inUse = false;
      playerKOs++
      $("#cpu-health").html();
      $("#cpu-attack").html();
      $(".fight-cpu").hide();
      if (playerKOs<3){
      alert("Pick a new opponent!")}
      stop;
    }
  }

  if (computerChar === "ridley"){
    if (ridley.health < 1 && ridley.fight === true){
      $(".ridley-small").addClass('grayScale')
      alert("Knockout!")
      slotTwoFull = false;
      ridley.fight = false;
      ridley.inUse = false;
      playerKOs++
      $("#cpu-health").html();
      $("#cpu-attack").html();
      $(".fight-cpu").hide();
      if (playerKOs<3){
        alert("Pick a new opponent!")}
      stop;
    }
  }

  if (computerChar === "cloud"){
    if (cloud.health < 1 && cloud.fight === true){
      $(".ridley-small").addClass('grayScale')
      alert("Knockout!")
      slotTwoFull = false;
      cloud.fight = false;
      cloud.inUse = false;
      playerKOs++
      $("#cpu-health").html();
      $("#cpu-attack").html();
      $(".fight-cpu").hide();
      if (playerKOs<3){
        alert("Pick a new opponent!")}
      stop;
    }
  }

  if (computerChar === "incineroar"){
    if (incineroar.health < 1 && incineroar.fight === true){
      $(".ridley-small").addClass('grayScale')
      alert("Knockout!")
      slotTwoFull = false;
      incineroar.fight = false;
      incineroar.inUse = false;
      playerKOs++
      $("#cpu-health").html();
      $("#cpu-attack").html();
      $(".fight-cpu").hide();
      if (playerKOs<3){
        alert("Pick a new opponent!")}
      stop;
      
    }
  }
  if (playerKOs === 3){
    alert("You won and knocked out all the other fighters!");
    reset();
  }
}

})
//After a fighter is defeated increase player kos by one. when it hits 3 you win. 
//A glow or something to identify when a character is selected or knocked out. Have a red x to show up on top of defeated characters, 
//or a greyed out version of their portrait. 

