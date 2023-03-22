import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { Button, ButtonGroup, Modal, ModalBody, ModalFooter, ModalHeader, Table } from 'reactstrap';
import MenuBar from './MenuBar'

const ListarClientesPage = () => {

  const [listaClientes, setListaClientes] = useState([]);
  const [showModalDelete, setShowModalDelete] = useState(false);
  const [idClienteDelete, setIdClienteDelete] = useState('');


  async function fetchData() {
    const response = await fetch('http://localhost:8080/cliente');
    const body = await response.json();
    setListaClientes(body);
  }



  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://localhost:8080/cliente');
      const body = await response.json();
      setListaClientes(body);
    }
    fetchData();
  }, []);


  async function handleDelete(id){
    await fetch('http://localhost:8080/cliente/' + id,
      {
        method: 'DELETE',
      }
    );
    fetchData();
    toggleModalDelete();
  }

  const onClickDelete = (id) => {
      setShowModalDelete(true);
      setIdClienteDelete(id);
  }

  const toggleModalDelete = () => {
    setShowModalDelete(false);
    setIdClienteDelete('');
  }

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
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        {
          listaClientes.map((cliente) =>
          <tr>
            <td>{cliente.nome}</td>
            <td>{cliente.email}</td>
            <td>
              <ButtonGroup>
                <Button tag={Link} to={"/clientes/" + cliente.id}>Editar</Button>
                <Button color='danger' onClick={()=>onClickDelete(cliente.id)}>Excluir</Button>
              </ButtonGroup>


            </td>
          </tr>
          )
        }
      </tbody>
    </Table>
    <Modal isOpen={showModalDelete} toggle={toggleModalDelete}>
        <ModalHeader toggle={toggleModalDelete}>
          Exclusão de clientes
        </ModalHeader>
        <ModalBody>
          Tem certeza que deseja excluir o cliente ID {idClienteDelete}?
        </ModalBody>
        <ModalFooter>
          <Button color='primary' onClick={()=> handleDelete(idClienteDelete)}>Sim</Button>
          <Button color='secondary' onClick={toggleModalDelete}>Não</Button>
        </ModalFooter>
    </Modal>
    </>
  )
}

export default ListarClientesPage