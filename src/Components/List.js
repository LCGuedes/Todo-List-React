import React from "react";
import ItemList from "./ItemList";


const List = props => {

    return (
        
            <ul>
                {props.data.map(item => (
                    
                    <ItemList 
                        key={item.id}
                        data={item}
                        ToggleBox={props.ToggleBox}
                       deleteItem={props.deleteItem}
                       editHandle={props.editHandle}
                    >
                    </ItemList>
                
                ))}
            </ul>
        
    );
}

export default List;

