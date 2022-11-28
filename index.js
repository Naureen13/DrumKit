//Detecting button click

for(var i=0;i<document.querySelectorAll(".drum").length;i++){
document.querySelectorAll(".drum")[i].addEventListener("click", function(){
// this.style.color="white";
var ab=this.innerHTML;
makeSound(ab);
buttonAnimation(ab);
});
}


//detecting keyboard button press

document.addEventListener("keydown",function(eventThatTriggerdTheFxn){
    makeSound(eventThatTriggerdTheFxn.key)
    buttonAnimation(eventThatTriggerdTheFxn.key)
}); 

function makeSound(key){
    switch (key) {
        case "w":
        var tom1= new Audio('sounds/tom-1.mp3');
        tom1.play();
        break;
        
        case "a":
        var tom2= new Audio('sounds/tom-2.mp3');
        tom2.play();
        break;    
        
        case "s":
        var tom3= new Audio('sounds/tom-3.mp3');
        tom3.play();
        break;

        case "d":
        var tom4= new Audio('sounds/tom-4.mp3');
        tom4.play();
        break;

        case "j":
        var tom5= new Audio('sounds/snare.mp3');
        tom5.play();
        break;

        case "k":
        var tom6= new Audio('sounds/crash.mp3');
        tom6.play();
        break;

        case "l":
        var crash= new Audio('sounds/kick-bass.mp3');
        crash.play();
        break;

        default: console.log(ab)
    
}

}

function buttonAnimation(currentKey){
    var activeButton= document.querySelector("."+currentKey);
    activeButton.classList.add("pressed");

    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },100);

}



