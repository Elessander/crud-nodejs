import React from "react";
import axios from "axios";
import styled from "styled-components";
import { FaTrash, FaEdit } from "react-icons/fa";
import { toast } from "react-toastify";

const Table = styled.table`
  width: 100%;
  background: #fff;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  overflow: hidden;
  margin-top: 20px;
`;

const Thead = styled.thead`
  background: #2c732d;
  color: white;
`;

const Tr = styled.tr`
  &:nth-child(even) {
    background: #f3f3f3;
  }
`;

const Th = styled.th`
  padding: 12px;
`;

const Td = styled.td`
  padding: 12px;
  text-align: center;
`;

const IconButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 1.8rem;
  margin: 0 15px;

  &:hover {
    opacity: 0.8;
  }

  &.edit {
    color: #f4b400;
  }

  &.delete {
    color: #d93025;
  }
`;

const Grid = ({ products, setProducts, setOnEdit }) => {
  const handleEdit = (item) => {
    setOnEdit(item);
  };

  const handleDelete = async (id) => {
    await axios
      .delete("http://localhost:8800/" + id)
      .then(({ data }) => {
        const newArray = products.filter((product) => product.id !== id);
        setProducts(newArray);
        toast.success(data);
      })
      .catch(({ data }) => toast.error(data));

    setOnEdit(null);
  };

  return (
    <Table>
      <Thead>
        <Tr>
          <Th>Nome</Th>
          <Th>Código</Th>
          <Th>Descrição</Th>
          <Th>Preço</Th>
          <Th>Ações</Th>
        </Tr>
      </Thead>
      <tbody>
        {products.map((item) => (
          <Tr key={item.id}>
            <Td>{item.nome}</Td>
            <Td>{item.codigo}</Td>
            <Td>{item.descricao}</Td>
            <Td>R$ {item.preco}</Td>
            <Td>
              <IconButton className="edit" onClick={() => handleEdit(item)}>
                <FaEdit />
              </IconButton>
              <IconButton className="delete" onClick={() => handleDelete(item.id)}>
                <FaTrash />
              </IconButton>
            </Td>
          </Tr>
        ))}
      </tbody>
    </Table>
  );
};

export default Grid;