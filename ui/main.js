//counter code

var button = documnet.getElementById('counter');
var counter = 0;
button.onclick = function(){
    counter = counter + 1;
var span = documnet.getElementById('count');
span.innerHTML = counter.toString();
};