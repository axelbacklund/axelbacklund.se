import * as React from 'react'
import { Link } from 'gatsby'

interface ButtonProps {
  link: string
  text: string
}

const Button: React.FC<ButtonProps> = ({ link, text }) => {
  return (
    <Link to={link}>
      <button className="transition ease-in-out bg-green-lighter hover:bg-green-darker active:bg-black dark:bg-bone dark:hover:bg-bone-darker dark:active:bg-bone-darkest text-bone dark:text-off-black pt-3 pb-2 px-6">
        {text}
      </button>
    </Link>
  )
}

export default Button
