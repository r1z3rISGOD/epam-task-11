import './main.scss'
import 'core-js'
import {objectsCreate} from "./objectCreate";
import {directionChange} from "./directionChange";

async function fetchData() {
    try {
        let response = await fetch("https://jsonplaceholder.typicode.com/photos");
        return await response.json();
    } catch (e) {
        alert('We got some errors, Captain!')
    }
}

fetchData().then(r => main(r));

async function main(response) {
    let index = Math.floor(Math.random() * 5000);
    await objectsCreate(index, response);

    const buttonNext = document.querySelector('.button-next');
    const buttonPrev = document.querySelector('.button-prev');


    buttonNext.addEventListener('click', () => {
        directionChange(index, response, 'next');
    })
    buttonPrev.addEventListener('click', () => {
        directionChange(index, response, 'prev');
    })
}
