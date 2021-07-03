export async function fetchData(url) {
    try {
        let response = await fetch(url);
        return await response.json();
    } catch (e) {
        alert('We got some errors, Captain!')
    }
}
