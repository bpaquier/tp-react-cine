async function searchBarFetch(title) {
    if(!title) return null;
    let APIACCES = "https://api.themoviedb.org/3/search/movie?api_key=a366c741ebcd23ebb98f75ee1b26fece";
    const response = await fetch(
        `${APIACCES}&query=${title}`
    ).then(res => res.json())
    .then(data => data.results)

    return response;
}
export default searchBarFetch;