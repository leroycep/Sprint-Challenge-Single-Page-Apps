import React, { useState, useEffect } from "react";

export default function SearchForm(props) {
  const [searchBoxText, setSearchBoxText] = useState("");

  useEffect(() => {
    setSearchBoxText(props.search);
  }, [props.search]);

  const changeHandler = ev => {
    if (ev.target.name === "search") {
      setSearchBoxText(ev.target.value);
    }
  };

  const submitHandler = ev => {
    ev.preventDefault();
    props.setSearch(searchBoxText);
  };

  return (
    <section className="search-form">
      <form onSubmit={submitHandler}>
        <label>
          Query:{" "}
          <input
            type="text"
            name="search"
            value={searchBoxText}
            onChange={changeHandler}
          />
        </label>
        <button>Search</button>
      </form>
    </section>
  );
}
