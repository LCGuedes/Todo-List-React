import React from "react";
import ItemList from "./ItemList";


const List = props => {

    return (
        <>
        {/*having the data acess through the props(prop drilling)*/}
            <ul>
                {props.data.map(item => (
                    
                    <ItemList 
                        key={item.id}
                        data={item}
                        ToggleBox={props.ToggleBox}
                        deleteItem={props.deleteItem}
                    >
                    </ItemList>
                
                ))}
            </ul>
        </>
    );
}

export default List;

