import URL from "./url"

// index loader
export const indexLoader = async () => {
    const response = await fetch(URL)
    const cheese = await response.json()
    return cheese
}

export const showLoader = async ({params}) => {
    const id = params.id
    const response = await fetch(URL + id)
    const oneCheese = await response.json()
    return oneCheese
}