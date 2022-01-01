import React, { useEffect, useState } from 'react'
import { css } from '@emotion/css'

const _Loading = css`
  position: absolute;
  inset: 0;
  z-index: 10;
  font-size: 4rem;
  text-align: center;
  line-height: 100vh;
`

const cats = ['😼', '😹', '🙀', '😾', '😿', '😻', '😺', '😸', '😽']

function getRandomCat(current) {
    const _cats = cats.filter((it) => it !== current)
    return _cats[Math.floor(Math.random() * _cats.length)]
}

export default function Loading(props) {

    const [cat, setCat] = useState(getRandomCat())

    useEffect(() => {
        const handle = setInterval(() => {
            setCat(getRandomCat(cat))
        }, 1000)
        return () => {
            clearInterval(handle)
        }
    }, [])

    return (<div className={_Loading}>{cat}</div>)
}