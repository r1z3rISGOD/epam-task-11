import {createAlbums} from "./createAlbums";

class ClassCreate {
    constructor(id, title) {
        this.id = id;
        this.title = title;
    }
}

export function albums(item, data) {
    const album = new ClassCreate(item.id, item.title);
    createAlbums(album, data);
}
