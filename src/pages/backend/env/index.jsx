const Env = () => {
    return (
        <div style={{
            marginTop: "20px",
            marginLeft: "20px",
            width: "100%"
        }}>
            <p>.env</p><br />
            <p>DATABASE_URL=</p>
            <p>ACCESS_TOKEN_SECRET="d4885241n-da6c-4914-a66e-0cb410fa56e8"</p>
            <p>REFRESH_TOKEN_SECRET="c4b52273-0c8f-4e8a-8773-5554848fd480"</p><br />
            <p>SALT_KEY="ac94af7b-eb20-47b1-800d-4e88942489"</p><br />
            <p>PORT=3000</p>
            <p>DB_DATABASE="prontuario"</p>
            <p>DB_USER="postgres"</p>
            <p>DB_PASSWORD="1234567"</p><br />
            <p>============================================================</p><br />
            <p>Procfile</p>
            <p>web:  node api/server.js</p>
        </div>
    )
}

export default Env