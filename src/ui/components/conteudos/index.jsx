import GridLayout from "../layout/gridLayout"
import { upLoadVideo } from "./uploadVideo"

const Conteudos = () => {

    return (
        <GridLayout>
            <h1>upLoad Vídeos</h1><br />
            {upLoadVideo.map(el => {
                return (
                    <>
                        <ul>
                            <li style={{margin: "10px 0 10px 20px"}}>
                                <a href={el.url}>{el.title}</a>
                            </li>
                        </ul>
                    </>
                )
            })}
        </GridLayout>
    )
}

export default Conteudos