import styled from "styled-components";
import { MaxWidth } from "../../constant/responsive";

const borderWidth = "1px";

export const SkillAnimationStyled = styled.div`
    height: 16rem;
    width: 24rem;
    /* background-color: red; */
    display: grid;
    grid-template-columns: 60% auto;            
    box-shadow: 0 0 0 ${borderWidth} black;
    position: relative;
    ${MaxWidth.mobile} {
        height: 10rem;
        width: 17rem;
    }
    .SkillAnimation {
        &-Window {
            box-shadow: 0 0 0 ${borderWidth} black;
            display: grid;
            grid-template-rows: 1.5rem auto;
            &-Bar {
                box-shadow: 0 0 0 ${borderWidth} black;
                display: flex;
                align-items: center;
                gap: 0.3rem;
                padding-left: 0.5rem;
                div {
                    width: 0.6rem;
                    height: 0.6rem;
                    border-radius: 100%;
                    border-style: solid;
                    border-width: ${borderWidth};
                    border-color: black;
                }
            }
        }
        &-Code {
            position: relative;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            padding: 1rem;
            ${MaxWidth.mobile} {
                font-size: 0.7rem;
            }
            &-Lines {
                display: flex;
                gap: 1.5rem;
                padding: 0.3rem 0;
                justify-content: center;
                align-items: center;
                height: 100%;
                ${MaxWidth.mobile} {
                    gap: 0.9rem;
                }
                span {
                    width: 1px;
                    background-color: black;
                    height: 90%;
                    &:nth-child(2) {
                        height: 70%;
                    }
                    &:nth-child(3) {
                        height: 50%;
                    }
                    &:nth-child(4) {
                        height: 40%;
                    }
                    &:nth-child(5) {
                        height: 20%;
                    }
                }
            }
            &-Door {
                position: absolute;
                left: 0;
                top: 0;
                width: 100%;
                height: 100%;
                box-shadow: 0 0 0 ${borderWidth} black;
                background-color: #e1dfdd;
                transition: all ease 800ms;
                display: flex;
                justify-content: center;
                align-items: center;
                transform-origin: right;
                // transform: perspective(46rem) translateX(0.1rem) rotateY(118deg);
            }
        }
        &-Drawing{
            position: absolute;
            bottom: -10rem;
            left: -13rem;
            width: 39rem;
            ${MaxWidth.mobile} {
                bottom: -6rem;
                left: -14rem;
            }
        }
    }
    .Drawing-Body, .Drawing-LegRight {
        transition: all ease 1500ms;
    }
    &.AnimationActive {
        .SkillAnimation-Code-Door {
            transform: perspective(46rem) translateX(0.1rem) rotateY(118deg);
        }
        .Drawing-Body {
            transform: translateY(-1rem);
        }
        .Drawing-LegRight {
            transform: rotateX(10deg);
        }
    }
`