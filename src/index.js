import './main.scss'
import 'core-js'
import {objectsCreate} from "./objectCreate";
import {albums} from "./classCreate";
import {showMore} from "./showMore";
import {fetchData} from "./fetchData";

async function main() {
    const albumData = await fetchData("https://jsonplaceholder.typicode.com/albums"),
          photoData = await fetchData("https://jsonplaceholder.typicode.com/photos");
    for(let index of albumData) {
        await albums(index);
    }

    showMore();

    const el = document.querySelectorAll(`.wrapper`);
    for (let num of el) {
        num.addEventListener('click', () => {
            objectsCreate(photoData, num.id);
        })
    }
}

main();
