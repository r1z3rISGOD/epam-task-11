import {objectsCreate} from "./objectCreate";

export function directionChange(index, response, direction) {
    if (direction === 'next') {
        index += 1;
    }
    if (direction === 'prev') {
        index -= 1;
    }
    objectsCreate(index, response)
    const buttonNext = document.querySelector('.button-next');
    const buttonPrev = document.querySelector('.button-prev');

    buttonNext.addEventListener('click', () => {
        directionChange(index, response, 'next')
    })

    buttonPrev.addEventListener('click', () => {
        directionChange(index, response, 'prev')
    })
}
