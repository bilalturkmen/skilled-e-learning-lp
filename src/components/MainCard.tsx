import CardData from "../data/card-data.json";

const Card = () => {
  return (
    <>
      {CardData.map((data, index) => (
        <div key={index} className="main--card">
          <img src={data.icon} alt="" />
          <h3>{data.title}</h3>
          <p>{data.content} </p>
          <a href="#" aria-label="Go to course detail">
            {data.link}
          </a>
        </div>
      ))}
    </>
  );
};

export default Card;
