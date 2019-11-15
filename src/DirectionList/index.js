import React from "react";

const DirectionList = props => {
  const { directions } = props;
  return (
    <div className="direction-block d-flex align-items-center justify-content-start mt-3 mb-3">
      <div className="direction-block__title">Направления:</div>
      <div className="direction-block__list">
        <ul className="d-flex align-items-center justify-content-start">
          {directions &&
            directions.map(direction => {
              return (
                <li className="mr-3">
                  <a href="test">{direction}</a>
                </li>
              );
            })}
        </ul>
      </div>
      <div />
    </div>
  );
};

export default DirectionList;
