export function createAlbums(album) {
    const container = document.querySelector('.container');

    if(album.id > 25) {
        container.innerHTML +=
            `
<div class="wrapper hide" id=${album.id}>
<div class="container-album">
<span>${album.id}</span>
</div>
<span>${album.title}</span>
</div>
`
    } else {
        container.innerHTML +=
            `
<div class="wrapper" id=${album.id}>
<div class="container-album">
<span>${album.id}</span>
</div>
<span>${album.title}</span>
</div>
`
    }
}
