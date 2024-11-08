import React from 'react'
import './ContactoForm.css'
function ContactoForm(){
return (
    <>
    <form className="contenedor-form">
    <label>Nombre
        <input className="nombre" placeholder="Nombre"></input>
    </label>
    <label>
        <input className="email" placeholder="Email"></input>
    </label>
    <label>
        <input className="telefono" placeholder="telefono"></input>
    </label>
    <button type="submit">Enviar</button>
    </form>
    </>
)
}
export default ContactoForm;