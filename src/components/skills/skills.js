import { SkillAnimation } from "../skillAnimation/skillAnimation"
import { SkillStyled } from "./skills.styled"

export const Skills = ()=>{
    return (
        <SkillStyled className="Skill">
            <div className="center">
                SKILLS
            </div>
            <div className="center">
                <SkillAnimation/>
            </div>
        </SkillStyled>
    )
}