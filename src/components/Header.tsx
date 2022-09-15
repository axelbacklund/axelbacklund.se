import * as React from 'react'
import { Link } from 'gatsby'

const Header: React.FC = () => {
  return (
    <header>
      <nav>
        <div className="flex justify-between items-center bg-green-lighter dark:bg-green-darker py-6 px-4 lg:px-10">
          <div>
            <Link className="text-xl text-white" to="/">
              Axel Backlund
            </Link>
          </div>

          <ul className="flex flex-row text-white">
            <li>
              <Link to="/">Blog</Link>
            </li>
            <li className="ml-6">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Header
