let counter = document.getElementById("counter");

let count= 0 ;

document.getElementById("increment").addEventListener("click", function() {
    count++;
    counter.innerText = count;
});


document.getElementById("decrement").addEventListener("click",function(){
    if (count > 0) {
    count--;
    counter.innerText = count;
    }

});
