import default_news from "../assets/default_news.jpg";

const NewsItem = ({ title, description, src, url }) => {
  return (
    <div
      className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2"
      style={{ maxWidth: "300px" }}
    >
      <img
        src={src ? src : default_news}
        style={{ height: "200px" }}
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">{title.slice(0, 40)}</h5>
        <p className="card-text">
          {description
            ? description.slice(0, 90)
            : "The Greenfield Community Garden, a local initiative dedicated to eco-friendly practices, has been honored with a prestigious national award for its outstanding contributions to sustainable agriculture."}
        </p>
        <a href={url} className="btn btn-primary">
          Read More
        </a>
      </div>
    </div>
  );
};

export default NewsItem;
