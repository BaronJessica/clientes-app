import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { Alert, Button, Form, FormGroup, Input, Label } from 'reactstrap'
import MenuBar from './MenuBar'

const EditclientsPage = () => {

  const [cliente, setCliente]= useState({
    cpf: '',
    nome: '',
    email:'',
    celular:''
  });

  const [showAlert, setShowAlert] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const navigate = useNavigate();

  const {id} = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://localhost:8080/cliente/' + id);
     
      const body = await response.json();
      setCliente(body);
    }
    if(id !== 'novo'){
    fetchData();
  }
  }, [id]); //dependencia da chamada, chama no momento da renderização

  function handleChange(event){
    const target = event.target;
    const value = target.value;
    const name = target.name;
    
    var uptatedClient = {...cliente}
    uptatedClient[name]= value;

    setCliente(uptatedClient)
  }

 
  async function handleSubmit(){
    try{
    const response = await fetch('http://localhost:8080/cliente' + ((cliente.id) ? '/' + cliente.id : '' ),
    {
      method:(cliente.id) ? 'PUT' : 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type':  'application/json'
      },
      body: JSON.stringify(cliente)
    })
    if(response.ok){
      navigate('/clientes')
    } else {
        const msgError = await response.text();
        throw new Error(msgError)
    }
  } catch(e){
      console.log('Error message' + e.message)
      setShowAlert(true);
      setErrorMessage(e.message);
  }
  }
  function toggleAlert(){
    setErrorMessage(false);
    setShowAlert();
  }
  return (
    <>
      <MenuBar/> <div>
      <h1>Editar Cliente Page </h1>
      <Alert class='danger' isOpen={showAlert} toggle={toggleAlert}>{errorMessage}</Alert>
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
          <Button color='secondary' tag={Link} to='/clientes'>Cancelar</Button>

        </FormGroup>
      </Form>
      </div>
   
      </>
  )
}

export default EditclientsPage