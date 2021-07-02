export function createPhotos(photo, count) {
    const container = document.querySelector('.container');
    if(count > 15) {
        container.innerHTML += `
<div class="wrapper-img hide">
<div class="container-img">
<img class="container-img__img" src=${photo.url} alt=${photo.title}>
</div>
<span>${photo.title}</span>
</div>
    `
    } else {
        container.innerHTML += `
<div class="wrapper-img">
<div class="container-img">
<img class="container-img__img" src=${photo.url} alt=${photo.title}>
</div>
<span>${photo.title}</span>
</div>
    `
    }
}
