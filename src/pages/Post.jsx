import { posts } from '../data';
import { useLocation } from 'react-router';

const Post = () => {
  const location = useLocation();
  const path = location.pathname.split('/')[2];

  const post = posts.find(p => p.id.toString() === path);

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
