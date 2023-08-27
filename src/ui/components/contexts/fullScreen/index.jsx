import { useState, createContext } from "react"

export const imgContext = createContext()

export const ImgProvider = ({ children }) => {
    const [enlargeImgID, SetEnlargeImgID] = useState()
    const [activeDisplay, SetactiveDisplay] = useState(false)
    const [arrayIMG, setarrayIMG] = useState()

    // Função para obter IDimg e boolean (css.jsx)
    const getIDstateFN = (idTarget, activeimg, imgList) => {
        SetactiveDisplay(activeimg)
        SetEnlargeImgID(idTarget)
        setarrayIMG(imgList)
    }
    return (
        <>
            <imgContext.Provider value={{ enlargeImgID, activeDisplay, SetactiveDisplay, arrayIMG, getIDstateFN }}>
                {children}
            </imgContext.Provider>
        </>
    )
}

export default ImgProvider