import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Button, Form, FormGroup, Input, Label } from 'reactstrap'
import MenuBar from './MenuBar'

const EditclientsPage = () => {

  const [cliente, setCliente]= useState({
    cpf: '',
    nome: '',
    email:'',
    celular:''
  });

  const navigate = useNavigate()

  function handleChange(event){
    const target = event.target;
    const value = target.value;
    const name = target.name;
    
    var uptatedClient = {...cliente}
    uptatedClient[name]= value;

    setCliente(uptatedClient)
  }
  async function handleSubmit(){
    await fetch('http://localhost:8080/cliente',
    {
      method:'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type':  'application/json'
      },
      body: JSON.stringify(cliente)
    })
    navigate('/clientes')
  }

  return (
    <>
      <MenuBar/> <div>
      <h1>Editar Cliente Page </h1>
      <Form>
        <FormGroup>
          <Label for="cpf">CPF</Label>
          <Input type='text' name='cpf' id='cpf' onChange={handleChange} value={cliente.cpf}/>
        </FormGroup>
        <FormGroup>
          <Label for="nome">Nome</Label>
          <Input type='text' name='nome' id='nome' onChange={handleChange} value={cliente.nome}/>
        </FormGroup>
        <FormGroup>
          <Label for="email">E-mail</Label>
          <Input type='text' name='email' id='email' onChange={handleChange} value={cliente.email}/>
        </FormGroup>
        <FormGroup>
          <Label for="celular">Celular</Label>
          <Input type='text' name='celular' id='celular' onChange={handleChange} value={cliente.celular}/>
        </FormGroup>

        <FormGroup>
          <Button color='primary' onClick={handleSubmit}>Salvar</Button>
          <Button color='secodary' tag={Link} to='/clientes'>Calcelar</Button>

        </FormGroup>
      </Form>
      </div>
   
      </>
  )
}

export default EditclientsPage