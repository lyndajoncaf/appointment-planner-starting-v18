import React from "react";
import { Tile } from "../tile/Tile";


export const TileList = ({ data }) => {
  return (
    <div>
      {data.map(({ name, ...rest }, index) => (
        <Tile
          key={index}
          name={name}
          {...rest}
        />
      ))}
    </div>
  );
};
TileList.defaultProps = {
  data: [], // Provide a default empty array if data is not provided
};