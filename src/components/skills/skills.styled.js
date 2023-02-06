import styled from "styled-components";
import { MaxWidth } from "../../constant/responsive";

export const SkillStyled = styled.div`
    height: 100%;
    width: 100%;
    display: grid;
    grid-template-columns: 30rem auto;
    align-items: center;
    ${MaxWidth.mobile} {
        grid-template-columns: 100%;
        grid-template-rows: 10rem auto;
    }
`