$(document).ready(function(){
    
    //Global Variables
    // _____________________________________________________________________________________________________________ 
    
    // character array
    var charArr = [
        {
            name:"kyle",
            hp: 100,
            strength: 200,
            image:"assets/images/KyleM.jpg",
        },

        {
            name:"taco",
            hp: 70,
            strength: 75,
            image:"assets/images/taco.png",
        },

        {
            name:"aaron",
            hp: 100,
            strength: 100,
            image:"assets/images/aaron.png",
        },

        {
            name:"doug",
            hp: 100,
            strength: 30,
            image:"assets/images/DougD.jpg",
        },


    ]
    
    // keeps track of the hero
    var chosenHero
    // keeps track of the enemy
    var chosenEnemy
    // checks if the hero is still alive
    var isHeroAlive
    // checks if the enemy is still alive
    var isEnemyAlive
    // checks if hero is chosen
    var isHeroChosen
    // checks if enemy is chosen
    var isEnemyChosen

    // function that starts the game
    // ______________________________________________________________________________________________________________
    function initGame(){
        // generate heros
        isEnemyChosen = false
        isHeroChosen = false
        for (var i = 0; i < charArr.length; i++){
            var num = Math.floor(12 / charArr.length)
            var charThing = $("<div class= 'myChar col-md-"+num+"' value='"+i+"'><img src='"+charArr[i].image+"' style='width:150px;height:150px;'/></div>")
            $("#characters").append(charThing)
            
            
        }

    }


    //function that selects hero and enemy
    //_______________________________________________________________________________________________________________
    $(document).on("click", ".myChar", function(){
        if (isHeroChosen === false){
            chosenHero=charArr[$(this).attr("value")]
            console.log(chosenHero)
            $(this).addClass("fader")
            isHeroChosen=true
            $(".what").replaceWith("pick an enemy")
            var hero = $("<div class='col-md-5'><img src='"+chosenHero.image+"' style='width:250px;height:250px;'></div>")
            $("#hero").append(hero)
        }

        else if(isEnemyChosen === false && chosenHero.name != charArr[$(this).attr("value")].name) {
           chosenEnemy=charArr[$(this).attr("value")]
           console.log(chosenEnemy)
           $(this).addClass("fader")
           isEnemyChosen=true
           var enemy = $("<div class='col-md-5'><img src='"+chosenEnemy.image+"' style='width:250px;height:250px;'></div>")
           $("#enemy").append(enemy)
           
       }

       




        
    })

    // function to set up battlefeild
    // ______________________________________________________________________________________________________________

    // function battleFeild(){
    //     var battleThing = $("<div class= 'myChar col-md-5' value='"+i+"'><img src='"+chosenHero.image+"' style='width:250px;height:250px;'/></div>")
    //         $("#hero").append(battleThing)

    // }    
   




    // function for attack
    // ______________________________________________________________________________________________________________
    $("#attackBTN").on("click", function(){
        var num1 = Math.floor(Math.random()*20)
        var num2 = Math.floor(Math.random()*20)
        chosenEnemy.hp -= num1
        $("#enemyHP").text(chosenEnemy.hp)
        $("#attack").html("<p>" + chosenHero.name + " attacked " + chosenEnemy.name + " for " + num1 + " points!</p>")
        chosenHero.hp -= num2
        $("#heroHP").text(chosenHero.hp)
        $("#attacked").html("<p>" + chosenEnemy.name + " attacked " + chosenHero.name + " for " + num2 + " points!</p>")
        console.log(chosenEnemy.hp)
        if (chosenHero.hp <= 0){
            alert("you loose")
        }
        else if (chosenEnemy.hp <= 0){
            alert("you win")
        }
        
    })
 


    // This actually starts the game
    // ______________________________________________________________________________________________________________

    initGame();
    
    

})














// write hero and oponent on the page larger use divs in the row

































































// This is the code I wrote prior to wedsesday class
// _________________________________________________________________________________________________________________


 // This determines the healthpoints for each 
    // var healthPts = Math.floor(Math.random()*100 + 50)
    // var attackPts = Math.floor(Math.random()*40)
    //    name, attack, hp, strength, image


    // // function when you click on kyle
    // $(".kyle").click(function(){
    //     alert("you clicked kyle")
    //     var healthPts = Math.floor(Math.random()*100 + 50)
    //     var attackPts = Math.floor(Math.random()*40)
    //     var kyle = {
    //         name: "Kyle",
    //         health: healthPts,
    //         attack: attackPts, 
    //     }
    //     console.log(kyle)
    // })

    // // function when you click on doug
    // $(".doug").click(function(){
    //     alert("you clicked doug")
    //     var healthPts = Math.floor(Math.random()*100 + 50)
    //     var attackPts = Math.floor(Math.random()*40)
    //     var doug = {
    //         name: "Doug",
    //         health: healthPts,
    //         attack: attackPts, 
    //     }
    //     console.log(doug)
    // })

    // // function when you click on aaron
    // $(".aaron").click(function(){
    //     alert("you clicked aaron")
    //     var healthPts = Math.floor(Math.random()*100 + 50)
    //     var attackPts = Math.floor(Math.random()*40)
    //     var aaron = {
    //         name: "Aaron",
    //         health: healthPts,
    //         attack: attackPts, 
    //     }
    //     console.log(aaron)
    // })

    // // function when you click on taco
    // $(".taco").click(function(){
    //     alert("you clicked taco")
    //     var healthPts = Math.floor(Math.random()*100 + 50)
    //     var attackPts = Math.floor(Math.random()*40)
    //     var taco = {
    //         name: "Taco",
    //         health: healthPts,
    //         attack: attackPts, 
    //     }
    //     console.log(taco)
    // })

    // // function when you click on attack
    // $(".attack").click(function(){
    //     alert("you attacked")
    // })