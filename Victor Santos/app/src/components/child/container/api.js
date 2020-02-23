const getApiPostChilds = async id => {
    id = id ? id : "";
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
    // .then(response => response.json())
    // .then(json => console.log(json))
    const res = await response.json();
    const result = id ? [res] : res;
    return result;
}

export {
    getApiPostChilds
}