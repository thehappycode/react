import React, { useState, useEffect } from 'react';
import '../../App.css';
// 📌 State Hook
// const Counters = () => {
//     const [count, setCount] = useState(0);
//     return (
//         <div className="App">
//             <p>You clicked {count} times</p>
//             <button onClick={() => setCount(count + 1)}>
//                 Click me
//             </button>
//         </div>
//     );
// }

// ⚡️ Effect Hook
const Counters = () => {
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

// 💡 Building Your Own Hooks
// function useFriendStatus(friendID){
//     const [isOnline, setIsOnline] = useState(null);

//     function handleStatusChange(status){
//         setIsOnline(status.isOnline);
//     }

//     useEffect(() => {
//         ChatAPI.subscribeToFriendStatus(friendID, handleStatusChange);
//         return () => {
//             ChatAPI.unsubscribeFromFriendStatus(friendID, handleStatusChange);
//         }
//     });
//     return isOnline;
// }

// function FriendStatus(props){
//     const isOnline = useFriendStatus(props.friend.id);

//     if(isOnline === null){
//         return 'Loading....';
//     }
//     return isOnline?'Online':'Offline';
// }

// function FriendListItem(props){
//     const isOnline = useFriendStatus(props.friend.id);

//     return (
//         <li style={{color: isOnline ? 'green' : 'black'}}>
//             {props.friend.name}
//         </li>
//     );
// }
export default Counters;