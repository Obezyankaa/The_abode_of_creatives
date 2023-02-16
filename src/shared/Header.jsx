import {hot} from 'react-hot-loader/root'
import * as React from 'react'
import stelys from './header.less'

function HeaderComponent () {
  return(
    <header>
      <h1 className={stelys.example}>
        Hello React
      </h1>
    </header>
  )
}

export const Header = hot(HeaderComponent)
