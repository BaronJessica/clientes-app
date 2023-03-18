import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button, Form, FormGroup, Input, Label } from 'reactstrap'
import MenuBar from './MenuBar'

const EditclientsPage = () => {

  const [cliente, setCliente]= useState({
    cpf: '',
    nome: '',
    email:'',
    celular:''
  });

  function handleChange(event){
    const target = event.target;
    const value = target.value;
    const name = target.name;
    
    var uptatedClient = {...cliente}
    uptatedClient[name]= value;

    setCliente(uptatedClient)
  }

  return (
    <>
      <MenuBar/> <div>0
      <h1>Editar Cliente Page </h1>
      <Form>
        <FormGroup>
          <Label for="cpf">CPF</Label>
          <Input type='text' name='cpf' id='cpf' onChange={handleChange}/>
        </FormGroup>
        <FormGroup>
          <Label for="nome">Nome</Label>
          <Input type='text' name='nome' id='nome' onChange={handleChange}/>
        </FormGroup>
        <FormGroup>
          <Label for="email">E-mail</Label>
          <Input type='text' name='email' id='email' onChange={handleChange}/>
        </FormGroup>
        <FormGroup>
          <Label for="celular">Celular</Label>
          <Input type='text' name='celular' id='celular' onChange={handleChange}/>
        </FormGroup>

        <FormGroup>
          <Button color='primary'>Salvar</Button>
          <Button color='secodary' tag={Link} to='/clientes'>Calcelar</Button>

        </FormGroup>
      </Form>
      </div>
   
      </>
  )
}

export default EditclientsPage