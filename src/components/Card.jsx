// &#x2765;
const Card = ({ post }) => {
  return (
    <div className="card">
      {/* <span className="link">{post.link}</span> */}
      <img src={post.img} alt="" className="img" />
      <p className="desc">{post.desc}</p>
      <button className="cardBtn"> see more &#x2765; </button>
    </div>
  );
};

export default Card;
