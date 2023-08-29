import { useState } from "react"
import { Container, Progress, Dialog } from "./styles"
import styles from "./css.module.css"

// COMPONENT 
const Upload = () => {
    const [progressVideo, SetProgressVideo] = useState(0) // progressVideo
    const [previewVideo, SetPreviewVideo] = useState([{}]) // previewVideo
    const [loading, SetLoading] = useState([{}]) // loading

    const onReceiptsSelected = (e) => {
        // 1 opção para upLoad
        let files = e.target.files
        if (files.length > 0) {
            for (let i = 0; i < files.length; i++) {
                const receipt = files[i]
                readReceipt(receipt)
            }
        }
    }

    function readReceipt(receipt) {

        const reader = new FileReader()
        reader.readAsDataURL(receipt)
        // reader.readAsArrayBuffer(receipt)

        // fluxo 01
        reader.onloadstart = (e) => {
            // console.log(receipt, "receipt receipt")
            // SetProgressVideo(prev => prev.concat([{ name: receipt.name, progress: 0 }]))
        }
        // fluxo 02
        reader.onprogress = (e) => {
            // console.log(e, "onprogress")
            // console.log(receipt.name, e.loaded, e.total, e.lengthComputable, "onprogress")

            const completed = parseInt((e.loaded / e.total) * 100)
            SetProgressVideo(completed)
            // if (completed === 100) setNumber(prev => prev + 1)
            if (e.lengthComputable) {
                SetLoading(prev => {
                    return [{ ...prev, name: receipt.name, progress: completed }]
                })
            }

        }
        // fluxo final
        reader.onload = (e) => {
            console.log(e, "onloadend FIM")
            SetPreviewVideo(prevlist => [{ name: receipt.name, url: e.target.result, id: Math.floor(Math.random() * 100) }].concat(prevlist))
        }
    }

    // component VIDEOS
    const handleVideo = () => {
        return (
            <>
                {previewVideo.map((element, index) => {
                    return (
                        <div key={element.id} style={{ width: "400px" }}>
                            {element.url != undefined &&
                                <video width="400px" controls controlsList="nodownload">
                                    <source src={element.url}></source>
                                </video>
                            }
                            {/* {element.name === progressVideo.name  && <Progress progressVideo={progressVideo.progress}>{progressVideo.progress + "%"}</Progress>} */}
                        </div>
                    )
                })}
            </>
        )
        // })
    }


    return (
        <>
            {progressVideo === 0 ? null :
                <Dialog>
                    <div className="divDialog1">

                    </div>
                    <Progress progressVideo={progressVideo}></Progress>
                    <div className="divDialog2">

                        {loading.map((el, i) => {

                            return (
                                <ul key={i}>
                                    <li style={{ display: "flex", justifyContent: "space-around" }}>
                                        <span>{el.name}</span>
                                        {el.progress > 0 && <span>{`${el.progress === 100 ? "concluído" : el.progress + "% Aguardando"}`}</span>}
                                    </li>
                                </ul>
                            )
                        })}
                    </div>
                </Dialog>
            }
            <label className={styles.formLabel}>Upload videos
                <input type="file" onChange={(e) => onReceiptsSelected(e)} alt="" multiple accept="/*" />
            </label>
            <Container>
                {handleVideo()}
            </Container>
            {/* <button onClick={() => upImg()} style={{ background: "red" }}>up</button> */}
        </>
    )
}

export default Upload

// referencia
// https://codepen.io/vanessametonini/pen/zLmzNY
// https://www.javascripture.com/FileReader
//

// front e back
// https://www.youtube.com/watch?v=9kPDwoI4LiE&ab_channel=Celke
// https://backefront.com.br/como-fazer-upload-arquivo-react/#:~:text=Quando%20desenvolvemos%20formul%C3%A1rios%20em%20nossos,o%20que%20tiver%20que%20subir!

// https://stackoverflow.com/questions/40348570/uncaught-domexception-failed-to-execute-readasdataurl-on-filereader-the-ob
// https://medium.com/@miguelznunez/how-to-upload-and-display-multiple-images-with-javascript-93239e206034

// dropzon
// https://www.javascripttutorial.net/web-apis/javascript-filereader/

// introdução
// https://javascript.plainenglish.io/reading-files-via-javascript-in-the-browser-part-3-responding-to-filereader-errors-and-progress-458fce0a9f17

// https://stackoverflow.com/questions/23402187/multiple-files-upload-and-using-file-reader-to-preview
// https://contactmentor.com/file-upload-component-react-js/?expand_article=1
// https://www.youtube.com/watch?v=-7w2KtfiMEM&ab_channel=CodeWithYousaf
// https://blog.sw9.com.br/2019/02/14/html5-file-api-aula-4-de-6-monitorar-progresso-de-leitura-sw9/

// @@@@@@@  https://www.bezkoder.com/multiple-image-upload-react-js/                  #######
// @@@@@@@  https://blog.logrocket.com/using-filereader-api-preview-images-react/#    #######
