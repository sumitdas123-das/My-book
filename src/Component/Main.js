import React from "react";
import list from "./MenuApi";
import Cards from "./Cards";

const Main = ({handleclick}) => {
  return (
    <div>
      <section>
        {list.map((item) => {
          return <Cards item={item} handleclick={handleclick}/>;
        })}
      </section>
    </div>
  );
};

export default Main;