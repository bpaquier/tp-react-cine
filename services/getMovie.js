async function getMovieFetch(type, id) {
    if(!id) return null;
    const response = await fetch(`https://api.themoviedb.org/3/${type}/${id}?api_key=a366c741ebcd23ebb98f75ee1b26fece`
    ).then(res => res.json())

    return response;
}
export default getMovieFetch;