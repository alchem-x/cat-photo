import { withNanoApi } from '../config.js'

export async function getCatShot(exclude = '') {
    const params = new URLSearchParams()
    params.append('exclude', exclude)
    const response = await fetch(withNanoApi(`/api/cat/shot?${params}`))
    const result = await response.json()
    if (result.error && response.status !== 403) {
        throw new Error(result.error)
    }
    return result.payload
}