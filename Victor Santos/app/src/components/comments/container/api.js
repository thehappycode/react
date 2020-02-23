const getApiPostComments = async () => {
    // id = id ? id : "";
    const response = await fetch(`https://jsonplaceholder.typicode.com/comments`);
    // .then(response => response.json())
    // .then(json => console.log(json))
    const result = await response.json();
    // const result = id ? [posts] : posts;
    return result;
}

export {
    getApiPostComments
}