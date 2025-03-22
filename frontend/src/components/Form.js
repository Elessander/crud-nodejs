import React, { useRef } from "react";
import styled from "styled-components";

const FormContainer = styled.form`
    display: flex;
    align-items: flex-end;
    gap: 10px;
    flex-wrap: wrap;
    background-color: #fff;
    padding: 20px;
    box-shadow: 0 0 5px #ccc;
    border-radius: 5px;
`;

const InputArea = styled.div`
    display: flex;
    flex-direction: column;
`;

const Input = styled.input`
    width: 120px;
    padding: 0 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    height: 40px;
`;

const Label = styled.label``;

const Button = styled.button`
    padding: 10px;
    cursor: pointer;
    border-radius: 5px;
    border: none;
    background-color: #2c732d;
    color: white;
    height: 42px;
`;

const Form = ({onEdit}) => {
    const ref = useRef();

    return (
        <FormContainer>
            <InputArea>
                <Label>Nome</Label>
                <Input name="nome"/>
            </InputArea>
            <InputArea>
                <Label>Código</Label>
                <Input name="codigo"/>
            </InputArea>
            <InputArea>
                <Label>Descrição</Label>
                <Input name="descricao"/>
            </InputArea>
            <InputArea>
                <Label>Preço</Label>
                <Input name="preco" type="decimal"/>
            </InputArea>
            <Button type="submit">Adicionar</Button>
        </FormContainer>
    );
};

export default Form;