import React, {useState, useEffect} from 'react';
import '../../App.css';

const Example = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `You clicked ${count} times`;
    });

    return (
        <div className="App">
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
        </div>
    );
}

// Effect with Cleanup


export default Example;