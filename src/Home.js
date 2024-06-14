import { useState, useEffect } from "react";
import Bloglist from "./BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState(null);
    const [isPending, setisPending] = useState(true);

    // const [name, setName] = useState('mario');

    // runs on every render, can be used to fetch datas
    useEffect(() => {
        setTimeout(() => {
          fetch("http://localhost:8000/blogs")
            .then((res) => {
              return res.json();
            })
            .then((data) => {
              setBlogs(data);
              setisPending(false);
            });
        }, 1000);
    }, []);

    return (
    <div className="home">
        {isPending && <div>loading...</div>}
        {blogs && (<Bloglist blogs={blogs} title="All Blogs!" />)}
        {/* <Bloglist blogs={blogs.filter((blog) => blog.author === 'mario')} title="Mario's Blogs!" /> */}
        {/* <button onClick={() => setName('luigi')}>change name</button>
        <p>{ name }</p> */}
    </div>
    );
}

export default Home;
