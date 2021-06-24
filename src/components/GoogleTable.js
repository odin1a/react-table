import React from 'react'

export default function GoogleTable(props) {
    console.log(`listOfInput = ${props.listOfInput}`);
    function Columns(props) {
        let items = [];
        for (let i = 0; i < props.columns; i++) {
            items.push(props.children(i));
        }
        return (
            <table>
                {items}
            </table>
        )
    }
    function Row(props) {
        let item= [];
        for (let j = 0; j < props.rows; j++) {
            item.push(props.children(j));
        }
        return (
            <tbody>
                <tr >
                    {item}
                </tr>
            </tbody>
        )
    }
    function isHiddenInput(index, elem) {
        console.log(`index = ${index}`);
        console.log(`elem = ${elem}`);
        const target = {i: index, j: elem}
        if ((props.listOfInput.includes(target))) {
            return false
        } else {
            return true
        }
    }

    return (
        <div className="content">
            <Columns columns={props.columns} >
                {(index) => (
                    <Row className="table-b" key={index} rows={props.rows}>
                        {(elem) => (
                            <td key={elem} onClick={(e) => { props.createInput(index, elem, e) }} >
                                {/* {isHiddenInput && <input type="text" />} */}
                            </td>
                        )}
                    </Row>
                )}
            </Columns>
        </div>
    )
}
