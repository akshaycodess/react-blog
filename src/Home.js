import { useState, useEffect } from "react";
import Bloglist from "./BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState([
    { title: "My new website", body: "lorem ipsum...", author: "mario", id: 1 },
    { title: "Welcome party!", body: "lorem ipsum...", author: "yoshi", id: 2 },
    { title: "Web dev top tips", body: "lorem ipsum...", author: "mario", id: 3 },
    ]);

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }

    // runs on every render, can be used to fetch datas
    useEffect(() => {
        console.log(blogs)
    });

    return (
    <div className="home">
        <Bloglist blogs={blogs} title="All Blogs!" handleDelete={handleDelete} />
        {/* <Bloglist blogs={blogs.filter((blog) => blog.author === 'mario')} title="Mario's Blogs!" /> */}
    </div>
    );
}

export default Home;
