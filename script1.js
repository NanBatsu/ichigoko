
//Taken from batsu

//Function to hide and show things 
function showhide() {
    var div = document.getElementById("newpost");
    if (div.style.display !== "none") {
        div.style.display = "none";
    } else {
        div.style.display = "block";
    }
}
//Function to make the mansory layout of the gallery work appropriately
const masonryLayout = (containerElem, itemsElems, columns) => {
    containerElem.classList.add('masonry-layout', `columns-${columns}`);

    let columnElements = [];

    for (let i = 1; i <= columns; i++) {
        let column = document.createElement('div');
        column.classList.add('masonry-column', `column-${i}`);
        containerElem.appendChild(column);
        columnElements.push(column);
    }

    for (let m = 0; m < Math.ceil(itemsElems.length / columns); m++) {
        for (let n = 0; n < columns; n++) {
            let item = itemsElems[m * columns + n];
            columnElements[n].appendChild(item);
            item.classList.add('masonry-item')
        }
    }
}

masonryLayout(document.getElementById('gallery'), document.querySelectorAll(".gallery-item"), 3);



//Twitch Embed Toggle
function toggleTwitch() {
    var x = document.getElementById("twitch");

    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block"
        new Twitch.Embed("twitch-embed", {
            width: 1200,
            height: 480,
            channel: "nansbatsu"
        });;
    }

};
//Contact - Changing commission images
function toggleDetails() {
    var image = document.getElementById("commissionTarget");
    image.src = "https://cdn.discordapp.com/attachments/441588949496889344/655613248736985088/details.png"

};

function toggleEmotes() {
    var image = document.getElementById("commissionTarget");
    image.src = "https://cdn.discordapp.com/attachments/441588949496889344/655613195720982559/ChibiHeadshot.png"

};

function toggleFullbody() {
    var image = document.getElementById("commissionTarget");
    image.src = "https://cdn.discordapp.com/attachments/441588949496889344/651116120748851201/Full_Body.png"

};

function toggleIcons() {
    var image = document.getElementById("commissionTarget");
    image.src = "https://cdn.discordapp.com/attachments/441588949496889344/655613196861964295/Icons_Match.png"

};

function toggleChibi() {
    var image = document.getElementById("commissionTarget");
    image.src = "https://cdn.discordapp.com/attachments/441588949496889344/655613195200757772/Chibi.png"

};