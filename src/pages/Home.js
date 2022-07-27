import React from "react";
import Jumbotron from "../components/cards/Jumbotron";
import NewArrivals from "../components/home/NewArrivals";
import BestSellers from "../components/home/BestSellers";
import CategoryList from "../components/category/CategoryList";
import SubList from "../components/sub/SubList";

const Home = () => {
  return (
    <>
      <div className="jumbotron text-primary h1 font-weight-bold p-2 mt-3 mb-3 display-4 text-center">
        <Jumbotron text={["Latest Courses", "New Arrivals"]} />
      </div>
{/*       <h4 className="text-center font-weight-bold p-1 mt-2 mb-2 display-4 jumbotron">
        Categories
      </h4>
      <CategoryList /> */}


      <h4 className="text-center font-weight-bold p-2 mt-3 mb-3 display-5 jumbotron">
          New Arrivals
      </h4>
      <NewArrivals />

      <h4 className="text-center font-weight-bold p-2 mt-3 mb-3 display-5 jumbotron">
            Best Sellers
      </h4>
      <BestSellers />

      <h4 className="text-center font-weight-bold p-2 mt-3 mb-3 display-5 jumbotron">
        Sub Categories
      </h4>
      <SubList />

      <br />
      <br />
    </>
  );
};

export default Home;
