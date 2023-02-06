import { useEffect, useState } from "react";
import { Drawing } from "./drawing";
import { SkillAnimationStyled } from "./skillAnimation.styled";

export const SkillAnimation = () => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setActive(!active);
    }, 2500);


    return () => {
      clearTimeout(timer)
    }

  }, [active])

  return <SkillAnimationStyled className={`SkillAnimation ${active ? "AnimationActive" : ""}`}>
    <div className="SkillAnimation-Window">
        <div className="SkillAnimation-Window-Bar">
            <div/>
            <div/>
            <div/>
        </div>
        <div className="SkillAnimation-Window-Content"></div>
    </div>
    <div className="SkillAnimation-Code">
        <span>{"<body>"}</span>
        <div className="SkillAnimation-Code-Lines">
          <span/>
          <span/>
          <span/>
          <span/>
          <span/>
        </div>
        <span>{"</body>"}</span>
        <div className="SkillAnimation-Code-Door"/>
    </div>
    <Drawing/>
  </SkillAnimationStyled>;
};
