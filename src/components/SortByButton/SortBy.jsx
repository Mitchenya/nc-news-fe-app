import { useState } from "react";
import "./SortBy.css";

function SortBy({ handleSort }) {
  const [burger, setBurger] = useState(false);

  return (
    <div className="sort-by-container">
      <button onClick={() => setBurger(!burger)} className="burger-icon">
        &#9776;
      </button>

      {burger && (
        <div className="dropdown-menu">
          <button value="sortByAsc" onClick={() => handleSort("sortByAsc")}>
            A-Z
          </button>
          <button value="sortByDesc" onClick={() => handleSort("sortByDesc")}>
            Z-A
          </button>
          <button
            value="sortByVotesHighest"
            onClick={() => handleSort("sortByVotesHighest")}
          >
            Highest Votes
          </button>
          <button
            value="sortByVotesLowest"
            onClick={() => handleSort("sortByVotesLowest")}
          >
            Lowest Votes
          </button>
          <button
            value="sortByNewest"
            onClick={() => handleSort("sortByNewest")}
          >
            Newest
          </button>
          <button
            value="sortByOldest"
            onClick={() => handleSort("sortByOldest")}
          >
            Oldest
          </button>
          <button
            value="sortByCommentsHighest"
            onClick={() => handleSort("sortByCommentsHighest")}
          >
            Highest Comment Count
          </button>
          <button
            value="sortByCommentsLowest"
            onClick={() => handleSort("sortByCommentsLowest")}
          >
            Lowest Comment Count
          </button>
        </div>
      )}
    </div>
  );
}

export default SortBy;
