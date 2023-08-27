import React, { useState, useEffect, useContext } from "react"

import Header from "../Header"
import HeaderMain from "../HeaderMain"
import Main from "../main"

import { ImgAmpliarContext } from "../../../components/contexts/ImgAmpliar" //useContext

import { Outlet, useLocation } from "react-router-dom"

import { Imgs } from "../../../Utils/Imgs"

import { Grid, ZoomImg} from "./styles"

const Layout = ({ children }) => {
    const [isChildren, setIsChildren] = useState()
    const [isOutlet, setIsOutLet] = useState(false)

    const { imgAmpliar02, SetImgAmpliar02, idImgSelected } = useContext(ImgAmpliarContext) //useContext

    const location = useLocation()

    useEffect(() => {
        if (location.pathname === "/" || location.pathname === "/git-hub" || location.pathname === "/seguranca") return setIsOutLet(true)

        if (location.pathname != "/") return setIsChildren(true)
    }, [])

    return (
        // fora do layout
        <>
            {imgAmpliar02 &&

                <>
                    <div style={{ height: "100vh", width: "100%", position: "absolute", opacity: "0.5", zIndex: "1", backgroundColor: "black", overflowY: "scroll" }}></div>
                    <ZoomImg>
                        <div style={{ display: "flex", justifyContent: "end", width: "100%", marginRight: "60px" }}>
                            <button onClick={() => (SetImgAmpliar02(false))} style={{ zIndex: "3", backgroundColor: "initial", color: "white", fontSize: "20px", cursor: "pointer" }}>X</button>
                        </div>
                            {Imgs.map((item, index) => {
                                if (idImgSelected === item.id) {
                                    return (
                                        item.Img
                                    )
                                }
                            })}
                    </ZoomImg>
                </>}

            <Grid>
            {/* LAYOUT */}
                <Header /> {/* Header */}
                <HeaderMain /> {/* HeaderMain */}
                {isChildren &&

                    <Main> {/* Main */}
                        {children}
                    </Main>}

                {isOutlet &&

                    <Main> {/* Main */}
                        <Outlet />
                    </Main>}
            </Grid>
            {/* LAYOUT */}
        </>
    )
}

export default Layout