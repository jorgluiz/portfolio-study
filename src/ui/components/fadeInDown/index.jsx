import PropTypes from 'prop-types';
import { Container } from "./styles"

export const FadeInDown = ({ children, ...props }) => {
    const { duration, delay} = props
    // console.log(typeof(duration))

    return (
        <Container duration={duration} delay={delay}>
            {children}
        </Container>
    )
}

// prop-typesmódulo ou definir todos os tipos de prop para um determinado componente.
FadeInDown.propTypes = {
    children: PropTypes.node,
    duration:  PropTypes.string,
    delay: PropTypes.string,
  };

//   referencia: https://bobbyhadz.com/blog/react-eslint-error-missing-in-props-validation

// function MyComponent() {}

// MyComponent.propTypes = {
//   // Você pode declarar que um prop é um primitivo JS específico.
//   // Por padrão, todos são opcionais.
//   optionalArray: PropTypes.array,
//   optionalBigInt: PropTypes.bigint,
//   optionalBool: PropTypes.bool,
//   optionalFunc: PropTypes.func,
//   optionalNumber: PropTypes.number,
//   optionalObject: PropTypes.object,
//   optionalString: PropTypes.string,
//   optionalSymbol: PropTypes.symbol,
// }