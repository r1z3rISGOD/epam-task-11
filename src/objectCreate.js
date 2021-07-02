import {createPhotos} from "./createPhotos";

class Photo {
    constructor(url, title, id) {
        this.url = url;
        this.title = title;
        this.id = id;
    }
}

export function objectsCreate(response, albumId) {
    const container = document.querySelector('.container');
    container.innerHTML = '';
    let count = 0;
    for(let el of response) {
        if(el.albumId === +albumId) {
            const photo = new Photo(el.url, el.title, el.id);
            createPhotos(photo, count)
            count++;
        }
    }
}
