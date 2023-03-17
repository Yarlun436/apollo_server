import * as React from "react";
import Interfaz from './interfaz';

export default class UserComponent extends React.Component<Interfaz, {}>{
constructor (props: Interfaz){
    super(props)
}

render(){
    return(
        <div>   
            <h1>User Component</h1>
            Hola, <b>{this.props.name}</b>
            <br/>
            Edad: <b>{this.props.age} años</b>
            <br/>
            Ciudad: <b>{this.props.address}</b>
            <br/>
            Fecha de nacimiento: <b>{this.props.dob.toDateString()}</b>
        </div>
    );
}
}