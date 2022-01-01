import { getCatShot } from './apis/cat.js'

function blobToBase64(blob) {
    return new Promise((resolve, _) => {
        const reader = new FileReader()
        reader.addEventListener('loadend', () => {
            resolve(reader.result)
        })
        reader.readAsDataURL(blob)
    })
}

async function fetchDataUrl(url) {
    const response = await fetch(url)
    const blob = await response.blob()
    return await blobToBase64(blob)
}

export default async function loadNewCatShot(state, dispatch) {
    dispatch({ type: 'loading' })
    const catShot = await getCatShot(state.catShot?.key)
    const dataUrl = await fetchDataUrl(catShot.url)
    dispatch({
        type: 'setCatShot',
        payload: {
            ...catShot,
            dataUrl,
        },
    })
    dispatch({ type: 'stopLoading' })
}