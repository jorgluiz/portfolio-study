import styled from "styled-components";

export const Container = styled.div`

width: 810px;
margin-top: 20px;

& .externamente-block > strong {
    display: flex;
    justify-content: center;
}
& .externamente-block:hover {
    cursor: pointer;
}
& .externamente-block:hover > .externamente  {
    display: block;
    background-color: #abb8c3;
}
& .externamente {
    display: none;
}
/* ___________________________________________________________________________________________ */
& .internamente-block > strong {
    display: flex;
    justify-content: center;
}
& .internamente-block:hover {
    cursor: pointer;
}
& .internamente-block:hover > .internamente {
    display: block;
    background-color: #abb8c3;
}
& .internamente {
    display: none;
    /* opacity: 0; */
    transition-duration: 1s;
}
/* ___________________________________________________________________________________________ */
& .inline-block > strong {
    display: flex;
    justify-content: center;
}
& .inline-block:hover {
    cursor: pointer;
}
& .inline-block:hover > .inline {
    display: block;
    background-color: #abb8c3;
}
& .inline {
    display: none;
}
/* ___________________________________________________________________________________________ */
& .inline p {
    font-size: 25px;
}
`;