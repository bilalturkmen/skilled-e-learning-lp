import data from "../data/footer-data.json";
import { Key } from "react";

const Attribution = () => {
  return (
    <div className="footer--attribution">
      {data.map(
        (
          fd: {
            beforeText: string;
            url: string;
            label: string;
            fromName: string;
          },
          index: Key
        ) => (
          <>
            {fd.beforeText}{" "}
            <a
              key={index}
              href={fd.url}
              target="_blank"
              aria-label={fd.label}
              rel="noreferrer noopener"
            >
              {fd.fromName}
            </a>
            .{" "}
          </>
        )
      )}
    </div>
  );
};

export default Attribution;
