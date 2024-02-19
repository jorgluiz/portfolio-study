import "./styles.css";
import freelancerIcon from "../../../assets/freelancer-icon.png"

const SitesReference = () => {
  return (
    <>
      <h1>Projetos para por em prática</h1>
      <div className="list-container">
        <div style={{ width: "100%" }}>
          <p style={{ backgroundColor: "cyan", textAlign: "center", fontWeight: "700", border: "1px solid black" }}>inteligência artificial AI</p>
          <br />
          <ul className="ul-padding-left">
            <li>
              <a href="https://chat.openai.com/c/104adbc3-68b0-4c16-9ae6-58980fcc4992">
                ChatGPT
              </a>
            </li>
            <li>
              <a href="https://platform.openai.com/docs/overview">
                OpenAI developer platform
              </a>
            </li>
            <li>
              <a href="https://cloud.ibm.com/login?state=%2F&sessionExpired=true">
                IBM cloud
              </a>
            </li>
            <li>
              <a href="https://deepai.org/">deepai</a>
            </li>
          </ul>
        </div>
        <div style={{ width: "100%", borderLeft: "1px solid black" }}>
          <p style={{ backgroundColor: "ActiveBorder", textAlign: "center", color: "white", fontWeight: "700", border: "1px solid black" }}>customizar videos</p>
          <ul className="ul-padding-left">
            <li>
              <a href="https://www.youtube.com/watch?v=YnJrC7kp5Ls&ab_channel=webboss">
                Build an advanced custom Video Player with React
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/watch?v=Ntd6lzohOTQ&ab_channel=S-Tech04">
                How to create custom video player using HTML, CSS and JavaScript
                | No plugin | Part 1
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/watch?v=ZeNyjnneq_w&ab_channel=WebDevSimplified">
                How To Create The YouTube Video Player
              </a>
            </li>
          </ul>
        </div>
        <div style={{ width: "100%", borderLeft: "1px solid black" }}>
          <p style={{ backgroundColor: "blueviolet", textAlign: "center", color: "white", fontWeight: "700", border: "1px solid black" }}>hospedagem para aplicativos da web</p>
          <ul className="ul-padding-left ul-web">
            <li className="li-vercel">
              <a href="https://vercel.com/dashboard">vercel</a>
              <p>
                Pode implantar aplicativos front-end, back-end ou full-stack
              </p>
            </li>
          </ul>
        </div>
        <div style={{ width: "100%", borderLeft: "1px solid black" }}>
          <p style={{ backgroundColor: "peru", textAlign: "center", color: "white", fontWeight: "700", border: "1px solid black" }}>simula um servidor de email</p>
          <ul className="ul-padding-left">
            <li>
              <a href="https://mailtrap.io/signin">mailtrap</a>
            </li>
          </ul>
        </div>
        <div style={{ width: "100%", borderLeft: "1px solid black" }}>
          <p style={{ backgroundColor: "darkgray", textAlign: "center", color: "black", fontWeight: "700", border: "1px solid black" }}>estudos</p>
          <ul className="ul-padding-left">
            <li>
              <a href="https://www.w3schools.com/">w3schools</a>
            </li>
            <li>
              <a href="https://horadecodar.com.br/contador-regressivo-com-javascript-puro/">hora de codar</a>
            </li>
            <li>
              <a href="https://weatherstack.com/documentation">weatherstack</a>
            </li>
            <li>
              <a href="https://developer.mozilla.org/pt-BR/">developer.mozilla</a>
            </li>
          </ul>
        </div>
      </div>
      {/* @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ */}
      <div className="list-container-canais">
        <div>
        <h1 style={{ margin: "90px 0 0 0 " }}>Canais no <span style={{ color: "red" }}>You</span>Tube</h1><br />
        <ul className="ul-padding-left">
          <li>
            <a href="https://www.youtube.com/@rocketseat">Rocketseat</a>
          </li>
          <li>
            <a href="https://www.youtube.com/results?search_query=+Fabio+Akita">Fabio Akita</a>
          </li>
          <li>
            <a href="https://www.youtube.com/watch?v=yueHW0hr5nQ&ab_channel=FilipeDeschamps">FilipeDeschamps</a>
          </li>
          <li>
            <a href="https://www.youtube.com/@cod3r">Cod3r</a>
          </li>
          <li>
            <a href="https://www.youtube.com/@ErickWendelTraining">Erick Wendel</a>
          </li>
          <li>
            <a href="https://www.youtube.com/@bosontreinamentos">Bóson Treinamentos</a>
          </li>
        </ul>
        </div>
        <div>
          <img src={freelancerIcon} alt="" width="150px" /><br />
          <ul className="ul-padding-left">
            <li>
              <a href="https://www.br.freelancer.com/dashboard">freelancer</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default SitesReference;
