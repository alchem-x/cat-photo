export const initialState = {
    loading: false,
    catShot: undefined,
}

const reducers = {
    loading(state) {
        return {
            ...state,
            loading: true
        }
    },
    stopLoading(state) {
        return {
            ...state,
            loading: false
        }
    },
    setCatShot(state, action) {
        return {
            ...state,
            catShot: action.payload
        }
    }
}

export function reducer(state, action) {
    const handle = reducers[action.type]
    return typeof handle === 'function' ? handle(state, action) : state
}