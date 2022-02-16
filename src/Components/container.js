import React, { useState } from "react";
import List from "./List";

const state = {

    Items: [

        {
            id: 1,
            title: "Estudar React Hooks",
            complete: true 
        },

        {
            id: 2,
            title: "Estudar Fetch API",
            complete: true 
        },

        {
            id: 3,
            title: "Estudar Storage API",
            complete: false 
        },

    ]
}



const Container = props => {

    const [State, setState] = useState(state);

    const ItemsMod = State.Items;

    const ToggleBox = id => {

        setState({
            Items: ItemsMod.map(item => {
                if (item.id === id) {
                    item.complete = !item.complete;
                };
                return item;
            })
        });   
    };

    const DeleteItem = id => {

        setState({
            Items:[...ItemsMod.filter(item => {
                return item.id !==id
                })
            ]
        })

        console.log(State.Items)
    };

    return (
        <>
        {/*Now the List have the data acess*/}
            <List
                data={state.Items}
                ToggleBox={ToggleBox}
                deleteItem={DeleteItem}
            />
        </>
    );
}

export default Container;