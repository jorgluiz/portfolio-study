import { Container} from "./styles"

const Right = () => {

    return (
        <Container>

        </Container>
    )
}

export default Right


// import React, { useState } from "react"
// import { Container, Span } from "./styles"

// import { ReactRoutes, HookRoutes } from "../../Utils/Routes"
// import FadeInDown from "../../Styles/NavStyle"

// const Left = () => {
//     const [isSelectedHook, setIsSelectedHook] = useState('');
//     const [isSelectedHookSub, setIsSelectedHookSub] = useState('');

//     // const handleClick = (e) => {
//     //     setIsSelected(e.currentTarget.textContent)
//     // }

//     const [openDropdownHook, setOpenDropdownHook] = useState(true)
//     const [openDropdownHookSub, setOpenDropdownHookSub] = useState(true)

//     const isOpenHook = openDropdownHook
//     const isOpenHookSub = openDropdownHookSub

//     return (
//         <Container>
//             <NavbarLinkContainer style={{ display: "flex", flexDirection: "column" }}>
//                 <NavbarLink isCursor={"blue"} to="/front-end/css">
//                     CSS
//                 </NavbarLink>
//                 <NavbarLink isCursor={"blue"} to="/front-end/StyledComponents">
//                     Styled <br />Components
//                 </NavbarLink>
//                 <NavbarLink isCursor={"blue"} to="/front-end/html">
//                     HTML
//                 </NavbarLink>

//                 <Button onClick={() => (openDropdownHook ? setOpenDropdownHook(false) : setOpenDropdownHook(true))}>
//                     <NavLabelContainer>
//                         <span style={{ color: "#323233" }}>React</span>
//                         <ArrowContainer isOpenHook={isOpenHook}>
//                             <ArrowIcon />
//                         </ArrowContainer>
//                     </NavLabelContainer>
//                 </Button>

//                 {isOpenHook &&
//                     <FadeInDown duration="0.8s" delay="0.2s">
//                         {ReactRoutes.map((item, index) => {
//                             return (
//                                 <Container style={{ justifyContent: "space-between" }}>
//                                     <ul>
//                                         <li key={index}>
//                                             <NavbarLink isSubLink={true} to={item.path}>
//                                                 {/* <Span  onClick={() => { setActive(state => !state) }} active={active}> {item.title} </Span> */}
//                                                 <Button onClick={(e) => (setIsSelectedHook(e.currentTarget.textContent))} isSelectedHook={isSelectedHook === item.title ? true : ''}>
//                                                     <Span >{item.title}</Span>
//                                                 </Button>
//                                             </NavbarLink>
//                                         </li>
//                                     </ul>
//                                 </Container>
//                             )
//                         })}
//                     </FadeInDown>
//                 }

//                 <Button onClick={() => (openDropdownHookSub ? setOpenDropdownHookSub(false) : setOpenDropdownHookSub(true))}>
//                     <NavLabelContainer>
//                         <span style={{ color: "#323233" }}>Hooks</span>
//                         <ArrowContainerSub isOpenHookSub={isOpenHookSub}>
//                             <ArrowIcon />
//                         </ArrowContainerSub>
//                     </NavLabelContainer>
//                 </Button>

//                 {isOpenHookSub &&
//                     <FadeInDown duration="0.8s" delay="0.2s">
//                         {HookRoutes.map((item, index) => {
//                             return (
//                                 <Container style={{ justifyContent: "space-between" }}>
//                                     <ul>
//                                         <li key={index}>
//                                             <NavbarLink isSubLink={true} to={item.path}>
//                                                 {/* <Span  onClick={() => { setActive(state => !state) }} active={active}> {item.title} </Span> */}
//                                                 {index + 1 + '.'}
//                                                 <Button onClick={(e) => (setIsSelectedHookSub(e.currentTarget.textContent))} isSelectedHookSub={isSelectedHookSub === item.title ? true : ''}>
//                                                     <Span >{item.title}</Span>
//                                                 </Button>
//                                             </NavbarLink>
//                                         </li>
//                                     </ul>
//                                 </Container>
//                             )
//                         })}
//                     </FadeInDown>
//                 }
//             </NavbarLinkContainer>
//             {/* <Outlet /> */}
//         </Container>
//     )
// }

// export default Left