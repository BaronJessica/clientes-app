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
  return (
    <>
      <MenuBar/> <div>
      <h1>Editar Cliente Page </h1>
      <Form>
        <FormGroup>
          <Label for="cpf">CPF</Label>
          <Input type='text' name='cpf' id='cpf'/>
        </FormGroup>
        <FormGroup>
          <Label for="nome">Nome</Label>
          <Input type='text' name='nome' id='nome'/>
        </FormGroup>
        <FormGroup>
          <Label for="email">E-mail</Label>
          <Input type='text' name='email' id='email'/>
        </FormGroup>
        <FormGroup>
          <Label for="celular">Celular</Label>
          <Input type='text' name='celular' id='celular'/>
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