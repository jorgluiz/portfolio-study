import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Container, DropDown, DropDownContentUl } from "./styles";
// import style from "./css.module.css"
import "./css.css";

const HeaderMain = () => {
  useEffect(() => {
    const tagA = document.querySelectorAll(".ul-header-main li a");
    for (let i = 0; i < tagA.length; i++) {
      tagA[i].addEventListener("mouseenter", () => {
        tagA[i].setAttribute("class", "gridHeaderMainTagA")
      });
      tagA[i].addEventListener("mouseleave", () => {
        tagA[i].removeAttribute("class");
      });
    }
  }, []);

  return (
    <Container>
      <ul className="ul-header-main">
      <li>
          <Link to="/banco-de-dados">Banco de dados</Link>
        </li>
        <li className="li-back-end">
          <Link to="/back-end">Back-end</Link>
          <li>
            <Link to="/arquitetura-node-js-entenda-loop-de-eventos">
              event loop
            </Link>
          </li>
        </li>
        <li>
          <Link to="/front-end">Front-end</Link>
        </li>
        <li>
          <Link to="/react-js">ReactJS</Link>
        </li>
        <li>
          <Link to="/java-script">JavaScript</Link>
        </li>
        <li>
          <Link to="/skills">Skills</Link>
        </li>
        <li>
          <Link to="/next-js">Next.JS</Link>
        </li>
        <li>
          <Link to="/sites-pesquisa">Sites</Link>
        </li>
        <DropDown>
          +
          <DropDownContentUl>
            <li>
              <Link to={"/conteudos-new-skills"}>Conteudos</Link>
            </li>
            <li>
              <Link to={"/git-hub"}>Github</Link>
            </li>
            <li>
              <Link to={"projetos"}>????????</Link>
            </li>
            <li>
              <Link to={"seguranca"}>????????</Link>
            </li>
          </DropDownContentUl>
        </DropDown>
      </ul>
    </Container>
  );
};

export default HeaderMain;
