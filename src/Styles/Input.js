import styled from "styled-components";

export const Form = styled.form`
    width: 100%;
    margin-bottom: 20px;
    display: flex;
    border-radius: calc(0.5 * 100px);
    box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.38);
    justify-content: space-evenly;
`

export const CheckBox = styled.input`
    margin-right: 15px;
`
export const InputText = styled.input`
    display: ${({display}) => display};
    font-size: 1rem;
    font-weight: 400;
    width: 85%;
    padding-right: 5px;
    padding-left: 10px;
    border-radius: calc(0.5 * 100px);
    height: 45px;
    outline: none;
    border: none;


    ::placeholder {
        color: #000;
    }


`
export const EditInput = styled(InputText)`
    width: 100%;
    padding: 10px;
    border: 1px solid #dfdfdf;
`

export const Li = styled.li`
    font-size: 1.2rem;
    list-style-type: none;
    padding: 17px 0px;
    border-bottom: 1px solid #eaeaea;
`
