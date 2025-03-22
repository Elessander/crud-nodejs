import axios from "axios";
import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { toast } from "react-toastify";

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

const Form = ({ getProducts, onEdit, setOnEdit }) => {
    const ref = useRef();

    useEffect(() => {
        if (onEdit) {
            const user = ref.current;

            user.nome.value = onEdit.nome;
            user.codigo.value = onEdit.codigo;
            user.descricao.value = onEdit.descricao;
            user.preco.value = onEdit.preco;
        }
    }, [onEdit]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const user = ref.current;

        if (
            !user.nome.value || 
            !user.codigo.value || 
            !user.preco.value
        ) {
            return toast.warn("Preencha todos os campos!");
        }

    if (onEdit) {
        await axios
        .put("http://localhost:8800/" + onEdit.id, {
            nome: user.nome.value,
            codigo: user.codigo.value,
            descricao: user.descricao.value,
            preco: user.preco.value,
        })
        .then(({ data }) => toast.success(data))
        .catch(({ data }) => toast.error(data));
    } else {
        await axios
        .post("http://localhost:8800/", {
            nome: user.nome.value,
            codigo: user.codigo.value,
            descricao: user.descricao.value,
            preco: user.preco.value,
        })
        .then(({ data }) => toast.success(data))
        .catch(({ data }) => toast.error(data));
    }

    user.nome.value = "";
    user.codigo.value = "";
    user.descricao.value = "";
    user.preco.value = "";

    setOnEdit(null);
    getProducts();
};

    return (
        <FormContainer ref={ref} onSubmit={handleSubmit}>
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