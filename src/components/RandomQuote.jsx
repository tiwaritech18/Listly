import { IoMdQuote } from "react-icons/io"
import quotes from "../features/quotes"
import { useState } from "react"
import Container from "./Container"
const RandomQuote = () => {
  const [randomQuote, setRandomQuote] = useState(() => {
    const randomIndex = Math.floor(Math.random() * quotes.length)
    return quotes[randomIndex]
  })


  return (
<Container>
    <div className="pt-16 pb-8">
      <p className="flex max-w-80">{randomQuote.quote}
        <IoMdQuote className="text-pink-600"/>
      </p>
        <p className="italic ">- {randomQuote.author}</p>
    </div>
<Container/>
  )
}

export default RandomQuote
