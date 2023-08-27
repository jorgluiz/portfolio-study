import PropTypes from 'prop-types';
import { ContainerBtn } from "./styles"

export const Button = ({ onClick, children}) => {

    return <ContainerBtn onClick={onClick}>{children}</ContainerBtn> 
}

// prop-typesmódulo ou definir todos os tipos de prop para um determinado componente.
Button.propTypes = {
    children: PropTypes.node,
    onClick:  PropTypes.func,
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