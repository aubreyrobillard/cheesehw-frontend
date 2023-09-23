import { redirect } from "react-router-dom";
import URL from "./url";

// Create (post) action
export const createAction = async({request}) => {
    // parse(converting data from one format to another) out the form data
    const formData = await request.formData();

    // construct body for the API call
    const newCheese = {
        name: formData.get("name"),
        origin_country: formData.get("origin_country"),
        type: formData.get("type")
    }
    console.log(newCheese)

    // make a request to create a cheese
    await fetch(URL, {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newCheese)
    })

    // redirect to the index page
    return redirect("/")

}




// Update (put) action
export const updateAction = async ({request, params}) => {
    const id = params.id

    const formData = await request.formData();
    const updatedCheese = {
        name: formData.get('name'),
        origin_country: formData.get('origin_country'),
        type: formData.get('type')
    }
    await fetch(URL + id, {
        method: 'put',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(updatedCheese)
    })

    return redirect(`/post/${id}`)

}




// Delete (delete) action
export const deleteAction = async ({params}) => {
    const id = params.id

    await fetch(URL + id, {
        method: "delete"
    })

    return redirect('/')
}