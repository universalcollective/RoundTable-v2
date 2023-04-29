// import React, { useState, useEffect } from 'react';
// import gsap from 'gsap';

// const Preloader: React.FC = () => {
//   const [text, setText] = useState('Round Table');

//   const shuffleText = (text: string): string => {
//     const capitalLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
//     const numbers = '0123456789';
//     const specialChars = '!@#$%^&*';
//     const chars = capitalLetters + numbers + specialChars;
//     const shuffledChars = gsap.utils.shuffle(chars.split('')).join('');
//     const shuffledCharsArray = shuffledChars.split('');
//     let shuffledText = '';

//     for (let i = 0; i < text.length; i++) {
//       const originalChar = text[i];
//       const shuffledChar = originalChar === ' ' ? ' ' : shuffledCharsArray[i];
//       shuffledText += shuffledChar;
//     }

//     return shuffledText;
//   };

//   useEffect(() => {
//     const tl = gsap.timeline({
//       onComplete: () => {
//         const preloader = document.querySelector('.preloader');
//         preloader?.parentNode?.removeChild(preloader);
//       },
//     });

//     const shuffledText = shuffleText(text);

//     tl.set('.preloader-text', { opacity: 1 })
//       .to('.preloader-text', {
//         duration: 0.5,
//         opacity: 0,
//         stagger: 0.05,
//         onComplete: () => setText(shuffledText),
//       })
//       .to('.preloader-text', {
//         duration: 0.5,
//         opacity: 1,
//         stagger: 0.05,
//         onComplete: () => setText('Round Table'),
//       });
//   }, []);

//   return (
//     <div className="preloader">
//       <h1 className="preloader-text">
//         {text.split('').map((char, index) => (
//           <span key={index}>{char}</span>
//         ))}
//       </h1>
//     </div>
//   );
// };

// export default Preloader;
export()
