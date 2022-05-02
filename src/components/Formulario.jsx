import React, {useState} from 'react';

const Formulario = () => {
    
    const [nombre, setNombre] = useState("");
    const [nombreError, setNombreError] = useState("");
    const [apellido, setApellido] = useState("");
    const [apellidoError, setApellidoError] = useState("");
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [contraseña, setContraseña] = useState("");
    const [contraseñaError, setContraseñaError] = useState("")
    const [confirmar, setConfirmar] = useState("");
    const [confirmarError, setConfirmarError] = useState("");
    
//    const Formulario = props => {
//        const{imputs, setImputs} =props;
//        
//        const onChange = ga => {
//            setImputs({
//                imputs,
//                [ga.target.nombre]: ga.target.value
//            })
//        
//        };    
    
    const mostrarError = (e) => {
        e.preventDefault();
        if(nombre.length < 2) {
            setNombreError("El nombre debe tener al menos 2 caracteres");

        } else {
            setNombreError('');
        }

        if(apellido.length < 2) {
            setApellidoError("El apellido debe tener al menos 2 caracteres");

        } else {
            setApellidoError("");
        }

        if(email.length < 5) {
            setEmailError("El correo debe tener al menos 5 caracteres");

        } else {
            setEmailError("");
        }

        if(contraseña.length < 8) {
            setContraseñaError("La contraseña debe tener al menos 8 caracteres");

        } else {
            setContraseñaError('');
        }

        if(contraseña === confirmar ) {
            setConfirmarError("");

        } else {
            setConfirmarError('Las contraseñas no coinciden');
        }
    }

    return( 
        
//          <form>
//            <h2>Crear Usuario</h2>
//            <div className='form-group'>
//                <label htmlFor="nombre">Nombre</label>
//                <input onChange={onChange} id="nombre" className='form-control'name="nombre" />
//            </div>
//            <div className='form-group'>
//            <label htmlFor="apellido">Apellido</label>
//            <input onChange={onChange} id="apellido" className='form-control'name="apellido" />
//            </div>
//            <div className='form-group'>
//                <label>E-mail</label>
//                <input onChange={onChange} id="email" className='form-control'name="email" />
//            </div>
//            <div className='form-group'>
//                <label>Contraseña</label>
//                <input type="password" onChange={onChange} id="password" className='form-control'name="password" />
//            </div>
//            <div className='form-group'>
//                <label>Confirmar Contraseña</label>
//                <input type="password" onChange={onChange} id="confirmPasssword" className='form-control'name="confirmPasssword" />
//            </div>
//            
//            
//        </form>


        <form onSubmit={mostrarError} >
            <h2>Crear Usuario</h2>
            <div className='form-group'>
                
                <label htmlFor="nombre">Nombre</label>
                <input id="nombre" className='form-control' onChange={ (e)=>setNombre(e.target.value) } value={nombre} />
                <br/>{nombreError} 
            </div>
            <div className='form-group'>
                
                <label>Apellido</label>
                <input className='form-control' onChange={ (e)=>setApellido(e.target.value) } value={apellido} />
                <br/>{apellidoError}
            </div>
            <div className='form-group'>                
                <label>E-mail</label>
                <input className='form-control' onChange={ (e)=>setEmail(e.target.value) } value={email} />
                <br/>{emailError}
            </div>
            <div className='form-group'>
                <label>Contraseña</label>
                <input className='form-control' onChange={ (e)=>setContraseña(e.target.value) } value={contraseña} />
                <br/>{contraseñaError}            
            </div>
            <div className='form-group'>
                <label>Confirmar Contraseña</label>
                <input className='form-control' onChange={ (e)=>setConfirmar(e.target.value) } value={confirmar} />
                <br/>{confirmarError}
            </div>
            <input type="submit" className='btn btn-success' value="Crea Usuario" />
            <br/>
            <br/>
            <br/>





            Nombre: {nombre} <br/>
            Apellido: {apellido}<br/>
            Contraseña: {contraseña}<br/>
            Confirmar: {confirmar}
        </form>
    )

}

export default Formulario;