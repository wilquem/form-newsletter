import React, { useState } from "react";
import ReactDOM from "react-dom";

import { TextField, Button, Switch, FormControlLabel, Typography} from "@mui/material";

function FormularioCadastro() {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        console.log(nome, sobrenome);
      }}
    >
      <TextField
        value={nome}
        onChange={(event) => {
          let tmpNome =event.target.value
          if(tmpNome.length >= 4){
            tmpNome = tmpNome(nome.substr(0, 3))
          }
          setNome(tmpNome)
        }}
        id="nome"
        label="Nome"
        variant="outlined"
        margin="dense"
        fullWidth
      />
      <TextField
        value={sobrenome}
        onChange={(event) => {
          setSobrenome(event.target.value);
        }}
        id="sobrenome"
        label="Sobrenome"
        variant="outlined"
        margin="dense"
        fullWidth
      />
      <TextField
        id="cpf"
        label="CPF"
        variant="outlined"
        margin="dense"
        fullWidth
      />
      <FormControlLabel
        control={<Switch name="promocoes" defaultChecked />}
        label="Promoções"
      ></FormControlLabel>
      <FormControlLabel
        control={<Switch name="promocoes" defaultChecked />}
        label="Novidades"
      ></FormControlLabel>
      <Button variant="outlined" type="submit">
        Cadastrar
      </Button>
      <Typography align="center" >{nome + " " + sobrenome}</Typography>

    </form>
  );
}

export default FormularioCadastro;
