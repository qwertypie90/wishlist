import { posts } from '../data';

const Post = () => {
  const post = posts[2];
  return (
    <div className="post">
      <img src={post.img} alt="" className="postImg" />
      <h1 className="postDesc">{post.desc}</h1>
      <p className="postLink">
        <a className="postLink2" href="{post.link}">
          {post.link}
        </a>
      </p>
    </div>
  );
};

export default Post;
