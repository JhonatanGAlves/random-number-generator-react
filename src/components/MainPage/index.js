import React, { useState } from 'react'
import styled from 'styled-components'

export default function MainPage() {
    const [numeroAleatorio, setNumeroAleatorio] = useState(0)

    const gerarNumero = () => {
        const novoNumero = Math.floor(Math.random() * (100-1) + 1)
        setNumeroAleatorio(novoNumero)

    }

    const zerarNumero = () => {
        setNumeroAleatorio(0)
    }

    return (
        <Container>
            <h3>Número aleatório:</h3>
            <h1>{numeroAleatorio}</h1>
            <ButtonArea>
                <label>Click no botão abaixo para gerar um número aleatório:</label>
                <button onClick={gerarNumero}>Gerar número</button>

                <button className="botaoZerar" onClick={ zerarNumero }>Zerar número</button>
            </ButtonArea>
        </Container>
    )
}

const Container = styled.div`
    background-color: #FFF;
    width: 500px;
    height: 300px;
    box-shadow: 5px 8px 20px 5px #DDD;
    border-radius: 15px;
    text-align: center;

    h3 {
        margin-top: 60px;
    }

    button {
        font-size: 16px;
        font-weight: 600;
        color: #FFF;
        border: none;
        border-radius: 5px;
        padding: 10px;
        background-color: #00d3db;
    }

    button:hover {
        background-color: #00a7ad;
    }
`
const ButtonArea = styled.div`
    line-height: 40px;

    button {
        margin: 5px;
    }

    .botaoZerar {
        background-color: #CCC;
    }
    .botaoZerar:hover {
        background-color: #DDD;
    }
`