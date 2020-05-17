import React, { Component } from "react";
import {Form, FormGroup, Label, Input} from 'reactstrap'

class SearchBar extends Component {
  
  // eslint-disable-next-line
  constructor(props){
    super(props);
    
  };

  render(){
    return (
      <Form className="col-sm-12 col-md-3 ml-3">
        <FormGroup>
          <Label for="modelName">Nome</Label>
          <Input type="text" name="modelName" id="modelName" placeholder="Nome" />
        </FormGroup>

        <FormGroup>
          <Label for="modelDescription">Descrição</Label>
          <Input type="text" name="modelDescription" id="modelDescription" placeholder="Descrição" />
        </FormGroup>
        
        <FormGroup>
          <Label for="modelType">Tipos</Label>
          <Input type="select" name="modelType" id="modelType" multiple>
            <option>Docker</option>
            <option>Tensorflow</option>
            <option>JVM</option>
            <option>Outros</option>
          </Input>
        </FormGroup>

      </Form>
    );
  };
}

export default SearchBar;