function Topics({ handleFilter }) {
  return (
    <div className="buttons">
      <button value="All" onClick={() => handleFilter("All")}>
        All
      </button>
      <button value="cooking" onClick={() => handleFilter("cooking")}>
        Cooking
      </button>
      <button value="coding" onClick={() => handleFilter("coding")}>
        Coding
      </button>
      <button value="football" onClick={() => handleFilter("football")}>
        Football
      </button>
    </div>
  );
}

export default Topics;
