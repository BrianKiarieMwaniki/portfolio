import { useEffect, useState } from "react";

type UseTypewriterProps = {
  data: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  delayBetweenWords?: number;
};

export const useTypewriter = ({
  data,
  typingSpeed = 150,
  deletingSpeed = 150,
  delayBetweenWords = 1500,
}: UseTypewriterProps) => {
  const [text, setText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typingTimeout = setTimeout(
      () => {
        // Determine the current word based on currentIndex
        const currentWord = data[currentIndex];

        // Updatee the text based on whether we are typing or deleting
        setText(
          isDeleting
            ? currentWord.slice(0, text.length - 1)
            : currentWord.slice(0, text.length + 1)
        );

        // Determine whether to switch to deleting, move to the next word, or keep typing
        if (!isDeleting && text === currentWord) {
          //After finishing typing a word, wait a bit then start deleting
          setTimeout(() => setIsDeleting(true), delayBetweenWords);
        } else if (isDeleting && text === "") {
          // After deleting, move to the next word or loop back to the start
          setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
          setIsDeleting(false);
        }
      },
      isDeleting ? deletingSpeed : typingSpeed
    );

    return () => clearTimeout(typingTimeout);
  }, [
    text,
    currentIndex,
    isDeleting,
    data,
    typingSpeed,
    deletingSpeed,
    delayBetweenWords,
  ]);

  return text;
};
