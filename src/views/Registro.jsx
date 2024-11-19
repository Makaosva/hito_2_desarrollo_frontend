import React, { useState } from "react";

// const Registro = ({ setMensaje, setTipo }) => {
//     // Estados del Formulario
//     const [nombre, setNombre] = useState('');
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [confirmar, setConfirmar] = useState('');
//     const [errorConfirmar, setErrorConfirmar] = useState('');

//     const handleChange = (setter) => (e) => {
//         setter(e.target.value);
//         setMensaje(''); // Limpiar el mensaje al cambiar algún campo
//         setErrorConfirmar(''); // Limpiar el mensaje de error de confirmación
//     };

//     const validarDatos = (e) => {
//         e.preventDefault();

//         // Validación de campos vacíos
//         if (nombre === '' || email === '' || password === '' || confirmar === '') {
//             setMensaje('Completa todos los campos');
//             setTipo('danger');
//             return;
//         }

//         // Validación de coincidencia de contraseñas
//         if (password !== confirmar) {
//             setErrorConfirmar('Las contraseñas no coinciden');
//             return;
//         }

//         // Si no hay errores, se muestra un mensaje de éxito
//         setMensaje('¡Información enviada con éxito!');
//         setTipo('success');

//         setNombre('');
//         setEmail('');
//         setPassword('');
//         setConfirmar('');
//     };

//     return (
//         <form className="formulario" onSubmit={validarDatos}>
//             <div className="form-group">
//                 <input
//                     type="text"
//                     name="nombre"
//                     className="form-control barra-input"
//                     onChange={handleChange(setNombre)}
//                     value={nombre}
//                     placeholder="Nombre"
//                 />
//             </div>
//             <div className="form-group">
//                 <input
//                     type="email"
//                     name="email"
//                     className="form-control barra-input"
//                     onChange={handleChange(setEmail)}
//                     value={email}
//                     placeholder="Email"
//                 />
//             </div>
//             <div className="form-group">
//                 <input
//                     type="password"
//                     name="password"
//                     className="form-control barra-input"
//                     onChange={handleChange(setPassword)}
//                     value={password}
//                     placeholder="Password"
//                 />
//             </div>
//             <div className="form-group">
//                 <input
//                     type="password"
//                     name="confirmar"
//                     className="form-control barra-input"
//                     onChange={handleChange(setConfirmar)}
//                     value={confirmar}
//                     placeholder="Confirma tu Password"
//                 />
//                 {errorConfirmar && <small className="text-danger">{errorConfirmar}</small>}
//             </div>
//             <button type="submit" className="btn btn-primary btn-lg boton">
//                 Enviar
//             </button>
//         </form>
//     );
// };

const Registro = () => {
  return <div>Registro</div>;
};
export default Registro;
