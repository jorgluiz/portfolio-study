import { useContext } from "react"
import { imgContext } from "../../contexts/fullScreen"
import { useEffect } from "react"
import { useLocation } from "react-router-dom"
import { imgData } from "../../../../data/mock/img"

import Header from "../gridHeader"
import HeaderMain from "../gridHeaderMain"
import Main from "../gridMain"

import { Grid } from "./styles"
import styles from "./css.module.css"

const GridLayout = ({ children }) => {
    const { enlargeImgID, activeDisplay, SetactiveDisplay, arrayIMG } = useContext(imgContext) //useContext

    const location = useLocation()

    useEffect(() => {
        if (location.pathname !== "/front-end/image-full-window") SetactiveDisplay(false) // caso a imagem esteja aberta e o usuário clique em voltar, a imagem é fechada
    })

    return (
        <>
            {activeDisplay &&
                arrayIMG.map((el, i) => {
                    console.log(imgData, "imgData")
                    return (
                        <div onClick={() => SetactiveDisplay(false)} key={i} style={{ display: "flex", justifyContent: "center", marginTop: "25px", width: "100%", position: "absolute", zIndex: "1000" }}>
                            {el.id === enlargeImgID && <img src={el.img} className={styles.img}/>}
                        </div>
                    )
                })}
            {activeDisplay &&
                <div style={{ height: "100vh", width: "100%", position: "absolute", opacity: "0.5", backgroundColor: "black" }} />
            }
            <Grid activeDisplay={activeDisplay}>
                <Header />
                <HeaderMain />
                <Main>
                    {children}
                </Main>
            </Grid>
        </>
    )
}

export default GridLayout