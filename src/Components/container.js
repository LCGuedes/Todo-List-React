import React, { useState } from "react";
import List from "./List";
import InputItem from "./Input";
import _Header from "./Header";
import { v4 as uuidv4 } from "uuid";
import { Container, Box } from "../Styles/wrappers.";


const state = {

    Items: [

        {
            id: uuidv4(),
            title: "Estudar React Hooks",
            completed: true, 
        },

        {
            id: uuidv4(),
            title: "Estudar Fetch API",
            completed: false, 
        },

        {
            id: uuidv4(),
            title: "Estudar Storage API",
            completed: false,
        },

    ]
}


const _Container = () => {

    const [State, setState] = useState(state);

    const ItemsMod = State.Items;

    const ToggleBox = id => {

        setState({
            Items: ItemsMod.map(item => {
                if (item.id === id) {
                    item.completed = !item.completed;
                };
                return item;
            })
        });   
    };

    const deleteItem = id => {
      
        setState({
            Items:[...ItemsMod.filter(item => {
                return item.id != id;
                })
            ]
        });
    };

    const addItem = add => {

        const newItem = {
            id: uuidv4(),
            title: add,
            complete: false
        };

        if( add === "") {
            alert("Digite algo");
        } else {

            setState({
                Items: [...State.Items, newItem]
            });
        };
    };

    const editHandle = (editedTitle, id) => {
        setState({
            Items: ItemsMod.map(item => {
              if (item.id === id) {
                item.title = editedTitle
              }
              return item;
            }),
          })
    };

    return (

        <Container>
            <Box>
                <_Header />
                <InputItem addItem={addItem} />
                <List
                    data={State.Items}
                    ToggleBox={ToggleBox}
                    deleteItem={deleteItem}
                    editHandle={editHandle}
                />
            </Box>
        </Container>
    );
}

export default _Container;