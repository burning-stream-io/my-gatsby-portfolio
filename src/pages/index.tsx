import React, { FC } from 'react';
import { FullCard, HalfCard } from '../components/Cards';
import Title from '../components/Title';
import '../styles/index.css';

const Home: FC = () => {
  return (
    <div>
      <Title title={'About me'} />
      <FullCard
        caption='Results-driven and motivated Software Engineer with demonstrated
experience in building modern beautiful software with optimized
performance, I enjoy building web/mobile applications, with interactive
design and learning new things in order to deliver better quality
products.'
      />
      <Title title={'Tech stack'} />
      <div className='half-cards-container'>
        <HalfCard
          title='React Native'
          caption='Develop high performant pixel-perfect, buttery smooth UIs across both mobile

platforms.'
          icon='https://cdn.worldvectorlogo.com/logos/react-native-1.svg'
          rate={4.5}
        />
        <HalfCard
          title='React'
          caption='Develop modern-day, reusable,optimized and tested UI components with a focus on performance, accessibility, and scalability.'
          icon='https://cdn.worldvectorlogo.com/logos/react-2.svg'
          rate={4}
        />
        <HalfCard
          title='Node.js'
          caption='Develop scalable network applications with Node.js, Express, and Socket.io.'
          icon='https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg'
          rate={3.5}
        />

        <HalfCard
          title='NestJS'
          caption={'Develop scalable, modular, and testable web applications with TypeScript.'}
          icon='https://cdn.worldvectorlogo.com/logos/nestjs.svg'
          rate={3}
        />
      </div>
    </div>
  );
};

export default Home;
