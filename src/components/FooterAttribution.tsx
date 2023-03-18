//metadata
import { footData } from ".";

const Attribution = ({ fmUrl = footData.fmUrl, devUrl = footData.devUrl }) => {
  return (
    <div className="footer--attribution">
      Challenge by{" "}
      <a
        href={fmUrl}
        target="_blank"
        aria-label="visit the challenge page"
        rel="noreferrer noopener"
      >
        Frontend Mentor
      </a>
      . Coded by{" "}
      <a
        href={devUrl}
        target="_blank"
        aria-label="visit the coder's webpage"
        rel="noreferrer noopener"
      >
        Bilal Türkmen
      </a>
      .
    </div>
  );
};

export default Attribution;
