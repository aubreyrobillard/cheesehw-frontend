import Post from "../components/Post";
import { useLoaderData, Form } from "react-router-dom";


const Index = (props) => {
    const cheese = useLoaderData()
    
    return <>
    
    <div>
        <h3>Add a Cheese</h3>
        <Form method="POST" action="/create">
            <input type="text" name="name" placeholder="Cheese Name?"/>
            <input type="text" name="origin_country" placeholder="Country of Origin?"/>
            <input type="text" name="type" placeholder="What Kind of Cheese?"/>
            <input type="submit"/>
        </Form>
    </div>
    
    {cheese.map((cheese) => <Post post={cheese} key={cheese.id}/>)}
    
    </>
    
    
    
    
}

export default Index;