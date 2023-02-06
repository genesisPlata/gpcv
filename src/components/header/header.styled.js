import { fontFamily } from "@mui/system";
import styled from "styled-components";


export const HeaderStyled = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  .Header {
    &-Right {
        display: flex;
        gap: 1rem;
        align-items: center;
        div{
            background-color: black;
            width: 0.5rem;
            height: 2rem;
        }
    }
  }
`
