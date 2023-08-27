import styled from 'styled-components';

export const ContainerBtn = styled.button`

display: inline-block;
padding: 1px 25px;
font-size: 20px;
cursor: pointer;
text-align: center;
text-decoration: none;
outline: none;
color: #fff;
background-color: #4CAF50;
border: none;
border-radius: 15px;
box-shadow: 0 6px #999;
margin: 0 0 5px 0;
width: 120px;

&:active {
background-color: #3e8e41;
box-shadow: 0 2px #666;
transform: translateY(4px);
}
`;