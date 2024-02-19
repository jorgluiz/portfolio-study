import { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Li, TextGradientTagA } from "./styles";
import styles from "./css.module.css"
import unirArrays from "../../../../assets/unirArrays.png"

import deleteElementArray from "../../../../assets/array/deleteElementArray.png";
import tiposVariaveis from "../../../../assets/variaveisTipos/tiposVariaveis.png"

const Left = () => {
  return (
    <Container>
      <h2 id="#top" style={{ marginLeft: "10px", marginBottom: "3px" }}>Tutorial JS</h2>
      <ul>
        <Li><a href="https://www.w3schools.com/js/js_intro.asp" target="_blank" rel="noopener noreferrer" >JS introduction</a></Li>
        <Li><a href="https://www.w3schools.com/js/js_whereto.asp" target="_blank" rel="noopener noreferrer" >JS Where To</a></Li>
        <Li><a href="https://www.w3schools.com/js/js_output.asp" target="_blank" rel="noopener noreferrer" >JS OutPut</a></Li>
        <Li><a href="https://www.w3schools.com/js/js_syntax.asp" target="_blank" rel="noopener noreferrer" >JS Syntax</a></Li>
        <Li><Link to="operators"><span style={{ backgroundColor: "#45ff1b", color: "black", borderRadius: "5%" }}>JS Operadores</span></Link></Li>
        <Li><a href="https://www.w3schools.com/js/js_functions.asp" target="_blank" rel="noopener noreferrer" >JS Funções </a></Li>
        <Li className="liRelative"><a href="https://www.w3schools.com/js/js_objects.asp" target="_blank" rel="noopener noreferrer" >JS Objetos </a>
          <tooltiptext className="tooltipObjetoTop">
            <p>Os objetos usam nomes para acessar seus valores.</p>
          </tooltiptext>
          <p style={{ marginLeft: "10px" }}><Link to="instancias">- Instância</Link></p>
        </Li>
        <Li><a href="https://www.w3schools.com/js/js_events.asp" target="_blank" rel="noopener noreferrer" >JS Events</a></Li>
        <Li><a href="https://www.w3schools.com/js/js_strings.asp" target="_blank" rel="noopener noreferrer" >JS Strings</a></Li>
        <Li tooltip={true}><a href="https://www.w3schools.com/js/js_string_methods.asp" target="_blank" rel="noopener noreferrer" ><span style={{ backgroundColor: "#1b90ff", color: "black" }}>Métodos de String</span></a> <tooltipe>funções</tooltipe></Li>
        <Li tooltip={true}><a href="https://www.w3schools.com/js/js_string_search.asp" target="_blank" rel="noopener noreferrer" ><span style={{ backgroundColor: "#1b90ff", color: "black" }}>Pesquisa de cadeia de caracteres</span></a><tooltipe>funções</tooltipe></Li>
        <Li><a href="https://www.w3schools.com/js/js_string_templates.asp" target="_blank" rel="noopener noreferrer" ><span style={{ backgroundColor: "#1b90ff", color: "black" }}>Template Literals</span></a></Li>
        <Li><a href="https://www.w3schools.com/js/js_numbers.asp" target="_blank" rel="noopener noreferrer" >Números</a></Li>
        <Li tooltip={true}><a href="https://www.w3schools.com/js/js_number_methods.asp" target="_blank" rel="noopener noreferrer" ><span style={{ backgroundColor: "#b31bff", color: "black" }}>Métodos numéricos</span></a><tooltipe>funções</tooltipe></Li>
        <Li tooltip={true} className={styles.imgArray}><a href="https://www.w3schools.com/js/js_arrays.asp" target="_blank" rel="noopener noreferrer"><strong>Arrays</strong></a>
          <h1>Matrizes são objetos</h1>
          <tooltiptext className="array-e-objeto">
            <p>Arrays são um tipo especial de objetos. O typeof operador em JavaScript retorna {"objeto"} para arrays.</p>
            <p>Arrays usam números para acessar seus {"elementos"}.</p>
          </tooltiptext>
        </Li>
        <img className={styles.unirDoisArrays} src={unirArrays}></img>
        <Li className="array-methods" tooltipimg={true} img={true}><a href="https://www.w3schools.com/js/js_array_methods.asp" target="_blank" rel="noopener noreferrer" ><span style={{ backgroundColor: "#ff6f1b", color: "black" }}>Array Methods</span></a><tooltipimg>funções</tooltipimg></Li>
        <img src={deleteElementArray}></img>
        <Li><a href="https://www.w3schools.com/js/js_array_sort.asp" target="_blank" rel="noopener noreferrer" ><span style={{ backgroundColor: "#ff6f1b", color: "black" }}>Array Sort</span></a></Li>
        <Li tooltip={true}><a href="https://www.w3schools.com/js/js_array_iteration.asp" target="_blank" rel="noopener noreferrer" ><span style={{ backgroundColor: "#ff6f1b", color: "black" }}>Array Iteration</span></a><tooltipe>callback</tooltipe></Li>
        <Li tooltip={true}><a href="https://www.w3schools.com/js/js_date_methods.asp" target="_blank" rel="noopener noreferrer" ><span style={{ backgroundColor: "#ff1b1b", color: "black" }}>obter métodos de data</span></a><tooltipe>funções</tooltipe></Li>
        <Li><a href="https://www.w3schools.com/js/js_math.asp" target="_blank" rel="noopener noreferrer" >Matemático</a></Li>
        <Li><a href="https://www.w3schools.com/js/js_random.asp" target="_blank" rel="noopener noreferrer" ><span style={{ backgroundColor: "#181717", color: "white" }}>Random</span></a></Li>
        <Li><a href="https://www.w3schools.com/js/js_switch.asp" target="_blank" rel="noopener noreferrer" >Switch</a></Li>
        <Li><a href="https://www.w3schools.com/js/js_loop_for.asp" target="_blank" rel="noopener noreferrer" style={{ backgroundColor: "#ffb3bb" }}>For Loop</a></Li>
        <Li><a href="https://www.w3schools.com/js/js_loop_forin.asp" target="_blank" rel="noopener noreferrer" style={{ backgroundColor: "#ffb3bb" }}>For <strong>In</strong> (value object)</a></Li>
        <Li tooltip={true} tooltip200px="200px"><a href="https://www.w3schools.com/js/js_loop_forof.asp" target="_blank" rel="noopener noreferrer" style={{ backgroundColor: "#ffb3bb" }}>For <strong>Of</strong> Loop</a><tooltipe>Ele permite que você percorra estruturas de dados iteráveis, como<br /> <strong>Arrays, Strings, Maps, NodeLists</strong> e muito mais:</tooltipe></Li>
        <Li><a href="https://www.w3schools.com/js/js_random.asp" target="_blank" rel="noopener noreferrer" style={{ backgroundColor: "#ffffcc" }}>interromper e continuar</a></Li>
        <Li><a href="https://www.w3schools.com/js/js_iterables.asp" target="_blank" rel="noopener noreferrer" style={{ backgroundColor: "#8a4c4c", color: "black" }}>Iterables</a></Li>
        <Li style={{ backgroundColor: "#0000a0" }}><a style={{ color: "white" }} href="https://www.w3schools.com/js/js_maps.asp" target="_blank" rel="noopener noreferrer">Maps</a></Li>
        <Li className="typeof" img={true} style={{ backgroundColor: "#0a71c0" }}><a style={{ color: "white" }} href="https://www.w3schools.com/js/js_typeof.asp" target="_blank" rel="noopener noreferrer">typeof (tipo de dados)</a><img src={tiposVariaveis}></img></Li>
        <ul style={{ backgroundColor: "#0a71c0", margin: "7px 0 7px 0" }}>
          <li>
            <Link to="types" onClick={() => window.scrollTo(0, 0)} style={{ color: "white" }}>Como reconhecer uma matriz ( type )</Link>
          </li>
        </ul>
        <Li style={{ backgroundColor: "#0a71c0" }}><a style={{ color: "white" }} href="https://www.w3schools.com/js/js_type_conversion.asp" target="_blank" rel="noopener noreferrer" >Conversão de tipo</a></Li>
        <Li style={{ backgroundColor: "#f6ff00" }}><a style={{ color: "#000000" }} href="https://www.w3schools.com/js/js_regexp.asp" target="_blank" rel="noopener noreferrer">RegExp<br />  (Expressões Regulares)</a></Li>
        <Li style={{ backgroundColor: "#ff00ea" }}><a href="https://www.w3schools.com/js/js_precedence.asp" target="_blank" rel="noopener noreferrer" style={{ color: "white" }}>Precedência do Operador</a></Li>
        <Li style={{ backgroundColor: "#30007c" }} tooltip={true} tooltip200px="200px"><a style={{ color: "white" }} href="https://www.w3schools.com/js/js_errors.asp" target="_blank" rel="noopener noreferrer" >Errors</a><tooltipe><p style={{ wordWrap: "break-word", color: "#b1b1b1" }}>Throw, <br /> and Try...Catch... Finally</p></tooltipe></Li>
        <Li style={{ backgroundColor: "#00fff7" }}><a href="https://www.w3schools.com/js/js_scope.asp" target="_blank" rel="noopener noreferrer" >Scope</a></Li>
        <Li><a href="https://www.w3schools.com/js/js_hoisting.asp" target="_blank" rel="noopener noreferrer" style={{ fontWeight: "700" }}>Içamento</a></Li>
        <Li><a href="https://www.w3schools.com/js/js_this.asp" target="_blank" rel="noopener noreferrer" style={{ fontWeight: "700" }}>this</a></Li>
        <Li><a href="https://www.w3schools.com/js/js_arrow_function.asp" target="_blank" rel="noopener noreferrer" style={{ fontWeight: "700" }}>Arrow Function</a></Li>
        <Li><a href="https://www.w3schools.com/js/js_classes.asp" target="_blank" rel="noopener noreferrer" style={{ fontWeight: "700" }}>classe</a></Li>
        <Li><a href="https://www.w3schools.com/js/js_modules.asp" target="_blank" rel="noopener noreferrer" style={{ fontWeight: "700" }}>Módulos</a></Li>
        <Li tooltip={true} tooltip200px="200px"><a href="https://www.w3schools.com/js/js_debugging.asp" target="_blank" rel="noopener noreferrer" style={{ fontWeight: "700" }}>Debugging</a><tooltipe>Depuração </tooltipe></Li>
        <Li><TextGradientTagA href="https://www.w3schools.com/js/js_conventions.asp" target="_blank" rel="noopener noreferrer" style={{ fontWeight: "700" }}>Boas práticas recomendadas  01</TextGradientTagA></Li>
        <Li><TextGradientTagA href="https://www.w3schools.com/js/js_best_practices.asp" target="_blank" rel="noopener noreferrer" style={{ fontWeight: "700" }}>Boas práticas recomendadas  02</TextGradientTagA></Li>
        <Li><a href="https://www.w3schools.com/js/js_random.asp" target="_blank" rel="noopener noreferrer" style={{ fontWeight: "700" }}>Performance</a></Li>
      </ul>

      <h2 style={{ margin: "20px 0 3px 10px" }}>Function JS</h2>
      <ul>
        <Li><a href="https://www.w3schools.com/js/js_function_definition.asp" target="_blank" rel="noopener noreferrer" >Function Definitions</a></Li>
        <Li parameters={true}><a href="https://www.w3schools.com/js/js_function_parameters.asp" target="_blank" rel="noopener noreferrer" >Function Parameters</a></Li>
        <Link to="tipos-dados-arguments" ><p onClick={() => window.scroll(0, 0)} style={{ marginLeft: "20px", color: "red" }}>tipos dados Arguments</p></Link>
        <Li><a href="https://www.w3schools.com/js/js_function_invocation.asp" target="_blank" rel="noopener noreferrer">Function Invocation</a></Li>
      </ul>
      <h2 style={{ margin: "20px 0 3px 10px" }}>Async JS</h2>
      <ul className={styles.promise}>
        <Li><a href="https://www.w3schools.com/js/js_callback.asp" target="_blank" rel="noopener noreferrer">Callbacks</a></Li>
        <Li><a href="https://www.w3schools.com/js/js_asynchronous.asp" target="_blank" rel="noopener noreferrer">Asynchronous</a></Li>
        <Li><a href="https://www.w3schools.com/js/js_promise.asp" target="_blank" rel="noopener noreferrer">Promises</a></Li>
        <ul style={{ marginLeft: "10px", fontSize: "15px" }}>
          <li><a href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Promise/all">Promise.all()</a></li>
          <li><a href="https://pt.stackoverflow.com/questions/446251/quais-as-diferen%C3%A7as-entre-promise-all-e-promise-allsettled">Promise.all() List</a></li>
        </ul>
        <Li><a href="https://www.w3schools.com/js/js_async.asp" target="_blank" rel="noopener noreferrer">Async</a></Li>
      </ul>

      <h2 style={{ margin: "20px 0 3px 10px" }}>HTML DOM JS</h2>
      <ul>
        <Li><a href="https://www.w3schools.com/js/js_htmldom.asp" target="_blank" rel="noopener noreferrer">Dom Intro</a></Li>
        <Li><a href="https://www.w3schools.com/js/js_htmldom_methods.asp" target="_blank" rel="noopener noreferrer">DOM Methods</a></Li>
        <Li><a href="https://www.w3schools.com/js/js_htmldom_document.asp" target="_blank" rel="noopener noreferrer">DOM Document</a></Li>
        <Li><a href="https://www.w3schools.com/js/js_htmldom_elements.asp" target="_blank" rel="noopener noreferrer">DOM Elements</a></Li>
        <Li><a href="https://www.w3schools.com/js/js_htmldom_html.asp" target="_blank" rel="noopener noreferrer">DOM Changing HTM</a></Li>
        <Li><a href="https://www.w3schools.com/js/js_validation.asp" target="_blank" rel="noopener noreferrer">DOM Forms</a></Li>
        <Li><a href="https://www.w3schools.com/js/js_htmldom_animate.asp" target="_blank" rel="noopener noreferrer">DOM Animation</a></Li>
        <Li><a href="https://www.w3schools.com/js/js_htmldom_events.asp" target="_blank" rel="noopener noreferrer">DOM Events</a></Li>
        <Li><a href="https://www.w3schools.com/js/js_htmldom_eventlistener.asp" target="_blank" rel="noopener noreferrer">DOM EventListener</a></Li>
        <Li><a href="https://www.w3schools.com/js/js_htmldom_navigation.asp" target="_blank" rel="noopener noreferrer">DOM Navigation</a></Li>
        <Li><a href="https://www.w3schools.com/js/js_htmldom_nodes.asp" target="_blank" rel="noopener noreferrer">DOM Elements (Nodes)</a></Li>
        <Li><a href="https://www.w3schools.com/js/js_htmldom_collections.asp" target="_blank" rel="noopener noreferrer">DOM Collections</a></Li>
        <Li><a href="https://www.w3schools.com/js/js_htmldom_nodelist.asp" target="_blank" rel="noopener noreferrer">DOM Node Lists</a></Li>
      </ul>

      <h2 style={{ margin: "20px 0 3px 10px" }}>API Web JS</h2>
      <ul>
        <Li><a href="https://www.w3schools.com/js/js_api_intro.asp" target="_blank" rel="noopener noreferrer">Introduction</a></Li>
        <Li><a href="https://www.w3schools.com/js/js_validation_api.asp" target="_blank" rel="noopener noreferrer">Validation API</a></Li>
        <Li><a href="https://www.w3schools.com/js/js_api_history.asp" target="_blank" rel="noopener noreferrer">History API</a></Li>
        <Li><a href="https://www.w3schools.com/js/js_api_web_storage.asp" target="_blank" rel="noopener noreferrer">Storage  API</a></Li>
        <Li><a href="https://www.w3schools.com/js/js_api_web_workers.asp" target="_blank" rel="noopener noreferrer">Workers   API</a></Li>
        <Li><a href="https://www.w3schools.com/js/js_api_fetch.asp" target="_blank" rel="noopener noreferrer">Fetch    API</a></Li>
        <Li><a href="https://www.w3schools.com/js/js_api_geolocation.asp" target="_blank" rel="noopener noreferrer">Geolocation     API</a></Li>
      </ul>
    </Container>
  )
}

export default Left

// style={{backgroundImage: "linear-gradient(to right, red, yellow)"}}