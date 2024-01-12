import axios from "axios";
import { useState } from "react";

const Posts = () => {
  const [blogss, setBlogss] = useState([]);
  async function getBlogs() {
    const resp = await axios.post("api/getposts");
    setBlogss(resp.data.blogs);
  }
  return (
    <div>
      <div onClick={() => getBlogs()}>Blogs</div>
      <div>
        {blogss.length ? (
          blogss.map((blog: any) => (
            <div className="p-2">
              <div>Title:{blog.title}</div>
              <div>Content:{blog.content}</div>
              <div>Author:{blog.authorEmail}</div>
            </div>
          ))
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Posts;
