import React, {useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import '../../../App.css';

const initialState = {num: 2};

export default function App() {
    const [count, setCount] = useState(initialState);
    const counter = useSelector(state => state);
    const dispatch = useDispatch();
    
    useEffect(() => {
        document.title = `You click ${count.num} times`;
    });
    
    return (
        <div className="App">
            <h1>This is {counter.num} of redux</h1>
            <h1>This is {count.num} of hook</h1>
            <button
                onClick={() => {dispatch({
                    type: "INCREMENT",
                    step: 1
                })
                setCount(count.num + 1)
            }
            }
            >
                Incremment step 1
            </button>
            <button
                onClick={() => dispatch({
                    type: "DECREMENT",
                    step: 2
                })}
            >
                Decrement step 2
            </button>
        </div>
    )
}

const handlerIncrement = () => {

} 