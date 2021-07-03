export function showMore() {
    const root = document.getElementById('root');
    root.innerHTML += "<button class=\"more-button\">Show more</button>"
    const button = document.querySelector('.more-button'),
          elements = document.getElementsByClassName('wrapper'),
          items = document.getElementsByClassName('wrapper-img');


    button.addEventListener('click', () =>{
            for (let el of elements) {
                el.classList.remove('hide')
            }
            for (let el of items) {
                el.classList.remove('hide')
            }
        }
    )
}
