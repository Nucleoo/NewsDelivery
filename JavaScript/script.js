var slideImg = document.getElementById("slideImg");

var images = new Array(
    "../Images/About/Img6.jpg",
    "../Images/About/Img7.jpg",
    "../Images/About/Img8.jpg",
    "../Images/About/Img9.jpg"
);

var len = Array.length;
var i = 0;

function slider(){
    if(i > len-1){
        i = 0;
    }

    slideImg.src = images[i];
    i++;
    setTimeout('slider()', 3000);
}