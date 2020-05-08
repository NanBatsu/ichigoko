(function () {

    var imgArray = [
        "https://cdn.discordapp.com/attachments/685184510819827730/687848039783727104/usserbaby_optimized.png",
        "https://cdn.discordapp.com/attachments/685184510819827730/687848039783727104/usserbaby_optimized.png",
        "https://cdn.discordapp.com/attachments/685184510819827730/687848039783727104/usserbaby_optimized.png",
        "https://cdn.discordapp.com/attachments/685184510819827730/687848039783727104/usserbaby_optimized.png"

    ]
    // var dad = document.getElementsByClassName('carousel-inner')


    for (var i = 0; i < imgArray.length; i++) {
        //create elements
        var carouselItem = document.createElement("div");
        var carouselImg = document.createElement("img");
        //Set attributes
        carouselItem.setAttribute('class', 'carousel-item');
        carouselImg.setAttribute('class', 'd-block w-100')
        carouselImg.setAttribute('src', imgArray[i]);
        carouselImg.setAttribute('alt','auto slide');

        console.log("created image")
        console.log(i)
        console.log(imgArray.length)
        //Childs
        //append
        carouselItem.appendChild(carouselImg);
        document.getElementById('carouselMain').appendChild(carouselItem)

    }
})();
