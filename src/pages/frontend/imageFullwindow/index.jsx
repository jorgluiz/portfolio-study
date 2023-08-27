import { useState, useContext } from "react";
import { imgContext } from "../../../ui/components/contexts/fullScreen" // context

import { Container, Img1 } from "./styles"
import styles from "./css.module.css"
import { imgData } from "../../../data/mock/img";

const ImageList = () => {

    return (
        <Container>
            {HandleImage()}
        </Container>
    )
}

// component
const HandleImage = () => {
    const { getIDstateFN } = useContext(imgContext) // useContext
    const [imgList, SetImgList] = useState(imgData) // list images
    const [activeimg, SetActiveimg] = useState(true) // enable image to enlarge with one click

    const handleState = (id, imgList) => { // context
        getIDstateFN(id, activeimg, imgList)
    }

    const handleDelete = (id) => { // deletando um arquivo específico
        SetImgList(imgList.filter((elemento) => elemento.id !== id))
    }



    return imgList.map((element, index) => {
        return (
            <>
                <Img1 key={element.id} onClick={() => handleState(element.id, imgList)} src={element.img} alt="not image"></Img1>
                <button className={styles.closed} type="button" onClick={() => handleDelete(element.id)}>X</button>
            </>
        )
    })
}


export default ImageList;