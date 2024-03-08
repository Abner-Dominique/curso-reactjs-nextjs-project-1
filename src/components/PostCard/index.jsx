import './styles.css';

export const PostCard = ({title, body, id, cover}) => (
    <div className="post">
      <img src={cover} alt="post.title" />
      <div className='post-content'>
        <h2> {title} {id} </h2>
        <p>{body}</p>
      </div>
    </div>
);