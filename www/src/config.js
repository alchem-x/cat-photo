export const NANO_API = 'https://natrium.herokuapp.com/'

export function withNanoApi(endpoint) {
    return new URL(endpoint, NANO_API).toString()
}