"use strict";

function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
  return parent.append(el);
}

const ul = document.getElementById('albums');

const getAlboms = async () => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/albums");
        const albums = await response.json();
        return albums.map(function(album) {
            const li = createNode("li");
            const button = createNode("button");
            li.innerHTML = album.title;
            li.classList.add("album_title");
            button.textContent = "Delete";
            append(ul, li);
            append(li, button);
        });
    } catch (error) {
        return console.log(error);
    }
};

getAlboms();

ul.addEventListener("click", (event) => {
    const isRemoveButton = event.target.nodeName === "BUTTON";

    if (isRemoveButton) {
        const albumBlock = event.target.closest(".album_title");
        albumBlock.remove();
    } 
});




