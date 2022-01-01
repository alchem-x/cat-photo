import React, { useEffect, useReducer } from 'react'
import { css } from '@emotion/css'
import Loading from './components/Loading.jsx'
import { initialState, reducer } from './store.js'
import CatShot from './CatShot.jsx'
import loadNewCatShot from './loadNewCatShot.js'

const _App = css`
  position: relative;
  height: 100vh;
  overflow: auto;
`

export default function App() {
    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {
        loadNewCatShot(state, dispatch)
    }, [])

    return (
        <div className={_App}>
            {state.loading ? <Loading/> : <CatShot state={state} dispatch={dispatch}/>}
        </div>
    )
}