// old way to get passed parameters
// const Bloglist = (props) => {
//   const blogs = props.blogs;
//   const title = props.title;
// new/clean way to get passed parameters
const Bloglist = ({ blogs, title, handleDelete }) => {
  return (
    <div className="blog-list">
      <h2>{title}</h2>
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h2>{blog.title}</h2>
          <p>Written by: {blog.author}</p>
          <button onClick={() => handleDelete(blog.id)}>delete blog</button>
        </div>
      ))}
    </div>
  );
};

export default Bloglist;
