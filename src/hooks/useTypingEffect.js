import { useState, useEffect, useRef } from 'react';

const useTypingEffect = (roles) => {
  const [typedText, setTypedText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    const typingSpeed = 150;
    const deletingSpeed = 100;
    const delayBetweenRoles = 2000;

    const type = () => {
      const currentRole = roles[roleIndex];
      
      if (isDeleting) {
        // Deleting text
        setTypedText(currentRole.substring(0, charIndex - 1));
        setCharIndex(prev => prev - 1);
        
        if (charIndex === 0) {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
          setCharIndex(0); // Explicitly reset charIndex
        }
        timerRef.current = setTimeout(type, charIndex === 0 ? typingSpeed : deletingSpeed);
      } else {
        // Typing text
        setTypedText(currentRole.substring(0, charIndex + 1));
        setCharIndex(prev => prev + 1);
        
        if (charIndex === currentRole.length) {
          setIsDeleting(true);
          timerRef.current = setTimeout(type, delayBetweenRoles);
        } else {
          timerRef.current = setTimeout(type, typingSpeed);
        }
      }
    };

    timerRef.current = setTimeout(type, 150);
    
    return () => {
      clearTimeout(timerRef.current);
    };
  }, [roles, roleIndex, charIndex, isDeleting]);

  return typedText;
};

export default useTypingEffect;