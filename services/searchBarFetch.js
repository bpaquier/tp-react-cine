

async function searchBarFetch(title) {
    let APIACCES = "https://api.themoviedb.org/3/search/movie?api_key=a366c741ebcd23ebb98f75ee1b26fece&language=fr";
    const response = await fetch(
        `${APIACCES}&query=${title}`
    ).then(res => res.json());

    console.log(response);
}
export default searchBarFetch;