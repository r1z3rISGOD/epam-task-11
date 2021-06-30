import './main.scss'
import {objectsCreate} from "./objectCreate";
import {directionChange} from "./directionChange";

async function main() {
    let response = await fetch("https://jsonplaceholder.typicode.com/photos")
        .then(response => response.json())
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
main();
