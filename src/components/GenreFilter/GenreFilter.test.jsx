import React from "react";
import ReactDOM from "react-dom";
import GenreFilter from "./GenreFilter";

it("renders without crashing", () => {
  const div = document.createElement("div");

  const genres = [
    {
      id: 1,
      name: "Action"
    }
  ];

  const handleGenreChange = () => "This is a stub";

  ReactDOM.render(
    <GenreFilter
      genres={genres}
      selectedGenre=""
      handleGenreChange={handleGenreChange}
    />,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
