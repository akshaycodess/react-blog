import { useState, useEffect } from "react";
import Bloglist from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
  const { data: blogs, isPending, error } = useFetch('http://localhost:8000/blogs');
    // const [name, setName] = useState('mario');

    return (
    <div className="home">
        {error && <div>{ error }</div>}
        {isPending && <div>loading...</div>}
        {blogs && (<Bloglist blogs={blogs} title="All Blogs!" />)}
        {/* <Bloglist blogs={blogs.filter((blog) => blog.author === 'mario')} title="Mario's Blogs!" /> */}
        {/* <button onClick={() => setName('luigi')}>change name</button>
        <p>{ name }</p> */}
    </div>
    );
}

export default Home;
