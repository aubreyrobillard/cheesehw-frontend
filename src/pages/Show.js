import { Link, useLoaderData, Form } from "react-router-dom";

const Show = (params) => {

    const post = useLoaderData();
    const id = post.id

    const div = {
        textAlign: "center",
        color: "hotPink",
        width: "80%",
        border: "30pt solid coral"
    }
    
    return <div style={div}>
        <h1>{post.name}</h1>
        <h2>{post.origin_country}</h2>
        <h2>{post.type}</h2>


        <Form method="POST" action={`/update/${id}`}>
            <h4>Update Cheese:</h4>
            <input type="text" name="name" defaultValue={post.name}/>
            <input type="text" name="origin_country" defaultValue={post.origin_country}/>
            <input type="text" name="type" defaultValue={post.type}/>
            <input type="submit"/>
        </Form>

        <Form method="POST" action={`/delete/${id}`}>
            <button>Delete</button>
        </Form>

        <Link to='/'><button>Back to Index</button></Link>


    </div>
}

export default Show;