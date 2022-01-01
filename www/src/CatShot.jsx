import React from 'react'
import { css } from '@emotion/css'
import loadNewCatShot from './loadNewCatShot.js'

const _CatShot = css`
  .cat-image {
    line-height: 0;

    img {
      box-sizing: border-box;
      width: 100%;
      min-height: 100vh;
      object-fit: contain;
    }
  }

  .cat-video {
    line-height: 0;

    video {
      box-sizing: border-box;
      width: 100%;
      min-height: 100vh;
    }
  }

`

function CatImage(props) {

    return (
        <div className="cat-image">
            <img src={props.dataUrl} alt=""/>
        </div>
    )
}

function CatVideo(props) {

    return (
        <div className="cat-video">
            <video className="media" src={props.dataUrl} autoPlay loop poster="noposter"/>
        </div>
    )
}


export default function CatShot(props) {

    const catShot = props.state.catShot

    function handleDoubleClick() {
        loadNewCatShot(props.state, props.dispatch)
    }

    function getCatMedia() {
        if (catShot?.type?.startsWith('image')) {
            return (<CatImage dataUrl={catShot?.dataUrl}/>)
        }
        if (catShot?.type?.startsWith('video')) {
            return (<CatVideo dataUrl={catShot?.dataUrl}/>)
        }
    }

    return (
        <div className={_CatShot} onDoubleClick={handleDoubleClick}>
            {getCatMedia()}
        </div>
    )
}
