import React, { useState } from "react";

const SearchFilter = (props) => {
  const [text, setText] = useState("");

  const onChange = (q) => {
    props.getQuery(q);
    setText(q);
  };

  return (
    <section className="searchFilter">
      <input
        className="form-control"
        type="text"
        value={text}
        placeholder="enter name here"
        onChange={(e) => onChange(e.target.value)}
      />
    </section>
  );
};

export default SearchFilter;
