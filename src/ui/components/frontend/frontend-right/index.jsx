import React, { useState } from "react"
import HandAnimation from "../../handAnimation"

import { DivAnimationBottom, DivAnimationRight, DivAnimationLeft, DivAnimationTop, DivAnimation } from "../../../styles/animationMovement"
import { NavbarLinkContainerUl, Li, LinkNavBar } from "../../../styles/navigation"
import { Aloading } from "../../../styles/animationLoading"
import { Container, A, Img, DropDownImg } from "./styles"
import { ToolTip } from "../../../styles/toolTip"

import home from "../../../../assets/dropDownImg/home.png"
import intro from "../../../../assets/dropDownImg/intro.png"
import syntax from "../../../../assets/dropDownImg/syntax.png"
import selectors from "../../../../assets/dropDownImg/selectors.png"
import howto from "../../../../assets/dropDownImg/how-to.png"
import comments from "../../../../assets/dropDownImg/comments.png"
import colors from "../../../../assets/dropDownImg/colors.png"
import background from "../../../../assets/dropDownImg/background.png"
import borders from "../../../../assets/dropDownImg/borders.png"
import margins from "../../../../assets/dropDownImg/margins.png"
import padding from "../../../../assets/dropDownImg/padding.png"
import heightwidth from "../../../../assets/dropDownImg/height-width.png"
import boxmodel from "../../../../assets/dropDownImg/boxmodel.png"
import outline from "../../../../assets/dropDownImg/outline.png"
import text from "../../../../assets/dropDownImg/text.png"
import fonts from "../../../../assets/dropDownImg/fonts.png"
import icons from "../../../../assets/dropDownImg/icons.png"
import links from "../../../../assets/dropDownImg/links.png"
import lists from "../../../../assets/dropDownImg/lists.png"
import tables from "../../../../assets/dropDownImg/tables.png"
import display from "../../../../assets/dropDownImg/display.png"
import maxwidth from "../../../../assets/dropDownImg/maxwidth.png"
import position from "../../../../assets/dropDownImg/position.png"
import overflow from "../../../../assets/dropDownImg/overflow.png"
import float from "../../../../assets/dropDownImg/float.png"
import inlineblock from "../../../../assets/dropDownImg/inline-block.png"
import align from "../../../../assets/dropDownImg/align.png"
import combinators from "../../../../assets/dropDownImg/combinators.png"
import pseudoclasses from "../../../../assets/dropDownImg/pseudo-classes.png"
import pseudoelement from "../../../../assets/dropDownImg/pseudo-element.png"
import opacity from "../../../../assets/dropDownImg/opacity.png"
import navbar from "../../../../assets/dropDownImg/navbar.png"
import dropdowns from "../../../../assets/dropDownImg/dropdowns.png"
import imagesprites from "../../../../assets/dropDownImg/image-sprites.png"
import forms from "../../../../assets/dropDownImg/forms.png"
import counters from "../../../../assets/dropDownImg/counters.png"
import websitelayout from "../../../../assets/dropDownImg/website-layout.png"
import units from "../../../../assets/dropDownImg/units.png"
import specificity from "../../../../assets/dropDownImg/specificity.png"
import mathfunction from "../../../../assets/dropDownImg/mathfunction.png"


