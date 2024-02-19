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

  // useEffect(() => {
  //   const typingTimeout = setTimeout(
  //     () => {
  //       // Determine the current word based on currentIndex
  //       const currentWord = data[currentIndex];

  //       // Update the text based on whether we are typing or deleting
  //       setText(
  //         isDeleting
  //           ? currentWord.slice(0, text.length - 1)
  //           : currentWord.slice(0, text.length + 1)
  //       );

  //       // Determine whether to switch to deleting, move to the next word, or keep typing
  //       if (!isDeleting && text === currentWord) {
  //         //After finishing typing a word, wait a bit then start deleting
  //         setTimeout(() => setIsDeleting(true), delayBetweenWords);
  //       } else if (isDeleting && text === "") {
  //         // After deleting, move to the next word or loop back to the start
  //         setIsDeleting(false);
  //         setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
  //       }
  //     },
  //     isDeleting ? deletingSpeed : typingSpeed
  //   );

  //   return () => clearTimeout(typingTimeout);
  // }, [
  //   text,
  //   isDeleting,
  //   currentIndex,
  //   data,
  //   typingSpeed,
  //   deletingSpeed,
  //   delayBetweenWords,
  // ]);

  useEffect(() => {
    let typingTimeout: number | NodeJS.Timeout;
    if (isDeleting) {
      //Hanlde deleting
      typingTimeout = setTimeout(() => {
        setText(text.slice(0, text.length - 1));

        if(text === ""){
          // After deleting, move to the next word or loop back to the start
          setIsDeleting(false);
          setCurrentIndex(prevIndex => (prevIndex + 1) % data.length);
        }
      }, deletingSpeed);
    } else {
      // Handle Typing
      const currentWord = data[currentIndex];
      typingTimeout = setTimeout(() => {
        setText(currentWord.slice(0, text.length + 1));
        if(text === currentWord){
          // After finishin typing a word, wait a bit then start deleting
          setTimeout(() => setIsDeleting(true), delayBetweenWords);
        }
      }, typingSpeed);
    }

    return () => clearTimeout(typingTimeout);
  }, [
    text,
    isDeleting,
    currentIndex,
    data,
    typingSpeed,
    deletingSpeed,
    delayBetweenWords
  ]);

  return text;
};
