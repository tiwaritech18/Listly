import { IoMdQuote } from "react-icons/io"
import quotes from "../features/quotes"
import { useState } from "react"

const RandomQuote = () => {
  const [randomQuote, setRandomQuote] = useState(() => {
    const randomIndex = Math.floor(Math.random() * quotes.length)
    return quotes[randomIndex]
  })


  return (
    <div className="pt-16 pb-8">
      <p className="flex max-w-80">{randomQuote.quote}
        <IoMdQuote className="text-pink-600"/>
      </p>
        <p className="italic ">- {randomQuote.author}</p>
    </div>
  )
}

export default RandomQuote
