import "./Blog.css";

function Blog() {
  var title = "10 Tips for Effective Time Management";
  var author = "John Doe";
  var description = "In today's fast-paced world, effective time management is crucial for success. Learn 10 tips to improve your time management skills and boost productivity.";
  var image = "https://via.placeholder.com/150";

  return (
    <div
      className="blog-container"
      style={{
        width: "500px",
        margin: "50px auto",
        padding: "20px"
      }}
    >
      <img
        src={image}
        alt="Blog"
        className="blog-image"
      />

      <h1 style={{ color: "darkblue", fontSize: "28px" }}>
        {title}
      </h1>

      <h3 style={{ color: "gray" }}>
        Author: {author}
      </h3>

      <p style={{ fontSize: "16px", lineHeight: "1.6" }}>
        {description}
      </p>
    </div>
  );
}

export default Blog;