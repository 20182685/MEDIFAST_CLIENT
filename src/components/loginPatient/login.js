import React from "react";
import '../../css/loginPatient/loginPatient.css'

const Login = () => {
    return (
        <duv>
            <div class="login-page">
                <div class="form">
                    <form class="login-form">
                        <input type="text" placeholder="usuario" />
                        <input type="password" placeholder="contraseña" />
                        <button><a href="http://localhost:3000/MedicalSearch">Ingresar</a></button>
                        <p class="message">No te has registrado? <a href="#">create una cuenta</a></p>
                    </form>
                </div>
            </div>
        </duv>

    )

}

export default Login;