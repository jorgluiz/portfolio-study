import HandAnimation from "../../../ui/components/handAnimation";
import hooksIMG from "../../../assets/01regrashooks.png"


const ApiIntroducao = () => {

  return (
    <>
      <h1 style={{ border: "1px solid #111", textAlign: "center" }}>O que é API da Web?</h1><br /><br />
      <p>API significa <strong>Interface de</strong> Programação de Aplicativo .</p><br />
      <p>Uma API da <strong>Web</strong> é uma interface de programação de aplicativos para a Web.</p><br />
      <p>Uma API de <strong>navegador</strong> pode estender a funcionalidade de um navegador da web.</p><br />
      <p>Uma API de <strong>servidor</strong> pode estender a funcionalidade de um servidor web.</p><br /><br />
      <p style={{ border: "1px solid #111", textAlign: "center" }}><strong>APIs do navegador</strong></p><br />
      <p>Todos os navegadores possuem um conjunto de APIs da Web integradas</p><br />
      <p>Há muitas APIs da Web disponíveis. Abaixo está uma lista de todas as APIs e interfaces (tipos de objeto) que você pode usar ao desenvolver seu <strong>aplicativo</strong> ou <strong>site da Web</strong>.</p><br />


      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <p><a href="https://developer.mozilla.org/pt-BR/docs/Web/API#interfaces" target="_blank" rel="noreferrer"><strong>Referência by ( developer.mozilla )</strong></a></p>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "400px", border: "1px solid #777" }}>
            <h2>Esta é uma lista de algumas as APIs</h2><br />

            <div>
              <h1>Especificações</h1><br />
              <li><a href="https://developer.mozilla.org/en-US/docs/Web/API/Broadcast_Channel_API" target="_blank" rel="noreferrer">API de canal de transmissão</a></li>
              <p><a href="https://www.youtube.com/watch?v=n2NeCLTUMTE&ab_channel=SteveGriffith-Prof3ssorSt3v3" target="_blank" rel="noreferrer">prática</a></p><br />
              <li><a href="https://developer.mozilla.org/en-US/docs/Web/API/Channel_Messaging_API" target="_blank" rel="noreferrer">API de mensagens do canal</a></li><br />
              <h3>C</h3>
              <ul><li>Canvas API</li></ul>
              <ul><li>Console API</li></ul><br />
              <h3>D</h3>
              <ul><li>DOM</li></ul><br />
              <h3>F</h3>
              <ul><li>Fetch API</li></ul>
              <ul><li>File API</li></ul>
              <ul><li>File System API</li></ul><br />
              <h3>G</h3>
              <ul><li>Geolocation API</li></ul><br />
              <h3>H</h3>
              <ul><li>HTML DOM (en-US)</li></ul>
              <ul><li>HTML Drag and Drop API</li></ul><br />
              <h3>I</h3>
              <ul><li>Image Capture API</li></ul><br />
              <h3>K</h3>
              <ul><li>Keyboard API</li></ul><br />
              <h3>M</h3>
              <ul><li>Media Capture and Streams</li></ul>
              <ul><li>MediaStream Recording</li></ul><br />
              <h3>P</h3>
              <ul><li>Page Visibility API</li></ul><br />
              <h3>S</h3>
              <ul><li>Storage</li></ul>
              <ul><li><strong>Streams</strong></li></ul><br />
              <h3>U</h3>
              <ul><li>UI Events</li></ul><br />
              <h3>V</h3>
              <ul><li>Visual Viewport</li></ul><br />
              <h3>W</h3>
              <ul><li>Web Audio</li></ul>
              <ul><li>Web Authentication API</li></ul>
              <div>
                <ul style={{ display: "inline-block" }}><li><strong>Web Notifications</strong></li></ul>
                <HandAnimation />
              </div>
              <ul style={{ display: "inline-block" }}><li><strong> Web Share API</strong></li></ul>
              <HandAnimation />
              <ul><li><i><strong>Web Speech API</strong></i></li></ul><br />
              <h3>X</h3>
              <ul><li>XMLHttpRequest</li></ul><br />

              <h1>Interfaces</h1>
              <p>Esta é uma lista de todas as interfaces </p>
              <p>(isto é, tipos de objetos) disponíveis.</p><br />
              <h3>D</h3>
              <ul><li>DataTransfer</li></ul>
              <ul><li>Document</li></ul><br />
              <h3>E</h3>
              <ul><li>Element</li></ul>
              <ul><li><strong>EventCounts</strong></li></ul><br />
              <h3>F</h3>
              <ul><li>Fetch</li></ul>
              <ul><li>File (API de arquivo)</li></ul>
              <ul><li>FileList</li></ul>
              <ul><li>FileReader</li></ul>
              <ul><li>FormData </li></ul><br />
              <h3>G</h3>
              <ul><li>Geolocation</li></ul><br />
              <h3>H</h3>
              <ul><li>History</li></ul>
              <ul><li>HTMLAudioElement</li></ul>
              <ul><li>HTMLCanvasElement</li></ul><br />
              <h3>I</h3>
              <ul><li>ImageCapture</li></ul><br />
              <h3>K</h3>
              <ul><li>KeyboardEvent</li></ul><br />
              <h3>N</h3>
              <ul><li><strong style={{ color: "green" }}>Notification</strong></li></ul><br />
              <h3>R</h3>
              <ul><li><strong><a style={{ color: "green" }} href="https://developer.mozilla.org/pt-BR/docs/Web/API/Response" target="_blank" rel="noreferrer">Response</a></strong></li></ul><br />
              <h3>S</h3>
              <ul><li>Storage</li></ul><br />
              <h3>V</h3>
              <ul><li>VideoColorSpace</li></ul>
              <ul><li>VideoDecoder</li></ul><br />
              <h3>X</h3>
              <ul><li><a style={{ color: "green" }} href="https://developer.mozilla.org/pt-BR/docs/Web/API/XMLHttpRequest" target="_blank" rel="noreferrer"><strong>XMLHttpRequest</strong></a></li></ul><br />
              {/* <h3></h3>
                    <ul><li></li></ul><br /> */}
            </div>
          </div>
        </div>

        <div>
          <p><a href="https://developer.mozilla.org/pt-BR/docs/Web/API#interfaces"><strong>Referência by ( developer.mozilla )</strong></a></p>
          <div style={{ height: "400px", width: "300px", border: "1px solid #555", overflowY: "scroll" }}>
            <h2></h2><br />
            <ul>

              <li><a href="" target="_blank" rel="noreferrer"></a></li>
              <li><a href="" target="_blank" rel="noreferrer"></a></li>
              <li><a href="" target="_blank" rel="noreferrer"></a></li>
              <li><a href="" target="_blank" rel="noreferrer"></a></li>
              <li><a href="" target="_blank" rel="noreferrer"></a></li>
              <li><a href="" target="_blank" rel="noreferrer"></a></li>
              <li><a href="" target="_blank" rel="noreferrer"></a></li>
              <li><a href="" target="_blank" rel="noreferrer"></a></li>
              <li><a href="" target="_blank" rel="noreferrer"></a></li>
              <li><a href="" target="_blank" rel="noreferrer"></a></li>
              <li><a href="" target="_blank" rel="noreferrer"></a></li>
              <li><a href="" target="_blank" rel="noreferrer"></a></li>
              <li><a href="" target="_blank" rel="noreferrer"></a></li>
              <li><a href="" target="_blank" rel="noreferrer"></a></li>
              <li><a href="" target="_blank" rel="noreferrer"></a></li>
              <li><a href="" target="_blank" rel="noreferrer"></a></li>
              <li><a href="" target="_blank" rel="noreferrer"></a></li>
              <li><a href="" target="_blank" rel="noreferrer"></a></li>
              <li><a href="" target="_blank" rel="noreferrer"></a></li>
              <li><a href="" target="_blank" rel="noreferrer"></a></li>
              <li><a href="" target="_blank" rel="noreferrer"></a></li>
              <li><a href="" target="_blank" rel="noreferrer"></a></li>
            </ul>
          </div>
        </div>
      </div><br /><br /><br />

      <p style={{ border: "1px solid #111", textAlign: "center" }}><strong><a href="https://www.w3schools.com/js/js_api_intro.asp" target="_blank" rel="noreferrer">APIs de terceiros</a></strong></p><br /><br />
      <p>APIs de terceiros não estão integradas ao seu navegador.</p><br />
      <p>Para usar essas APIs, você terá que baixar o código da Web.</p><br />
      <p>Exemplos:</p><br />
      <ul>
        <li>API do YouTube - Permite exibir vídeos em um site.</li>
        <li>API do Twitter - Permite exibir Tweets em um site.</li>
        <li>API do Facebook - Permite exibir informações do Facebook em um site.</li>
      </ul><br /><br /><br />

      <p style={{ border: "1px solid #111", textAlign: "center" }}><strong><a href="https://www.w3schools.com/js/js_api_fetch.asp" target="_blank" rel="noreferrer">Fetch API</a></strong></p><br /><br />
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100px", backgroundColor: "#D9EEE1" }}>
        <div>
          <p>A interface Fetch API permite que o navegador da web faça solicitações HTTP para servidores da web.</p><br />
          <font style={{ verticaAlign: "inherit" }}>😀 Não há mais necessidade de <strong>XMLHttpRequest</strong>.</font>
        </div>
      </div>
    </>

  )
}

export default ApiIntroducao