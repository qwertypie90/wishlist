// &#x2765;
import { Link } from 'react-router-dom';

const Card = ({ post }) => {
  return (
    <div className="card">
      {/* <span className="link">{post.link}</span> */}
      <Link className="link" to={`/post/${post.id}`}>
        <img src={post.img} alt="" className="img" />
        <p className="desc">{post.desc}</p>
        <button className="cardBtn"> see more &#x2765; </button>
      </Link>
    </div>
  );
};

export default Card;
