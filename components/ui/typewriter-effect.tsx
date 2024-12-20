"use client";

import { motion, stagger, useAnimate, useInView } from "framer-motion";
import { useEffect } from "react";

export const TypewriterEffect = ({
  words,
  className,
  cursorClassName,
}: {
  words: {
    text: string;
    className?: string;
  }[];
  className?: string;
  cursorClassName?: string;
}) => {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope);
  
  useEffect(() => {
    if (isInView) {
      animate(
        "span",
        {
          opacity: 1,
        },
        {
          duration: 0.1,
          delay: stagger(0.1),
        }
      );
    }
  }, [isInView]);

  const renderWords = words.map((word, idx) => {
    return (
      <motion.span
        key={`${word}-${idx}`}
        className={word.className}
        initial={{
          opacity: 0,
        }}
      >
        {word.text.split("").map((char, charIdx) => (
          <span key={charIdx}>{char}</span>
        ))}
        &nbsp;
      </motion.span>
    );
  });

  return (
    <motion.div
      ref={scope}
      className={className}
    >
      {renderWords}
      <motion.span
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 0.1,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className={cursorClassName}
      >
        |
      </motion.span>
    </motion.div>
  );
};