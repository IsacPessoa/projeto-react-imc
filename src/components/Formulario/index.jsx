import { useState } from "react"
import styles from './formulario.module.css'

const Formulario = ()=> {

    const [peso, setPeso] = useState(0);
    const [altura, setAltura] = useState(0);

    const renderizaResultadoIMC = ()=> {
        const mult = altura*altura;
        const imc = peso/mult;

        if(imc < 18.5) {
            return (
                <p>
                    Você está abaixo do peso!<br/>
                    Seu IMC é: {imc.toFixed(1)}
                </p>
            )
        }else if(imc >= 18.5 && imc <=24.9) {
            return (
                <p>
                    Você está com o peso saudável <br/>
                    Seu IMC é: {imc.toFixed(1)}
                </p>
            )
        }else if(imc >= 25 && imc <=29.9) {
            return (
                <p>
                    Você está com sobrepeso <br/>
                    Seu IMC é: {imc.toFixed(1)}
                </p>
            )
        }else if(imc >= 30 && imc <=34.9) {
            return (
                <p>
                    Você está com Obesidade grau I <br/>
                    Seu IMC é: {imc.toFixed(1)}
                </p>
            )
        }else if(imc >= 35 && imc <=39.9) {
            return (
                <p>
                    Você está com Obesidade grau II <br/>
                    Seu IMC é: {imc.toFixed(1)}
                </p>
            )
        }else if(imc >= 40) {
            return (
                <p>
                    Você está com Obesidade grau III <br/>
                    Seu IMC é: {imc.toFixed(1)}
                </p>
            )
        }
    }
    
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>CÁLCULO DO IMC</h1>
            <form className={styles.form}>
                <input className={styles.input} type="number" placeholder="Digite seu Peso(Kg):" onChange={evento => setPeso(evento.target.value)} />
                <input className={styles.input} type="number" placeholder="Digite sua Altura(m):" onChange={evento => setAltura(evento.target.value)} />
                {renderizaResultadoIMC()}
            </form>
        </div>
    )
}

export default Formulario