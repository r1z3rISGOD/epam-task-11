import {createElements} from "./createElements";

class Photo {
    constructor(url, title) {
        this.url = url;
        this.title = title;
    }
}

export function objectsCreate(index, response) {const photoCenter = new Photo (response[index].url);
    const photoLeft1 = new Photo (response[index-2].url);
    const photoLeft2 = new Photo (response[index-1].url);
    const photoRight1 = new Photo (response[index+1].url);
    const photoRight2 = new Photo (response[index+2].url);

    createElements(photoCenter, photoLeft1, photoLeft2, photoRight1, photoRight2);
}
