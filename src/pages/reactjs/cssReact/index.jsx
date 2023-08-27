import cssInReact from "../../../assets/cssInReact.png"
import cssModulo from "../../../assets/cssModulo.png"
import cssModuleImport from "../../../assets/cssModuleImport.png"

const EstilizacaoCSS = () => {
  return (
    <>
      <h1 style={{marginTop: "25px"}}>Objeto JavaScript</h1><br />
      <p><strong>Estilo embutido</strong></p>
      <p>Você também pode criar um objeto com informações de estilo e fazer referência a ele no atributo style:</p><br />

      <img width="100%" src={cssInReact}></img><br /><br /><br /><br /><br /><br /><br />
      <img width="100%" src={cssModulo}></img>
      <img width="100%" src={cssModuleImport}></img><br />
      <strong><a href="https://dev.to/gmantovani97/porque-utilizar-css-modules-no-react-1a93">Referência</a></strong>
    </>
  )
}

export default EstilizacaoCSS