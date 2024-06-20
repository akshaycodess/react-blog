import { useParams, useHistory } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
    const { id } = useParams();
    const { data:blog, isPending, error } = useFetch('http://localhost:8000/blogs/' + id);
    const redirect = useHistory();

    const handleDelete = (e) => {
      e.preventDefault();
      fetch('http://localhost:8000/blogs/' + blog.id, {
        method: "DELETE",
      }).then((res) => {
        if (res.status != 200) {
          console.log(res.status);
        }
        console.log("blog id "+ id +" has been deleted");
        // goes backward
        // redirect.go(-1);
        // goes to given path
        redirect.push('/');
      });
    };
  
    return (
      <div className="blog-details">
        { isPending && <div>loading...</div> }
        { error && <div>{ error }</div> }
        { blog && (<article>
            <h2>{ blog.title }</h2>
            <p>Written by: { blog.author }</p>
            <div>{ blog.body }</div>
            <button onClick={handleDelete}>Delete</button>
          </article>
        )}
      </div>
    );
}

export default BlogDetails;