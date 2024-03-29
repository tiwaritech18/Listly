import { IoMdQuote } from "react-icons/io";
import quotes from "../features/quotes";
import { useState } from "react";
import Container from "./Container";

const RandomQuote = () => {
  const [randomQuote, setRandomQuote] = useState(() => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
  });

  return (
    <Container>
      <div className="pt-1 pb-8  max-w-80 flex flex-col items-center mx-auto my-0">
        <div className="pt-16 pb-8">
          <p className="flex max-w-80">
            {randomQuote.quote}
            <IoMdQuote className="text-pink-600" />
          </p>
          <p className="italic ">- {randomQuote.author}</p>
        </div>
      </div>
    </Container>
  );
};

export default RandomQuote;
