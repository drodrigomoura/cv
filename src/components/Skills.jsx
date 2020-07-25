import React from 'react'
import styled from 'styled-components'

const SkillsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 2rem;
    grid-row-gap: 0.5em;
`;

const SkillsH5 = styled.h5`
    margin: .5em 0;     
`;

const SkillLine = styled.div`
    heigh: 8px;
    position: relative;
    border-radius: 50px;
    background: #f8bbd0;
`;

const SkillsSpan = styled.span`
    display: block;
    height: 100%;
    width: ${props => props.width};
    border-radius: 8px;
    background-color: #41b883;
    overflow: hidden;
    position: relative;
    box-shadow: inset 0 2px 9px rgba(255,255,255,0.3), inset 0 -2px 6px rgba(0,0,0,0.4);
`;

const Skills = props => (
    <div className="Skills">
        <SkillsContainer>
            {
                props.data.map((skill, index) => (
                    <div className='Skills-item' key={`Skill-${index}`}>
                        <SkillsH5>{skill.name}</SkillsH5>
                        <SkillLine>
                            <SkillsSpan width={skill.percentage} />
                        </SkillLine>
                    </div>
                ))
            }
        </SkillsContainer>
    </div>
)

export default Skills