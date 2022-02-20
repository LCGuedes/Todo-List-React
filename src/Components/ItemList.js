import React, { useState } from "react";
import { CheckBox, Li, EditInput } from "../Styles/Input";
import {Delete} from "../Styles/Button";

const ItemList = props => {
    const {id, completed, title} = props.data;

    const [editItem, setEditItem] = useState(false);

    let editMode = {};
    let viewMode ={};

    if(editItem) {
        viewMode.display="none";
    } else {
        editMode.display="none";
    }

    const editHandle = e => {
        setEditItem(true);
    };

    const editDone = e => {
        if (e.key === "Enter") {
            setEditItem( false )
          }
    }
    

    return (
        <Li>
            <div onDoubleClick={editHandle} style={viewMode}>
                <CheckBox
                    type="checkbox"
                    checked={completed}
                    onChange={() => props.ToggleBox(id)}
                />
                <Delete
                    onClick={() => props.deleteItem(id)}
                >
                    Deletar
                </Delete>
                {title}
            </div>
            <EditInput
                type ="text"
                style={editMode}
                value={title}
                onChange={e => {
                    props.editHandle(e.target.value, id)
                }}
                onKeyDown={editDone}
            />
        </Li>
    );
}

export default ItemList;