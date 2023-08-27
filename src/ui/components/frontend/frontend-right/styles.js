import styled from "styled-components";

export const Container = styled.div`
grid-area: sideRight;

& .tutorial {
    position: relative;

    animation-name: tutorial;
    animation-duration: 5s;
    animation-iteration-count: 1;

    @keyframes tutorial {
        from {left: 200px;}
        to {left: 0;}
    }
}

& .advanced {
    position: relative;

    animation-name: advanced;
    animation-duration: 5.5s;
    animation-iteration-count: 1;

    @keyframes advanced {
        from {left: 200px;}
        to {left: 0;}
    }
}

& .responsive {
    position: relative;

    animation-name: responsive;
    animation-duration: 6s;
    animation-iteration-count: 1;

    @keyframes responsive {
        from {left: 200px;}
        to {left: 0;}
    }
}
`;
export const  A = styled.a`

&.css-advanced {
    height: 24px;
};
&.css-advanced:hover {
    text-decoration: underline;
};
&.css-responsive {
    height: 24px;
}
&.css-responsive:hover {
    text-decoration: underline;
}
&.css-grid {
    height: 24px;
}
&.css-grid:hover {
    text-decoration: underline;
}
&.grid-layout-module {
    height: 24px;
}
&.grid-layout-module:hover {
    text-decoration: underline;
}
&.css-examples {
    height: 24px;
}
&.css-examples:hover {
    text-decoration: underline;
}
&.css-reference {
    height: 24px;
}
&.css-reference:hover {
    text-decoration: underline;
}
&.css {
    height: 24px;
}
&.css:hover {
    text-decoration: underline;
}
`;

export const Img = styled.div`

`;

export const DropDownImg = styled.div`

&:hover {
    text-decoration: underline;
}
`;