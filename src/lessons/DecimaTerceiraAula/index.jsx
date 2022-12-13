import { useState, useEffect } from "react"

export function DecimaTerceiraAula() {
    const [contador, setContador] = useState(0)
    const [userName, setUserName] = useState('')
    const [userNameError, setUserNameError] = useState(false)
    const [errorForm, setErrorForm] = useState(false)
    
    function adicionarContador() {
        setContador(contador + 1)
    }

    function validar() {
        setErrorForm(!erroForm)
    }

    //Lembrar de sempre nomear os useEffect.
    //Este está validando os nomes.
    useEffect(
        () => {
            console.log(userName)
        }, []
    )

    return (   
        <>
            { userNameError ? (<span>O campo Nome contém mais do que 10 caracteres</span>) : null }
            <h1>Teste</h1>
            <p>O valor do Contador é {contador}</p>
            <button onClick={() => adicionar()}>Atualizar contador</button>
        </>
    )
}