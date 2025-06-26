import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';

const StyledAboutSection = styled.section`
  max-width: 1000px;

  .inner {
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 768px) {
      display: block;
    }
  }
`;
const StyledText = styled.div`
  ul.skills-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    grid-gap: 0 10px;
    padding: 0;
    margin: 20px 0 0 0;
    overflow: hidden;
    list-style: none;

    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      font-family: var(--font-mono);
      font-size: var(--fz-xs);

      &:before {
        content: '▹';
        position: absolute;
        left: 0;
        color: var(--green);
        font-size: var(--fz-sm);
        line-height: 12px;
      }
    }
  }
`;

const About = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);

  const WebDevSkills = [
    'JavaScript (ES6+)',
    'TypeScript',
    'React',
    'Next.js',
    'Node.js',
    'Tailwind CSS',
    'Docker',
    'Git',
  ];

  const DSSkills = ['Python', 'Pandas', 'Numpy', 'Scikit-learn', 'TensorFlow', 'PyTorch'];

  return (
    <StyledAboutSection id="about" ref={revealContainer}>
      <h2 className="numbered-heading">About Me</h2>

      <div className="inner">
        <StyledText>
          <div>
            <p>
              Hi, I'm Piyush Duggal, a passionate developer, lifelong learner, and curious creator.
            </p>
            <p>
              I love building things that live on the internet — from full-stack web applications to
              data-driven tools that solve real-world problems.
            </p>
            <p>
              Whether it's contributing to open-source projects, exploring machine learning
              algorithms, or sharing knowledge through teaching, I’m always eager to tackle new
              challenges and grow through them.
            </p>
            <p className="mt-5">
              I am also a Data Science 📊 Student at{' '}
              <a href="https://study.iitm.ac.in/ds" target="_blank" rel="noreferrer">
                Indian Institute of Technology Madras
              </a>
              . Studying the pure mathematics and statistics behind the so called AI.
            </p>

            <p>
              Here are a few <u>Web Technologies</u> I’ve been working with:
            </p>
          </div>

          <ul className="skills-list">
            {WebDevSkills && WebDevSkills.map((skill, i) => <li key={i}>{skill}</li>)}
          </ul>
          <p className="mt-5">
            Here are a few <u>Data Science technologies</u> I’ve been working with:
          </p>
          <ul className="skills-list">
            {DSSkills && DSSkills.map((skill, i) => <li key={i}>{skill}</li>)}
          </ul>
        </StyledText>
      </div>
    </StyledAboutSection>
  );
};

export default About;
