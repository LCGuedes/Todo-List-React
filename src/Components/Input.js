import React, { useState } from "react";
import {Form, InputText} from "../Styles/Input";
import {ButtonSubmit} from "../Styles/Button";


const InputItem = props => {

    const [inputData, setInputData] = useState("");

    const inputHandle = e => {
        
        

        setInputData(
            e.target.value
        );
        
    };  

    const HandleSubmit = e => {
        e.preventDefault();
        props.addItem(inputData)

        setInputData("")

    }

    return (
        <Form onSubmit={HandleSubmit}>
            <InputText
                type="text"
                placeholder="Adicionar item"
                value={inputData}
                onChange={inputHandle}
            />
            <ButtonSubmit>
                Adicionar
            </ButtonSubmit>
        </Form>
    );
};

export default InputItem;