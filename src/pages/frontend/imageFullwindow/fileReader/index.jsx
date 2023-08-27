import { useState } from "react"

const Upload = ({ imgList, SetImgList, SetVideoUpload, progressVideo, SetProgressVideo, SetPreviewVideo }) => {

    // const [selectedFiles, setSelectedFiles] = useState([]); // 2 opção para upLoad @@@@@@@@@@@@@@@@@@@@
    const [number, setNumber] = useState(0)

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
                SetPreviewVideo(prev => {
                    return [{ ...prev, name: receipt.name, progress: completed }]
                })
            }

        }
        //  // fluxo 03
        // reader.onload = (e) => {
        //     console.log(e.target.result, "onload")
        // }
        // fluxo fim

        reader.onload = (e) => {
            console.log(e, "onloadend FIM")
            // console.log(receipt.name, e.loaded, e.total, e.lengthComputable, "onloadend")
            // console.log(e.target.result.byteLength, "e.target.result.byteLength")
            SetVideoUpload(prevlist => [{ name: receipt.name, url: e.target.result, id: Math.floor(Math.random() * 100) }].concat(prevlist))
        }
        reader.readAsDataURL(receipt)
        // reader.readAsArrayBuffer(receipt)
    }

    // ___________________________________________________________________________________________________________________________________________________________________

    // 2 opção para upLoad @@@@@@@@@@@@@@@@@@@@
    // if (e.target.files) {
    //     // // Cada vez que você executa createObjectURL(), um novo objeto URL é criado, mesmo que você já tenha criado este objeto
    //     const filesArray = Array.from(e.target.files).map((file) => URL.createObjectURL(file));

    //     SetVideoUpload(prevImages => prevImages.concat(filesArray));

    //     // // O método estático URL.revokeObjectURL() anula uma URL que anteriormente foi criada pelo método URL.createObjectURL().
    //     Array.from(e.target.files).map((file) => URL.revokeObjectURL(file))
    // }
    // ___________________________________________________________________________________________________________________________________________________________________

    return (
        <>
            <label className="form-label">Upload arquivos
                <input type="file" onChange={(e) => onReceiptsSelected(e)} alt="" multiple accept="/*" />
            </label>
            <button onClick={() => upImg()} style={{ background: "red" }}>up</button>
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