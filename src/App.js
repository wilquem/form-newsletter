import './App.css';
import React, { Component } from 'react';
import FormularioCadastro from './components/FormularioCadastro/FormularioCadastro'
import { Container, Typography } from '@mui/material'


class App extends Component {
  render() {
    return (
      <Container maxWidth="sm" component="article">
        <Typography variant="h4" align="center">Formulário Newsletter</Typography>
        <FormularioCadastro />
      </Container>
    );
  }
}

export default App;
