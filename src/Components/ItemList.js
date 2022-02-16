import React from "react";
import { Input } from "../Styles/Input";
import {Button} from "../Styles/Button";



const ItemList = props => {

    return (
        <li>
            <Input
                type="checkbox"
                checked={props.data.complete}
                onChange={() => props.ToggleBox(props.data.id)}
            />
            <Button onClick={() => props.deleteItem(props.data.id)}>Deletar</Button>
            {props.data.title}
        </li>
    );
}

export default ItemList;