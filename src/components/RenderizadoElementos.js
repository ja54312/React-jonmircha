import React, { Component } from 'react';
import data from '../helpers/data.json';


function ElementoLista (props){
    return(
        <li>
            <a href={props.el.web} 
            target="_blank"
            rel="noreferrer">{props.el.name}</a>
        </li>
    );
}


export default class RenderizadoElementos extends Component {
    constructor(props){
        super(props);
        this.state = {
            seasons:["primavera","verano","otoño","invierno"]
        };
    }
    render(){
        console.log(data);
        return(
            <div>
                <h2>Renderizado Elementos</h2>
                <h3>Estaciones del año</h3>
                <ol>
                    {
                        this.state.seasons.map((el)=>
                        <li key={el}>{el}</li>)
                    }
                </ol>
                <h3>Frameworks Frontend JavaScript</h3>
                <ul>
                    {
                        data.frameworks.map((el)=> (
                        <ElementoLista key={el.id} el={el}/>))
                    }
                </ul>
            </div>
        )
    };
}