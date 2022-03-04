import React from "react";
import './Instructions.css';

const Instructions = () => {
  return (
    <>

    <h1>TAREAS DEL TAMBO</h1>

    <p className="instructionsText">Bienvenido a tu plataforma de tareas de Flores del Tambo. <br/>
    A continuación, podrás consultar, 
    agregar y marcar como completadas 
    las tareas que tengas asignadas.
    </p>

<h2 className="importantTitle">IMPORTANTE</h2>

<p className="instructionsText">
Si aún no está la lista del proceso que buscas, 
puedes crearla en el primer espacio de creación de tareas. 
</p>
<hr/>
    </>
  )
}

export default Instructions