import { Header } from "../header/header";
import { Herostyled } from "./hero.styled";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

export const Hero = () => {
  return (
    <Herostyled className="Hero">
      <Header />
      <div className="Hero-Text">
        <div />
        <h1>Developer</h1>
        <p> ;</p>
      </div>
      <div className="Hero-Footer">
        <div className="Hero-Footer-Scroll">
          <ArrowDownwardIcon />
        </div>
        <div className="Hero-Footer-Text">
          <p>
            Entusiasta del desarrolo de aplicaciones. Interesada en todo el
            espectro del frontend, nuevas tecnologías y trabajar en proyectos
            desafiantes con gente positiva.
          </p>
        </div>
      </div>
    </Herostyled>
  );
};
