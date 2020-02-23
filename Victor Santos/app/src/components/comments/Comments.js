import React, { useContext } from 'react';
import MainContext from './../../MainContext';

const Comments = () => {
    const commentProvider = useContext(MainContext).comments;

    return (
        <div style={{ margin: "20px", padding: "5px", border: "1px solid gray" }}>
            <button onClick={() => commentProvider.getPostComnents()}>Get Comments</button>
            <h4>Comments</h4>
            <div>
                <ul>
                    {commentProvider.datas.map(data => {
                        return (
                            <li key={data.id}>
                                {data.name}
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    )
}

export default Comments;
