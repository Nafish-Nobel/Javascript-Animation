const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//create empty array
let images = [];
images.length = 10;

//push the images into array

for(let i = 1 ; i < images.length ; i++){
    images[i] = new Image();
    images[i].src = 'Walk (' + i.toString() + ').png';
}
let i = 1;
setInterval(function(){
    i++;
    if( i >= 10){
        i = 1;
    }
    c.drawImage(images[i],100,100,100,100);
},100)