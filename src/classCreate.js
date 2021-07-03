import {createAlbums} from "./createAlbums";

class Albums {
    constructor(id, title) {
        this.id = id;
        this.title = title;
    }
}

export function albums(item) {
    const album = new Albums(item.id, item.title);
    createAlbums(album);
}
