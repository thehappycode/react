import React from 'react';
import ReactDOM from 'react-dom';

import MyCard from './components/kiemthu';
import './index.css';
import './c3jscustom.css';
const rootElement = document.getElementById("root");
if(rootElement){
  ReactDOM.render(< App />, rootElement);
}
else{
  throw new Error("Could not find root element to mount to!");
}
function App() {
  return (
    < >
      <MyCard />
    </>
  );
}

export default App;
