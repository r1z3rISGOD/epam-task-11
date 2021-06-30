export function createElements(photoCenter, photoLeft1, photoLeft2, photoRight1, photoRight2) {
    const body = document.getElementById('root');
    body.innerHTML = `
    <img class="img-small img-1" src=${photoLeft1.url} alt="left 1 img">
    <i class="line"></i>
    <img class="img-small img-2" src=${photoLeft2.url} alt="left 2 img">
    <button class="button-prev fas fa-angle-double-left"></button>
    <img class="img-center" src=${photoCenter.url} alt="center img">
    <button class="button-next fas fa-angle-double-right"></button>
    <img class="img-small img-4" src=${photoRight1.url} alt="right 1 img">
    <i class="line"></i>
    <img class="img-small img-5" src=${photoRight2.url} alt="right 2 img">`
}
