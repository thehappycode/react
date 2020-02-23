import React, { useContext, useEffect } from 'react';
import MainContext from './../../MainContext';

const Child = () => {
    const childProvider = useContext(MainContext).child;


    // useEffect(() => {
    //     mainContext.getPosts();
    // }, []);

    const handleInput = e => {
        childProvider.onChangeName(e.target.value);
    }

    const handleClick = () => { }

    return (
        <div>
            <p>My Context name value is: {childProvider.name}</p>
            <span>Enter some text </span>
            <input name="todoinput" onChange={handleInput} />
            <button onClick={() => handleClick()}>add</button>
            <div>
                <button onClick={() => childProvider.getPostChilds(4)}>Get Posts</button>
            </div>
            <div style={{margin: "10px"}}>
                <h4>List of posts</h4>
                {childProvider.datas.map(data => {
                    return (
                        <div key={data.id} >
                            <div> {data.title} </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Child
