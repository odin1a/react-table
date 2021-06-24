import React, { useState } from "react";
import GoogleTable from './components/GoogleTable'
import Modal from "./components/Modal";

function App() {
  const [isOpenModal, setisOpenModal] = useState(false);
  const [rows, setRows] = useState(0);
  const [columns, setColumns] = useState(0)
  const [listOfInput, setlistOfInput] = useState([])
  function changeColumns(e) {
    setColumns(
      e.target.valueAsNumber
    )
    console.log(columns);
  }

  function changeRows(e) {
    setRows(
      e.target.valueAsNumber
    )
    console.log(rows);
  }
  function createInput(i, j, e) {
    e.preventDefault()

    setlistOfInput(prevState => {
      const target = { i: i, j: j }
      console.log(`${i}, ${j}`);
      console.log(`${prevState} = prevstate`);
      console.log(`${prevState} prevstate`);
      if ((prevState.includes(target))) {
        return prevState
      } else {
        console.log(`hiddemInput=${listOfInput}`);
        prevState.map(elem => { console.log(elem, `elem`); return elem })
        return [...prevState, { i: i, j: j }];
      }

    });

  }
  function openChangeModal(e) {
    setisOpenModal(
      true
    )
    e.preventDefault()
  }
  // програ следит + [fasfa]


  return (
    <div className="app">
      <Modal isOpenModal={isOpenModal}
        openChangeModal={openChangeModal}
        rows={rows}
        changeRows={changeRows}
        changeColumns={changeColumns}
        columns={columns}
      />
      <div className="navbar"></div>
      <GoogleTable rows={rows} listOfInput={listOfInput} createInput={createInput}
        columns={columns}
      />
    </div>
  )
}


export default App;
