import { HeaderStyled } from "./header.styled"

export const Header = ()=>{
    
    return (
        <HeaderStyled className="Header">
            <div className="Header-Left"> Genesis Plata </div>
            <div className="Header-Right">
                <p> about</p>
                <p> Contact </p>
                <div/>
            </div>
        </HeaderStyled>
    )
}