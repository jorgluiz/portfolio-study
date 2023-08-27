import imgHooks from "../../../assets/hooks.png"

import { Container, H1, Div, Img} from "./styles"

const Hooks = () => {
    return (
        <Container>
            <p>Essa página descreve as APIs internas dos Hooks no React.</p><br />

            <p>Hooks Básicos:</p><br />
            <p> 
                useState<br />
                useEffect<br />
                useContext<br />    
            </p><br />

            <p>Hooks Adicionais:</p><br />
            <p>
                useReducer<br />
                useCallback<br />
                useMemo<br />
                useRef<br />
                useImperativeHandle<br />
                useLayoutEffect<br />
                useDebugValue<br />
            </p>

            <H1>Introdução aos Hooks</H1>

            <Div style={{ width: "100%" }}>
                <p>Hooks são uma nova adição ao React 16.8. Eles permitem que você use o state e outros recursos do React sem escrever uma classe.</p>
            </Div>

            <Img src={imgHooks} imgHooks={true} />
        </Container>
    )
}

export default Hooks