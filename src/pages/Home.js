import React from "react";
import Filter from "../components/Filter";
import Search from "../components/Search";

const Home = () => {
  return (
    <div>
      <section className="py-16">
        <Search />
        <Filter />
      </section>
    </div>
  );
};

export default Home;
