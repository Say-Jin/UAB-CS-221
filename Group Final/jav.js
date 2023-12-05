const spotifyButtons = document.querySelectorAll(".spotifyButton");
const colorText = document.querySelector("#ColorText");
const foodText = document.querySelector("#FoodText");
const dropbtn = document.querySelector('.dropbtn');
var playButton = document.getElementById('playButton');
var counterElement = document.getElementById('counter');
let user;
var songs = 5;
var count = 5;
var camelotCounter = 0;
var avgCamelot;
var addUpCamelot = 0;
var color;


spotifyButtons.forEach(button => button.addEventListener("click", () => {
    user = button.textContent;
    count -= 1;
    convertButtonToNumber();
    addUpCamelot += convertButtonToNumber();
    if(count > 0){
        songs--;
        counterElement.textContent = songs;
        return;   }
    else if (count == 0){
        avgCamelot = addUpCamelot /5
        colorText.textContent = "Color: " + colorPicker();
        foodText.textContent = "Based on your color, your food recommendation is: " + foodPicker();
        counterElement.textContent = "Your results are below";
    } else{
        return;
    }
}))
function convertButtonToNumber(){
    if(user == "Save Song C12"){
        return 12;    
    }else if(user == "Save Song C11"){
        return 11;
    }else if(user == "Save Song C10"){
        return 10;   
    }else if(user == "Save Song C9"){
        return 9;   
    }else if(user == "Save Song C8"){
        return 8;   
    }else if(user == "Save Song C7"){
        return 7;   
    }else if(user == "Save Song C6"){
        return 6;   
    }else if(user == "Save Song C5"){
        return 5;   
    }else if(user == "Save Song C4"){
        return 4;   
    }else if(user == "Save Song C3"){
        return 3;   
    }else if(user == "Save Song C2"){
        return 2;   
    }else if(user == "Save Song C1"){
        return 1;   
    }

}
function colorPicker(){
    if(avgCamelot < 2){
        color = "Light Violet";
        return color;
    }else if(avgCamelot >= 2 && avgCamelot < 3){
        color = "Purple";
        return color;
    }else if(avgCamelot >= 3 && avgCamelot < 4){
        color = "Blue";
        return color;
    }else if(avgCamelot >= 4 && avgCamelot < 5){
        color = "Cerulean Blue";
        return color;
    }else if(avgCamelot >= 5 && avgCamelot < 6){
        color = "Sky Blue";
        return color;
    }else if(avgCamelot >= 6 && avgCamelot < 7){
        color = "Jungle Green";
        return color;
    }else if(avgCamelot >= 7 && avgCamelot < 8){
        color = "Green";
        return color;
    }else if(avgCamelot >= 8 && avgCamelot < 9){
        color = "Lime Green";
        return color;
    }else if(avgCamelot >= 9 && avgCamelot < 10){
        color = "Yellow";
        return color;
    }else if(avgCamelot >= 10 && avgCamelot < 11){
        color = "Orange";
        return color;
    }else if(avgCamelot >= 11 && avgCamelot < 12){
        color = "Tomato Red";
        return color;
    }else if(avgCamelot >= 12){
        color = "Red";
        return color;
    }
}
function foodPicker(){
    var computerChoice = Math.ceil(Math.random()*3);
    if(color = "Light Violet"){
        switch(computerChoice){
                case 1:
                    return "Cauliflower Salad";
                case 2:
                    return "Plums";
                case 3:
                    return "Taro Rolls";
        }
        }else if(color = "Purple"){
            switch(computerChoice){
                case 1:
                    return "Grapes";
                case 2:
                    return "Prunes";
                case 3:
                    return "Raisins";
        }
        }else if(color = "Blue"){
            switch(computerChoice){
                case 1:
                    return "Blueberries";
                case 2:
                    return "Prunus Spinosa";
                case 3:
                    return "Blue Banana Squash";
        }
        }else if(color = "Cerulean Blue"){
            switch(computerChoice){
                case 1:
                    return "Macaroons";
                case 2:
                    return "Purple Potatoes";
                case 3:
                    return "Cornflowers";
        }
        }else if(color = "Sky Blue"){
            switch(computerChoice){
                case 1:
                    return "Blue Curled Scotch Kale";
                case 2:
                    return "Yod Fah Chinese Broccoli";
                case 3:
                    return "Blue Pearmain Apples";
        }
        }else if(color = "Jungle Green"){
            switch(computerChoice){
                case 1:
                    return "Jungle Green Salad";
                case 2:
                    return "Dagobah Jungle Salad";
                case 3:
                    return "Cilantro-Jalapeno Hummus and Tabouli";
        }
        }else if(color = "Green"){
            switch(computerChoice){
                case 1:
                    return "Brocoli";
                case 2:
                    return "Cabbage";
                case 3:
                    return "Spinach";
        }
        }else if(color = "Lime Green"){
            switch(computerChoice){
                case 1:
                    return "Radish";
                case 2:
                    return "Key Lime Cupcakes";
                case 3:
                    return "Cilantro-Lime Green Cabbage Slaw";
        }
        }else if(color = "Yellow"){
            switch(computerChoice){
                case 1:
                    return "Pineapple";
                case 2:
                    return "Corn";
                case 3:
                    return "Squash";
        }
        }else if(color = "Orange"){
            switch(computerChoice){
                case 1:
                    return "Pumpkin";
                case 2:
                    return "Oranges";
                case 3:
                    return "Mangos";
        }
        }else if(color = "Tomato Red"){
            switch(computerChoice){
                case 1:
                    return "Tomatoes";
                case 2:
                    return "Pico de Gallo";
                case 3:
                    return "Cucumber Tomato Red Onion Salad";
        }
        }else if(color = "Red"){
            switch(computerChoice){
                case 1:
                    return "Strawberries";
                case 2:
                    return "Apples";
                case 3:
                    return "Cherries"
        }
        }
    }


var drop = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < drop.length; i++) {
    drop[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
        content.style.maxHeight = null;
    } else {
        content.style.maxHeight = "none";
    }; 
    if (content.style.display === "flex") {
        content.style.display = "none", content.style.overflow = "hidden";
      } else {
        content.style.display = "flex", content.style.overflow = "visible", content.style.position = "relative";
    }
});
}
