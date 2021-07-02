import './main.scss'
import 'core-js'
import {objectsCreate} from "./objectCreate";
import {albums} from "./classCreate";
import {showMore} from "./showMore";

async function fetchData(url) {
    try {
        let response = await fetch(url);
        return await response.json();
    } catch (e) {
        alert('We got some errors, Captain!')
    }
}

async function main() {
    const albumData = await fetchData("https://jsonplaceholder.typicode.com/albums");
    const photoData = await fetchData("https://jsonplaceholder.typicode.com/photos");
    for(let index of albumData) {
        await albums(index);
    }

    showMore('wrapper');

    const el = document.querySelectorAll(`.wrapper`);
    for (let num of el) {
        num.addEventListener('click', () => {
            objectsCreate(photoData, num.id);
        })
    }
}

main();
