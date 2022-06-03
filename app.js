var index = 1;
changeImage = function(){
    var imgs = ["img/imgs/1.png", "img/imgs/2.png", "img/imgs/3.png"];
    document.getElementById('img').src = imgs[index];
    index++;
    if( index == 3)
    {
        index = 0;
    }

}

setInterval(changeImage,2000)

