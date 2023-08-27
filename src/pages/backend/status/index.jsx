const Status = () => {
    return (
        <div style={{ marginTop: "20px", marginLeft: "20px", width: "100%" }}>
            <p>status: <span style={{ color: "green", display: "inline-block" }}>200</span> SUCESSO</p>
            <p>status: <span style={{ color: "red", display: "inline-block" }}>400</span> REQUISIÇÃO NÃO ACEITA</p>
            <div style={{ borderBottom: " 1px solid #e0e6ed" }} /><br />

            <p># Fins de segurança</p><br />

            <p>status: <span style={{ color: "red", display: "inline-block" }}>401</span> usuário não cadastrado ( não está autorizado )</p>
            <p>status: <span style={{ color: "red", display: "inline-block" }}>403</span> usuário cadastrado ( você não tem acesso para essa página ou serviço )</p>
            <p>status: <span style={{ color: "red", display: "inline-block" }}>404</span> recurso não existente</p>
            <p>status: <span style={{ color: "red", display: "inline-block" }}>409</span> User alredy existing</p>
        </div>
    )
}

export default Status