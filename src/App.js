
import React, { useEffect, useState } from 'react';

import './App.css';
import ModalCard from './components/common/Modal-Card/ModalCard';
import Backdrop from './components/common/Backdrop/Backdrop';

function App() {



  const [backdrop_show,set_backdrop_show] = useState(false);
  const [modal_one_show,set_modal_one_show] = useState(false);
  const [modal_one_fordrop_show,set_modal_one_fordrop_show] = useState(false);
  const [modal_two_show,set_modal_two_show] = useState(false);


  useEffect(()=>{
    // if modal two is shown modal one should have a frodrop
    if(modal_two_show){
      set_modal_one_fordrop_show(true);
    }else{
      set_modal_one_fordrop_show(false);
    }
  },[modal_two_show])

  useEffect(()=>{
    //if this modal is open have a backdrop
    if(modal_one_show){
      set_backdrop_show(true);
    }else{
      set_backdrop_show(false);
    }

  },[modal_one_show]);

  return (
    <div className="App">
      <Backdrop show={backdrop_show}/>
      <h1>Logo</h1>
      <button onClick={()=>set_modal_one_show(prev=>!prev)}>Open Modal 1</button>

      <ModalCard show={modal_one_show} fordropShow={modal_one_fordrop_show} toggleShow = {set_modal_one_show} height="456px" zIndex={1000}>
        <h3>modal one content</h3>
        <button onClick={()=>{
        set_modal_two_show(prev=>!prev)
        set_modal_one_fordrop_show(prev=>!prev);
      }}>Open Modal 2</button>
      </ModalCard>
      <ModalCard show={modal_two_show} toggleShow = {set_modal_two_show} height="350px" zIndex={1001}>
        <h3>modal two content</h3>
        
      </ModalCard>
    </div>
  );
}

export default App;
