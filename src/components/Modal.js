import React from 'react'
import './Modal.css'

export default function Modal({ rows, changeRows, isOpenModal, openChangeModal, columns, changeColumns }) {

    return (
        <div className={isOpenModal ? 'modal' : 'modal active'} onClick={openChangeModal}>
            <div className="container" onClick={e => { e.stopPropagation() }}>
                <h1>React Table</h1>
                <form className="form">
                    <label>
                        <p>Culomns</p>
                        <input type="number" placeholder="Enter table culomns" min="0" max="10000" 
                            onChange={changeColumns} columns={columns}
                        >
                        </input>
                    </label>
                    <label>
                        <p>Rows</p>
                        <input type="number" placeholder="Enter table number" min="0" max="10000" required
                            onChange={changeRows} rows={rows}
                        />
                    </label>
                    <button onClick={openChangeModal}
                    > go
                        </button>
                </form>
            </div>
        </div>
    )
}
