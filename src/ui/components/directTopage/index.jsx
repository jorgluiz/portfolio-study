import { useEffect, useState } from "react";
import "./styles.css"

const useDirect = (timeSeconds, setTimeSeconds) => {
    const [directCancel, setDirectCancel] = useState()
    const [ativo, setAtivo] = useState()

    const d = () => {
        if(timeSeconds === 0) setTimeSeconds(5)
        setAtivo(true)
        setDirectCancel(setTimeout(() => { window.location.href = "https://www.youtube.com.br" }, 5000))
    }
    return { d, directCancel, ativo, setAtivo }
}

const useCancel = (directCancel, setTimeSeconds, setAtivo, cancelTimeSeconds) => {

    const cancel = () => {
        setTimeSeconds(0)
        setAtivo(false)
        window.clearTimeout(cancelTimeSeconds)
        window.clearTimeout(directCancel)
    }
    return { cancel }
}

const DirectTopage = () => {
    const [timeSeconds, setTimeSeconds] = useState(5)
    const [cancelTimeSeconds, setCancelTimeSeconds] = useState()
    const { d, directCancel, ativo, setAtivo} = useDirect(timeSeconds, setTimeSeconds)
    const { cancel } = useCancel(directCancel, setTimeSeconds, setAtivo, cancelTimeSeconds)

    useEffect(() => {
        if(ativo === true) setCancelTimeSeconds(setTimeout(() => setTimeSeconds(timeSeconds - 1), 1000))
    },[timeSeconds, ativo])

    return (
        <>
            <h1 className="h1-directTopage">Reiniciar cronometro <button className="rei" onClick={() => {if(timeSeconds === 0) setTimeSeconds(5)}}>REINICIAR</button></h1>
            <h4>Você será redirecionado em {timeSeconds} segundos, a menos que você clique em cancel <button className="cancel" onClick={() => cancel()}>CANCEL</button></h4>
            <div><button className="dir" onClick={() => d()}>DIRECIONAR</button></div>
        </>
    )
}

export default DirectTopage