'use state'
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface HeroProps {
  name: string;
  tagline: string;
}

const HeroSection: React.FC<HeroProps> = ({ name, tagline }) => {
  const [showQuestion1, setShowQuestion1] = useState(false);
  const [showAnswer1, setShowAnswer1] = useState(false);
  const [showQuestion2, setShowQuestion2] = useState(false);
  const [showAnswer2, setShowAnswer2] = useState(false);

  useEffect(() => {
    const animateText = async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Delay 1 second
      setShowQuestion1(true);
      await new Promise((resolve) => setTimeout(resolve, 2000)); // Delay 2 seconds
      setShowAnswer1(true);
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Delay 1 second
      setShowQuestion2(true);
      await new Promise((resolve) => setTimeout(resolve, 2000)); // Delay 2 seconds
      setShowAnswer2(true);
    };

    animateText();
  }, []);

  const animateLetters = (text:string) => {
    const letters = text.split('');

    return (
      <motion.span
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
      >
        {letters.map((letter, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.1 * index,
              duration: 0.5,
              ease: 'easeInOut',
            }}
          >
            {letter}
          </motion.span>
        ))}
      </motion.span>
    );
  };

  return (
    <div className="relative w-full h-screen bg-cover bg-center" style={{ backgroundImage: 'url(myimage.jpg)' }}>
      <div className="absolute inset-0 bg-gradient-to-t from-transparent to-black"></div>
      <div className="absolute inset-0 flex flex-col justify-center items-center">
        <motion.div className="text-3xl text-white text-center">
          {showQuestion1 && animateLetters('Question: What is your name?')}
        </motion.div>
        <motion.div className="text-6xl font-bold text-white text-center">
          {showAnswer1 && animateLetters(`My name is "${name}"`)}
        </motion.div>
        <motion.div className="text-3xl text-white text-center">
          {showQuestion2 && animateLetters('Question: Tell us about you?')}
        </motion.div>
        <motion.div className="text-2xl text-white text-center">
          {showAnswer2 && animateLetters(tagline)}
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
