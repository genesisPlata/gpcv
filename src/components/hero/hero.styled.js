import styled from "styled-components";
import { Color } from "../../constant/colors";
import { MaxWidth } from "../../constant/responsive";

export const  Herostyled = styled.div `
    height: 100%;
    width: 100%;
    display: grid;
    grid-template-rows: 3rem auto max-content;
    position: relative;
    overflow: auto;
    
    .Hero-Text {
        display: flex;
        justify-content: left;
        align-items: center;
        margin: 0;
        font-family: Noto Sans;
        font-weight: 600;
        div{
            height: 7.5rem;
            width: 1.5rem;
            background-color:${Color.orange};
            margin-left: 2rem;
            ${MaxWidth.mobile} {
                height: 5.5rem;
            }
        }
        h1{
            font-size: 7.5rem;
            padding-left: 2rem;
            ${MaxWidth.mobile} {
                padding-left: 1rem;
                font-size: 3rem;
            }
        }
        p{
            font-size: 7.5rem;
            color:${Color.orange};
            margin-left: 1rem;
            ${MaxWidth.mobile} {
                margin-left: 0.2rem;
                font-size: 3rem;
            }
        }
    }
    .Hero-Footer{
        display: flex;
        align-items: flex-start;
        ${MaxWidth.mobile} {
            padding-bottom: 2rem;
            padding-left: 2rem;
        }
        &-Scroll{
            svg {
                font-size: 6rem;
                ${MaxWidth.mobile} {
                    font-size: 4rem;
                }
            }
        }
      &-Text{
        p{
            width: 37rem;
            margin: 0;
            margin-left: 2rem;
            ${MaxWidth.mobile} {
                font-size: 0.6rem;
                width: 15rem;
            }
        }
      }
    }
    /* @keyframes ChangeColorText {
        0% {
            color: black;
        }
        40% {
            color: orange;
        }
        70% {
            color: coral;
        }
    } */
`