
import React, { useState } from 'react';

import './App.css';
import ModalCard from './components/common/Modal-Card/ModalCard';

function App() {




  const [modal_one_show,set_modal_one_show] = useState(false);
  const [modal_two_show,set_modal_two_show] = useState(false);



  


  return (
    <div className="App">
      <h1>Logo</h1>
      <button onClick={()=>set_modal_one_show(prev=>!prev)}>Open Modal 1</button>
      <button onClick={()=>set_modal_two_show(prev=>!prev)}>Open Modal 2</button>

      <ModalCard show={modal_one_show} toggleShow = {set_modal_one_show} height="456px">
        <h3>modal one content</h3>
      </ModalCard>
      <ModalCard show={modal_two_show} toggleShow = {set_modal_two_show} height="350px">
        <h3>modal two content</h3>
        
      </ModalCard>
    </div>
  );
}

export default App;
