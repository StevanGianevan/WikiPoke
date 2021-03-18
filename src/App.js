import React , {Component} from 'react';
import { Row , Container , Col} from 'react-bootstrap';
import './App.css';
import {ListPokemon , NavbarComponent} from './Component';
import DetailPokemon from './Component/DetailPokemon';
import  MyPokemon from './Component/MyPokemon';
import {BrowserRouter as Router , Route , Switch} from 'react-router-dom';
import axios from 'axios';
import FormName from './Component/formName';

function App(){
  return (
    <Router>
      <div>
        <NavbarComponent />
        <Route path ="/" exact component = {ListPokemon} />
        <Route path = "/MyPokemon" component = {MyPokemon}/>
        <Route path ="/DetailPokemon/:id" component ={DetailPokemon} />
        <Route path ="/FormName" component = {FormName}/>
      </div>
    </Router>
  );
}

export default App;