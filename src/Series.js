import React from "react";
import "./series.css";

const Series = ({ data }) => {
  return (
    <div className="table-contain">
      <table className="table table-hover ">
        <thead>
          <th className="table-heading" scope="col">
            #
          </th>
          <th className="table-heading" scope="col">
            Name
          </th>
          <th className="table-heading" scope="col">
            Url
          </th>
          <th className="table-heading" scope="col">
            Thumbnail
          </th>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <th scope="row">{index + 1}</th>
              <td className="series-title">{item.title}</td>
              <td>
                <a
                  target="_blank"
                  rel="noreferrer"
                  className="tag-link"
                  href={`${item.thumbnail.path}.${item.thumbnail.extension}`}
                >
                  {`${item.thumbnail.path}.${item.thumbnail.extension}`}
                </a>
              </td>
              <td>
                <img
                  src={`${item.thumbnail.path}.${item.thumbnail.extension}`}
                  alt="img"
                  className="image"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Series;
