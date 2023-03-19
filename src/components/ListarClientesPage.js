import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { Button, Table } from 'reactstrap';
import MenuBar from './MenuBar'

const ListarClientesPage = () => {

  const [listaClientes, setListaClientes] = useState([]);



  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://localhost:8080/cliente');
      const body = await response.json();
      setListaClientes(body);
    }
    fetchData();
  }, []);
  return (
    <>
    <MenuBar/>
    <div><h1>ListarClientesPage</h1></div>

    <Button tag={Link} to="/clientes/novo">Incluir Clientes</Button>
    <Table>
      <thead>
        <tr>
          <th>Nome</th>
          <th>E-mail</th>
        </tr>
      </thead>
      <tbody>
        {
          listaClientes.map((cliente) =>
          <tr>
            <td>{cliente.nome}</td>
            <td>{cliente.email}</td>
          </tr>)
        }
      </tbody>
    </Table>
    </>
  )
}

export default ListarClientesPage