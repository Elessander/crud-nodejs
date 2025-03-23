import axios from "axios";
import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { toast } from "react-toastify";

const FormContainer = styled.form`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  background: #f9f9f9;
  padding: 30px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  justify-content: center;
  align-items: center; /* Centraliza verticalmente */
  text-align: center; /* Centraliza o conteúdo */
`;

const InputArea = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-width: 150px;
`;

const Input = styled.input`
  padding: 12px;
  border: 2px solid #ddd;
  border-radius: 8px;
  outline: none;
  transition: border-color 0.3s;

  &:focus {
    border-color: #2c732d;
  }
`;

const Label = styled.label`
  font-weight: bold;
  margin-bottom: 8px;
`;

const Button = styled.button`
  padding: 12px 20px;
  background: #007bff;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.3s;
  align-self: center;

  &:hover {
    background: #0056b3;
  }
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
            <Button type="submit">Salvar</Button>
        </FormContainer>
    );
};

export default Form;