const Right = () => {
    const [isOpenCssTutorial, setIsOpenCssTutorial] = useState(false)
    const [isOpenCssAdvanced, setIsOpenCssAdvanced] = useState(false)
    const [isOpenCssResponsive, setIsOpenCssResponsive] = useState(false)
    const [isOpenCssGrid, setIsOpenCssGrid] = useState(false)
    const [isOpenCssSASS, setIsOpenCssSASS] = useState(false)
    const [isOpenCssExamples, setIsOpenCssExamples] = useState(false)
    const [isOpenCssReference, setIsOpenCssReference] = useState(false)

    const [otherSelectors, SetOtherSelectors] = useState(true)

    return (
        <Container>
            <div className="container" style={{ display: "flex", justifyContent: "center", height: "0", marginBottom: "10px" }}>
                <span onClick={() => (isOpenCssTutorial ? setIsOpenCssTutorial(false) : setIsOpenCssTutorial(true))} style={{ cursor: "pointer", width: "100%" }} className="tutorial">CSS Tutorial
                <HandAnimation></HandAnimation>
                </span>
            </div>

            {isOpenCssTutorial &&
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <DropDownImg home={true}>
                        <A href="https://www.w3schools.com/css/default.asp" target="_blank" rel="noopener noreferrer" style={{ fontSize: "11px" }}>CSS Home</A>
                        <HandAnimation></HandAnimation>

                        <Img src={home} alt="clique torre" />
                    </DropDownImg>

                    <DropDownImg intro={true}>
                        <A href="https://www.w3schools.com/css/css_intro.asp" target="_blank" rel="noopener noreferrer" style={{ fontSize: "11px" }}>CSS Introduction</A>
                        <HandAnimation></HandAnimation>

                        <Img src={intro} alt="clique torre" />
                    </DropDownImg>

                    <DropDownImg syntax={true}>
                        <A href="https://www.w3schools.com/css/css_syntax.asp" target="_blank" rel="noopener noreferrer" style={{ fontSize: "11px" }}>CSS Syntax</A>
                        <HandAnimation></HandAnimation>

                        <Img src={syntax} alt="clique torre" />
                    </DropDownImg>

                    {/* ------------------------------------------------------------------------------- */}
                    <DropDownImg selectors={true}>
                        <A href="https://www.w3schools.com/css/css_selectors.asp" target="_blank" rel="noopener noreferrer" style={{ fontSize: "11px" }} red={true}>CSS Selectors</A>
                        <HandAnimation></HandAnimation>

                        <Img src={selectors} alt="clique torre" />
                    </DropDownImg>

                    <div style={{ display: "flex", justifyContent: "center", marginTop: "10px" }}>
                        <span onClick={() => (otherSelectors ? SetOtherSelectors(false) : SetOtherSelectors(true))} style={{ cursor: "pointer", fontSize: "15px" }}>other selectors</span>
                    </div>
                    {otherSelectors &&
                        <>
                            <A href="https://www.w3schools.com/css/css_combinators.asp" target="_blank" rel="noopener noreferrer" style={{ fontSize: "11px", marginBottom: "5px", marginLeft: "48px" }}>Combinators</A>
                            <A href="https://www.w3schools.com/css/css_pseudo_classes.asp" target="_blank" rel="noopener noreferrer" style={{ fontSize: "11px", marginBottom: "5px", marginLeft: "48px" }}>Pseudo-classes</A>
                            <A href="https://www.w3schools.com/css/css_pseudo_elements.asp" target="_blank" rel="noopener noreferrer" style={{ fontSize: "11px", marginBottom: "5px", marginLeft: "48px" }}>Pseudo-elements</A>
                            <A href="https://www.w3schools.com/css/css_attribute_selectors.asp" target="_blank" rel="noopener noreferrer" style={{ fontSize: "11px", marginBottom: "-5px", marginLeft: "48px" }}>Attribute Selectors</A>
                        </>}
                    {/* ------------------------------------------------------------------------------- */}
                    <DropDownImg howto={true}>
                        <A href="https://www.w3schools.com/css/css_howto.asp" target="_blank" rel="noopener noreferrer" style={{ fontSize: "11px" }}>CSS How To Add</A>

                        <Img src={howto} alt="clique torre" />
                    </DropDownImg>

                    <DropDownImg comments={true}>
                        <A href="https://www.w3schools.com/css/css_comments.asp" target="_blank" rel="noopener noreferrer" style={{ fontSize: "11px" }}>CSS Comments</A>

                        <Img src={comments} alt="clique torre" />
                    </DropDownImg>

                    <DropDownImg colors={true}>
                        <A href="https://www.w3schools.com/css/css_colors.asp" target="_blank" rel="noopener noreferrer" style={{ fontSize: "11px" }} red={true}>CSS Colors</A>

                        <Img src={colors} alt="clique torre" />
                    </DropDownImg>

                    <DropDownImg background={true}>
                        <A href="https://www.w3schools.com/css/css_background.asp" target="_blank" rel="noopener noreferrer" style={{ fontSize: "11px" }}>CSS Backgrounds</A>

                        <Img src={background} alt="clique torre" />
                    </DropDownImg>

                    <DropDownImg borders={true}>
                        <A href="https://www.w3schools.com/css/css_border.asp" target="_blank" rel="noopener noreferrer" style={{ fontSize: "11px" }}>CSS Borders</A>

                        <Img src={borders} alt="clique torre" />
                    </DropDownImg>

                    <DropDownImg margins={true}>
                        <A href="https://www.w3schools.com/css/css_margin.asp" target="_blank" rel="noopener noreferrer" style={{ fontSize: "11px" }}>CSS Margins</A>

                        <Img src={margins} alt="clique torre" />
                    </DropDownImg>

                    <DropDownImg padding={true}>
                        <A href="https://www.w3schools.com/css/css_padding.asp" target="_blank" rel="noopener noreferrer" style={{ fontSize: "11px" }}>CSS Padding</A>

                        <Img src={padding} alt="clique torre" />
                    </DropDownImg>

                    <DropDownImg heightwidth={true}>
                        <A href="https://www.w3schools.com/css/css_dimension.asp" target="_blank" rel="noopener noreferrer" style={{ fontSize: "11px" }}>CSS Height, Width</A>

                        <Img src={heightwidth} alt="clique torre" />
                    </DropDownImg>

                    <DropDownImg heightwidth={true}>
                        <A href="https://www.w3schools.com/css/css_dimension.asp" target="_blank" rel="noopener noreferrer" style={{ fontSize: "11px" }}>CSS Height, Width</A>

                        <Img src={heightwidth} alt="clique torre" />
                    </DropDownImg>

                    <DropDownImg boxmodel={true}>
                        <A href="https://www.w3schools.com/css/css_boxmodel.asp" target="_blank" rel="noopener noreferrer" style={{ fontSize: "11px" }}>CSS Box Model</A>

                        <Img src={boxmodel} alt="clique torre" />
                    </DropDownImg>

                    <DropDownImg outline={true}>
                        <A href="https://www.w3schools.com/css/css_outline.asp" target="_blank" rel="noopener noreferrer" style={{ fontSize: "11px" }}>CSS Outline</A>

                        <Img src={outline} alt="clique torre" />
                    </DropDownImg>

                    <DropDownImg text={true}>
                        <A href="https://www.w3schools.com/css/css_text.asp" target="_blank" rel="noopener noreferrer" style={{ fontSize: "11px" }}>CSS Text</A>

                        <Img src={text} alt="clique torre" />
                    </DropDownImg>

                    <DropDownImg fonts={true}>
                        <A href="https://www.w3schools.com/css/css_font.asp" target="_blank" rel="noopener noreferrer" style={{ fontSize: "11px" }}>CSS Fonts</A>

                        <Img src={fonts} alt="clique torre" />
                    </DropDownImg>

                    <DropDownImg icons={true}>
                        <A href="https://www.w3schools.com/css/css_icons.asp" target="_blank" rel="noopener noreferrer" style={{ fontSize: "11px" }}>CSS Icons</A>

                        <Img src={icons} alt="clique torre" />
                    </DropDownImg>

                    <DropDownImg links={true}>
                        <A href="https://www.w3schools.com/css/css_link.asp" target="_blank" rel="noopener noreferrer" style={{ fontSize: "11px" }}>CSS Links</A>

                        <Img src={links} alt="clique torre" />
                    </DropDownImg>

                    <DropDownImg lists={true}>
                        <A href="https://www.w3schools.com/css/css_list.asp" target="_blank" rel="noopener noreferrer" style={{ fontSize: "11px" }}>CSS Lists</A>

                        <Img src={lists} alt="clique torre" />
                    </DropDownImg>

                    <DropDownImg tables={true}>
                        <A href="https://www.w3schools.com/css/css_table.asp" target="_blank" rel="noopener noreferrer" style={{ fontSize: "11px" }}>CSS Tables</A>

                        <Img src={tables} alt="clique torre" />
                    </DropDownImg>

                    <DropDownImg display={true}>
                        <A href="https://www.w3schools.com/css/css_display_visibility.asp" target="_blank" rel="noopener noreferrer" style={{ fontSize: "11px" }}>CSS Layout - The display Property</A>

                        <Img src={display} alt="clique torre" />
                    </DropDownImg>

                    <DropDownImg maxwidth={true}>
                        <A href="https://www.w3schools.com/css/css_max-width.asp" target="_blank" rel="noopener noreferrer" style={{ fontSize: "11px" }} red={true}>CSS Layout - width and max-width</A>

                        <Img src={maxwidth} alt="clique torre" />
                    </DropDownImg>

                    <DropDownImg position={true}>
                        <A href="https://www.w3schools.com/css/css_positioning.asp" target="_blank" rel="noopener noreferrer" style={{ fontSize: "11px" }}>CSS Layout - The position Property</A>

                        <Img src={position} alt="clique torre" />
                    </DropDownImg>

                    <DropDownImg position={true}>

                        <A href="https://www.w3schools.com/css/css_z-index.asp" target="_blank" rel="noopener noreferrer" style={{ fontSize: "11px" }}>CSS Layout - The z-index Property</A>
                    </DropDownImg>

                    <DropDownImg overflow={true}>
                        <A href="https://www.w3schools.com/css/css_overflow.asp" target="_blank" rel="noopener noreferrer" style={{ fontSize: "11px" }} red={true}>CSS Layout - Overflow</A>

                        <Img src={overflow} alt="clique torre" />
                    </DropDownImg>

                    <DropDownImg float={true}>
                        <A href="https://www.w3schools.com/css/css_float.asp" target="_blank" rel="noopener noreferrer" style={{ fontSize: "11px" }}>CSS Layout - float and clear</A>

                        <Img src={float} alt="clique torre" />
                    </DropDownImg>

                    <DropDownImg inlineblock={true}>
                        <A href="https://www.w3schools.com/css/css_inline-block.asp" target="_blank" rel="noopener noreferrer" style={{ fontSize: "11px" }}>CSS Layout - display: inline-block</A>

                        <Img src={inlineblock} alt="clique torre" />
                    </DropDownImg>

                    <DropDownImg align={true}>
                        <A href="https://www.w3schools.com/css/css_align.asp" target="_blank" rel="noopener noreferrer" style={{ fontSize: "11px" }}>CSS Layout - Horizontal e Vertical Align</A>

                        <Img src={align} alt="clique torre" />
                    </DropDownImg>

                    <DropDownImg combinators={true}>
                        <A href="https://www.w3schools.com/css/css_combinators.asp" target="_blank" rel="noopener noreferrer" style={{ fontSize: "11px" }}>CSS Combinators</A>

                        <Img src={combinators} alt="clique torre" />
                    </DropDownImg>

                    <DropDownImg pseudoclasses={true}>
                        <A href="https://www.w3schools.com/css/css_pseudo_classes.asp" target="_blank" rel="noopener noreferrer" style={{ fontSize: "11px" }}>CSS Pseudo-classes</A>

                        <Img src={pseudoclasses} alt="clique torre" />
                    </DropDownImg>

                    <DropDownImg pseudoclasses={true}>
                        <A href="https://www.w3schools.com/css/css_pseudo_classes.asp" target="_blank" rel="noopener noreferrer" style={{ fontSize: "11px" }}>CSS Pseudo-classes</A>

                        <Img src={pseudoclasses} alt="clique torre" />
                    </DropDownImg>

                    <DropDownImg pseudoelement={true}>
                        <A href="https://www.w3schools.com/css/css_pseudo_elements.asp" target="_blank" rel="noopener noreferrer" style={{ fontSize: "11px" }}>CSS Pseudo-elements</A>

                        <Img src={pseudoelement} alt="clique torre" />
                    </DropDownImg>

                    <DropDownImg opacity={true}>
                        <A href="https://www.w3schools.com/css/css_image_transparency.asp" target="_blank" rel="noopener noreferrer" style={{ fontSize: "11px" }} red={true}>CSS Opacity / Transparency</A>

                        <Img src={opacity} alt="clique torre" />
                    </DropDownImg>

                    <DropDownImg navbar={true}>
                        <A href="https://www.w3schools.com/css/css_navbar.asp" target="_blank" rel="noopener noreferrer" style={{ fontSize: "11px" }}>CSS Navigation Bar</A>

                        <Img src={navbar} alt="clique torre" />
                    </DropDownImg>

                    <DropDownImg dropdowns={true}>
                        <A href="https://www.w3schools.com/css/css_dropdowns.asp" target="_blank" rel="noopener noreferrer" style={{ fontSize: "11px" }} red={true}>CSS Dropdowns</A>

                        <Img src={dropdowns} alt="clique torre" />
                    </DropDownImg>

                    <DropDownImg dropdowns={true}>

                        <A href="https://www.w3schools.com/css/css_image_gallery.asp" target="_blank" rel="noopener noreferrer" style={{ fontSize: "11px" }}>CSS Image Gallery</A>
                    </DropDownImg>

                    <DropDownImg imagesprites={true}>
                        <A href="https://www.w3schools.com/css/css_image_sprites.asp" target="_blank" rel="noopener noreferrer" style={{ fontSize: "11px" }}>CSS Image Sprites</A>

                        <Img src={imagesprites} alt="clique torre" />
                    </DropDownImg>

                    <DropDownImg imagesprites={true}>

                        <A href="https://www.w3schools.com/css/css_attribute_selectors.asp" target="_blank" rel="noopener noreferrer" style={{ fontSize: "11px" }}>CSS Attribute Selectors</A>
                    </DropDownImg>

                    <DropDownImg forms={true}>
                        <A href="https://www.w3schools.com/css/css_form.asp" target="_blank" rel="noopener noreferrer" style={{ fontSize: "11px" }} red={true}>CSS Forms</A>

                        <Img src={forms} alt="clique torre" />
                    </DropDownImg>

                    <DropDownImg counters={true}>
                        <A href="https://www.w3schools.com/css/css_counters.asp" target="_blank" rel="noopener noreferrer" style={{ fontSize: "11px" }}>CSS Counters</A>

                        <Img src={counters} alt="clique torre" />
                    </DropDownImg>

                    <DropDownImg websitelayout={true}>
                        <A href="https://www.w3schools.com/css/css_website_layout.asp" target="_blank" rel="noopener noreferrer" style={{ fontSize: "11px" }} red={true}>Website Layout</A>

                        <Img src={websitelayout} alt="clique torre" />
                    </DropDownImg>

                    <DropDownImg websitelayout={true}>
                        <A href="https://www.w3schools.com/css/css_website_layout.asp" target="_blank" rel="noopener noreferrer" style={{ fontSize: "11px" }}>Website Layout</A>

                        <Img src={websitelayout} alt="clique torre" />
                    </DropDownImg>

                    <DropDownImg units={true}>
                        <A href="https://www.w3schools.com/css/css_units.asp" target="_blank" rel="noopener noreferrer" style={{ fontSize: "11px" }}>CSS Units</A>

                        <Img src={units} alt="clique torre" />
                    </DropDownImg>

                    <DropDownImg specificity={true}>
                        <A href="https://www.w3schools.com/css/css_specificity.asp" target="_blank" rel="noopener noreferrer" style={{ fontSize: "11px" }}>CSS Specificity</A>

                        <Img src={specificity} alt="clique torre" />
                    </DropDownImg>

                    <DropDownImg>

                        <A href="https://www.w3schools.com/css/css_important.asp" target="_blank" rel="noopener noreferrer" style={{ fontSize: "11px" }}>CSS The !important Rule</A>
                    </DropDownImg>

                    <DropDownImg mathfunction={true}>
                        <A href="https://www.w3schools.com/css/css_math_functions.asp" target="_blank" rel="noopener noreferrer" style={{ fontSize: "11px" }} red={true}>CSS Math Functions</A>

                        <Img src={mathfunction} alt="clique torre" />
                    </DropDownImg>
                </div>}


            {/* ------------------------------------       ----------------------------------------------------- */}

            <div style={{ display: "flex", justifyContent: "center", height: "0", marginBottom: "25px", marginTop: "10px" }}>
                <span onClick={() => (isOpenCssAdvanced ? setIsOpenCssAdvanced(false) : setIsOpenCssAdvanced(true))} style={{ cursor: "pointer", width: "100%" }} className="advanced">CSS Advanced
                <HandAnimation></HandAnimation>
                </span>
            </div>

            {isOpenCssAdvanced &&
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <A href="https://www.w3schools.com/css/css3_borders.asp" target="_blank" className="css-advanced" rel="noopener noreferrer" style={{ fontSize: "11px" }}>CSS Rounded Corners</A>
                    <A href="https://www.w3schools.com/css/css3_border_images.asp" target="_blank" className="css-advanced" rel="noopener noreferrer" style={{ fontSize: "11px" }}>CSS Border Images</A>
                    <A href="https://www.w3schools.com/css/css3_backgrounds.asp" target="_blank" className="css-advanced" rel="noopener noreferrer" style={{ fontSize: "11px" }}>CSS Multiple Backgrounds</A>
                    <A href="https://www.w3schools.com/css/css3_colors.asp" target="_blank" className="css-advanced" rel="noopener noreferrer" style={{ fontSize: "11px" }} redBackGround={true}>CSS Colors %</A>
                    <A href="https://www.w3schools.com/css/css_colors_keywords.asp" target="_blank" className="css-advanced" rel="noopener noreferrer" style={{ fontSize: "11px" }} >CSS Color Keywords</A>
                    <A href="https://www.w3schools.com/css/css3_gradients.asp" target="_blank" className="css-advanced" rel="noopener noreferrer" style={{ backgroundColor: "purple", color: "white", fontSize: "11px"}}>CSS Gradients</A>
                    <A href="https://www.w3schools.com/css/css3_shadows.asp" target="_blank" className="css-advanced" rel="noopener noreferrer" style={{ fontSize: "11px" }} >CSS Shadow Effects</A>
                    <A href="https://www.w3schools.com/css/css3_text_effects.asp" target="_blank" className="css-advanced" rel="noopener noreferrer" style={{ fontSize: "11px" }} >CSS Text Effects</A>
                    <A href="https://www.w3schools.com/css/css3_fonts.asp" target="_blank" className="css-advanced" rel="noopener noreferrer" style={{ fontSize: "11px" }}>CSS Web Fonts</A>
                    <A href="https://www.w3schools.com/css/css3_2dtransforms.asp" target="_blank" className="css-advanced" rel="noopener noreferrer" style={{ fontSize: "11px", textAlign: "center" }} redBackGround={true}> 2D Transforms</A>
                    <A href="https://www.w3schools.com/css/css3_3dtransforms.asp" target="_blank" className="css-advanced" rel="noopener noreferrer" style={{ fontSize: "11px", textAlign: "center" }} redBackGround={true}> 3D Transforms</A>
                    <A href="https://www.w3schools.com/css/css3_transitions.asp" target="_blank" className="css-advanced" rel="noopener noreferrer" style={{ fontSize: "11px", textAlign: "center" }} redBackGround={true}> Transições CSS</A>
                    <A href="https://www.w3schools.com/css/css3_animations.asp" target="_blank" className="css-advanced" rel="noopener noreferrer" style={{ fontSize: "11px", textAlign: "center" }} redBackGround={true}> Animations</A>
                    <A href="https://www.treinaweb.com.br/blog/css-aprenda-a-criar-o-efeito-de-flip-cards#:~:text=No%20CSS%20n%C3%B3s%20indicamos%20a,com%20a%20propriedade%20de%20perspectiva." className="css-advanced" target="_blank" style={{ fontSize: "15px", textAlign: "center" }}>Efeito de Flip Cards</A>
                    <ToolTip>
                        <A href="https://www.w3schools.com/css/css_tooltip.asp" target="_blank" rel="noopener noreferrer" style={{ fontSize: "11px" }} redBackGround={true}>CSS Tooltip</A>
                        <span>Link aqui</span>
                        <p style={{ display: "inline", fontSize: "11px" }}> (passe o mause aqui)</p>
                    </ToolTip>
                    <A href="https://www.w3schools.com/css/css3_images.asp" target="_blank" className="css-advanced" rel="noopener noreferrer" style={{ fontSize: "11px" }} redBackGround={true}>CSS Styling Images</A>
                    <A href="https://www.w3schools.com/css/css3_image_reflection.asp" target="_blank" className="css-advanced" rel="noopener noreferrer" style={{ fontSize: "11px" }}>CSS Image Reflection</A>
                    <A href="https://www.w3schools.com/css/css3_object-fit.asp" target="_blank" className="css-advanced" rel="noopener noreferrer" style={{ fontSize: "11px" }}>CSS Image Reflection</A>
                    <A href="https://www.w3schools.com/css/css3_object-position.asp" target="_blank" className="css-advanced" rel="noopener noreferrer" style={{ fontSize: "11px" }}>CSS The object-position Property</A>
                    <A href="https://www.w3schools.com/css/css3_masking.asp" target="_blank" className="css-advanced" rel="noopener noreferrer" style={{ fontSize: "11px" }} redBackGround={true}>CSS Masking</A>
                    <A href="https://www.w3schools.com/css/css3_buttons.asp" target="_blank" className="css-advanced" rel="noopener noreferrer" style={{ fontSize: "11px" }} redBackGround={true}>CSS Buttons</A>
                    <A href="https://www.w3schools.com/css/css3_pagination.asp" target="_blank" className="css-advanced" rel="noopener noreferrer" style={{ fontSize: "11px" }}>CSS Pagination Examples</A>
                    <A href="https://www.w3schools.com/css/css3_multiple_columns.asp" target="_blank" className="css-advanced" rel="noopener noreferrer" style={{ fontSize: "11px" }}>CSS Multiple Columns</A>
                    <A href="https://www.w3schools.com/css/css3_user_interface.asp" target="_blank" className="css-advanced" rel="noopener noreferrer" style={{ fontSize: "11px" }}>CSS User Interface</A>
                    <A href="https://www.w3schools.com/css/css3_variables.asp" target="_blank" className="css-advanced" rel="noopener noreferrer" style={{ fontSize: "11px" }}>CSS Variables - The var() Function</A>
                    <A href="https://www.w3schools.com/css/css3_box-sizing.asp" target="_blank" className="css-advanced" rel="noopener noreferrer" style={{ fontSize: "11px" }}>CSS Box Sizing</A>
                    <A href="https://www.w3schools.com/css/css3_mediaqueries.asp" target="_blank" className="css-advanced" rel="noopener noreferrer" style={{ fontSize: "11px" }} redBackGround={true}>CSS Media Queries</A>
                    <A href="https://www.w3schools.com/css/css3_mediaqueries_ex.asp" target="_blank" className="css-advanced" rel="noopener noreferrer" style={{ fontSize: "11px" }} purple={true}>CSS Media Queries - Flexible Image Gallery</A>
                    <A href="https://www.w3schools.com/css/css3_flexbox.asp" target="_blank" className="css-advanced" rel="noopener noreferrer" style={{ fontSize: "11px" }} redBackGroundOpacity={true}>CSS Flexbox</A>
                </div>}

            {/* ------------------------------------       ----------------------------------------------------- */}

            <div style={{ display: "flex", justifyContent: "center", height: "0", marginBottom: "25px" }}>
                <span onClick={() => (isOpenCssResponsive ? setIsOpenCssResponsive(false) : setIsOpenCssResponsive(true))} style={{ cursor: "pointer", width: "100%" }} className="responsive">CSS Responsive
                <HandAnimation></HandAnimation>
                </span>
            </div>

            {isOpenCssResponsive &&

                <DivAnimation style={{ display: "flex", flexDirection: "column" }}>
                    <A href="https://www.w3schools.com/css/css_rwd_intro.asp" target="_blank" className="css-responsive" rel="noopener noreferrer" style={{ fontSize: "11px" }}>Responsive Web Design</A>
                    <A href="https://www.w3schools.com/css/css_rwd_viewport.asp" target="_blank" className="css-responsive" rel="noopener noreferrer" style={{ fontSize: "11px" }} purple={true}>The Viewport</A>
                    <A href="https://www.w3schools.com/css/css_rwd_grid.asp" target="_blank" className="css-responsive" rel="noopener noreferrer" style={{ fontSize: "11px" }}>Grid-View</A>
                    <A href="https://www.w3schools.com/css/css_rwd_mediaqueries.asp" target="_blank" className="css-responsive" rel="noopener noreferrer" style={{ fontSize: "11px" }}>Media Queries</A>
                    <A href="https://www.w3schools.com/css/css_rwd_images.asp" target="_blank" className="css-responsive" rel="noopener noreferrer" style={{ fontSize: "11px" }}>Images</A>
                    <A href="https://www.w3schools.com/css/css_rwd_videos.asp" target="_blank" className="css-responsive" rel="noopener noreferrer" style={{ fontSize: "11px" }} purple={true}>Videos</A>
                    <A href="https://www.w3schools.com/css/css_rwd_frameworks.asp" target="_blank" className="css-responsive" rel="noopener noreferrer" style={{ fontSize: "11px" }} >Frameworks</A>
                    <Aloading loading={true} href="https://www.w3schools.com/css/css_rwd_templates.asp" target="_blank" className="css-responsive" rel="noopener noreferrer" style={{ fontSize: "11px" }}>Templates </Aloading>
                </DivAnimation>}

            {/* ------- ------- */}

            <DivAnimationBottom>
                <span onClick={() => (isOpenCssGrid ? setIsOpenCssGrid(false) : setIsOpenCssGrid(true))} style={{ cursor: "pointer", width: "100%" }}>CSS Grid</span>
            </DivAnimationBottom>


            {isOpenCssGrid &&

                <div style={{ display: "flex", flexDirection: "column" }}>
                    <A href="https://www.w3schools.com/css/css_grid.asp" target="_blank" className="css-grid" rel="noopener noreferrer" style={{ fontSize: "11px" }}>Grid Layout Module</A>
                    <A href="https://www.w3schools.com/css/css_grid_container.asp" target="_blank" className="css-grid" rel="noopener noreferrer" style={{ fontSize: "11px" }}>Grid Container</A>
                    <A href="https://www.w3schools.com/css/css_grid_item.asp" target="_blank" className="css-grid" rel="noopener noreferrer" style={{ fontSize: "11px" }}>Grid Item</A>
                </div>}

            {/* ------- ------- */}


            {/* ------- ------- */}

            <DivAnimationRight>
                <span onClick={() => (isOpenCssSASS ? setIsOpenCssSASS(false) : setIsOpenCssSASS(true))} style={{ cursor: "pointer", width: "100%", right: "100px" }}>CSS SASS</span>
            </DivAnimationRight>


            {isOpenCssSASS &&

                <div style={{ display: "flex", flexDirection: "column" }}>
                    <A href="https://www.w3schools.com/css/css_grid.asp" target="_blank" className="grid-layout-module" rel="noopener noreferrer" style={{ fontSize: "11px" }}>Grid Layout Module</A>

                </div>}

            {/* ------- ------- */}

            {/* ------- ------- */}

            <DivAnimationLeft>
                <span onClick={() => (isOpenCssExamples ? setIsOpenCssExamples(false) : setIsOpenCssExamples(true))} style={{ cursor: "pointer", width: "100%" }}>CSS Examples</span>
            </DivAnimationLeft>


            {isOpenCssExamples &&

                <div style={{ display: "flex", flexDirection: "column" }}>
                    <A href="https://www.w3schools.com/css/css_templates.asp" target="blank01" className="css-examples" rel="noopener noreferrer" style={{ fontSize: "11px" }}>Templates</A>
                    <A href="https://www.w3schools.com/css/css_examples.asp" target="blank02" className="css-examples" rel="noopener noreferrer" style={{ fontSize: "11px" }}>Examples</A>
                    <A href="https://www.w3schools.com/css/css_snippets.asp" target="_blank" className="css-examples" rel="noopener noreferrer" style={{ fontSize: "11px" }}>Snippets</A>
                    <A href="https://www.w3schools.com/css/css_quiz.asp" target="_blank" className="css-examples" rel="noopener noreferrer" style={{ fontSize: "11px" }}>Quiz</A>
                </div>}
            {/* ------- ------- */}

            <DivAnimationTop>
                <span onClick={() => (isOpenCssReference ? setIsOpenCssReference(false) : setIsOpenCssReference(true))} style={{ cursor: "pointer", width: "100%" }}>CSS Reference</span>
            </DivAnimationTop>


            {isOpenCssReference &&

                <div style={{ display: "flex", flexDirection: "column" }}>
                    <A href="https://www.w3schools.com/cssref/index.php" target="_blank" className="css-reference" rel="noopener noreferrer" style={{ fontSize: "11px" }}>CSS Reference</A>
                    <A href="https://www.w3schools.com/cssref/css3_browsersupport.php" target="_blank" className="css-reference" rel="noopener noreferrer" style={{ fontSize: "11px" }}>Browser Support Reference</A>
                    <A href="https://www.w3schools.com/cssref/css_selectors.php" target="_blank" className="css-reference" rel="noopener noreferrer" style={{ fontSize: "11px" }}>Selector Reference</A>
                    <A href="https://www.w3schools.com/cssref/css_functions.php" target="_blank" className="css-reference" rel="noopener noreferrer" style={{ fontSize: "11px" }}>Functions Reference</A>
                    <A href="https://www.w3schools.com/cssref/css_ref_aural.php" target="_blank" className="css-reference" rel="noopener noreferrer" style={{ fontSize: "11px" }}>Aural Reference</A>
                    <A href="https://www.w3schools.com/cssref/css_websafe_fonts.php" target="_blank" className="css-reference" rel="noopener noreferrer" style={{ fontSize: "11px" }}>Web Safe Fonts</A>
                    <A href="https://www.w3schools.com/cssref/css_fonts_fallbacks.php" target="_blank" className="css-reference" rel="noopener noreferrer" style={{ fontSize: "11px" }}>Fallback Fonts</A>
                    <A href="https://www.w3schools.com/cssref/css_animatable.php" target="_blank" className="css-reference" rel="noopener noreferrer" style={{ fontSize: "11px" }}>Animatable</A>
                    <A href="https://www.w3schools.com/cssref/css_units.php" target="_blank" className="css-reference" rel="noopener noreferrer" style={{ fontSize: "11px" }}>Units</A>
                    <A href="https://www.w3schools.com/cssref/css_pxtoemconversion.php" target="_blank" className="css-reference" rel="noopener noreferrer" style={{ fontSize: "11px" }}>Fallback Fonts</A>
                    <A href="https://www.w3schools.com/cssref/css_fonts_fallbacks.php" target="_blank" className="css-reference" rel="noopener noreferrer" style={{ fontSize: "11px" }}>Fallback Fonts</A>
                    <A href="https://www.w3schools.com/cssref/css_pxtoemconversion.php" target="_blank" className="css-reference" rel="noopener noreferrer" style={{ fontSize: "11px" }}>PX to EM Conversion</A>
                    <A href="https://www.w3schools.com/cssref/css_colors.php" target="_blank" className="css-reference" rel="noopener noreferrer" style={{ fontSize: "11px" }}>Colors</A>
                    <A href="https://www.w3schools.com/cssref/css_colors_legal.php" target="_blank" className="css-reference" rel="noopener noreferrer" style={{ fontSize: "11px" }}>Legal Color Values</A>
                    <A href="https://www.w3schools.com/cssref/css_entities.php" target="_blank" className="css-reference" rel="noopener noreferrer" style={{ fontSize: "11px" }}>Entities</A>
                </div>}
            {/* ------- ------- */}



            <div style={{ display: "flex", justifyContent: "center", height: "0", marginBottom: "25px" }}>
                <span>ReactJS</span>
            </div>

            <div style={{ display: "flex", flexDirection: "column" }}>
                <NavbarLinkContainerUl target="frontend-left-reactJS">
                    <Li>
                        <A href="https://www.freecodecamp.org/portuguese/news/como-usar-o-html-para-abrir-um-link-em-uma-nova-aba/#:~:text=%C3%89%20f%C3%A1cil%20usar%20o%20HTML,voc%C3%AA%20quer%20fazer%20a%20liga%C3%A7%C3%A3o" target="_blank" rel="noopener noreferrer" style={{ fontSize: "15px" }}>Como renderizar {"<a>"} com a href opcional em React</A>
                    </Li>
                    <Li>
                        <LinkNavBar to={'regras-hooks'} style={{ fontSize: "15px" }}>Hook Regras</LinkNavBar>
                    </Li>
                </NavbarLinkContainerUl>
            </div>

            {/* ----------------------------------------------------------------------------------------- */}

            <div style={{ display: "flex", justifyContent: "center", marginTop: "10px" }}>
                <span>CSS</span>
            </div>

            <div style={{ display: "flex", flexDirection: "column" }}>
                <A href="https://dev.to/owilliamgoncalves/mudando-tema-da-tela-com-css-puro-ej5" target="_blank" className="css" rel="noopener noreferrer" style={{ fontSize: "11px" }}>Mudando tema da tela com CSS Puro (Dark/Light Mode)</A>
                <A href="https://wime.com.br/2015/08/21/8-efeitos-de-transicao-em-css3-css3-transitions/" target="_blank" className="css" rel="noopener noreferrer" style={{ fontSize: "11px" }}>8 Efeitos de transição {"<<<"}</A>
                <A href="https://www.w3schools.com/css/css_rwd_intro.asp" target="_blank" className="css" rel="noopener noreferrer" style={{ fontSize: "11px" }}>Responsive Web Design</A>
                <A href="https://geracaocriativa.com/conteudos/desenvolvimento/codigo/36-17-animacoes-css-a-nao-perder-1parte" target="_blank" className="css" rel="noopener noreferrer" style={{ fontSize: "11px" }}>17 Animações CSS a não perder</A>
                <A href="https://webdesign.tutsplus.com/pt/articles/10-examples-of-animation-on-codepen-you-can-learn-from--cms-28244" target="_blank" className="css" rel="noopener noreferrer" style={{ fontSize: "11px" }}>10 Exemplos de Animação no CodePen das Quais Podemos Aprender</A>
            </div>

            {/* ----------------------------------------------------------------------------------------- */}

            <div style={{ display: "flex", justifyContent: "center", marginTop: "10px" }}>
                <span>HTML</span>
            </div>

            <div style={{ display: "flex", flexDirection: "column" }}>
                <A href="https://www.freecodecamp.org/portuguese/news/como-usar-o-html-para-abrir-um-link-em-uma-nova-aba/#:~:text=%C3%89%20f%C3%A1cil%20usar%20o%20HTML,voc%C3%AA%20quer%20fazer%20a%20liga%C3%A7%C3%A3o" target="_blank" rel="noopener noreferrer" style={{ fontSize: "11px" }}>?????????????</A>
            </div>

            {/* ----------------------------------------------------------------------------------------- */}

            <div style={{ display: "flex", justifyContent: "center", marginTop: "10px" }}>
                <span>Styled Components</span>
            </div>

            <div style={{ display: "flex", flexDirection: "column" }}>
                <A href="https://medium.com/codeuai/trabalhando-com-anima%C3%A7%C3%B5es-usando-styled-components-9cc1a35a8777" target="_blank" rel="noopener noreferrer" style={{ fontSize: "11px" }}>Animações usando styled-components</A>
            </div>
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