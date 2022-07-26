import React from "react";
import Jumbotron from "../components/cards/Jumbotron";
import NewArrivals from "../components/home/NewArrivals";
import BestSellers from "../components/home/BestSellers";
import CategoryList from "../components/category/CategoryList";
import SubList from "../components/sub/SubList";

const Home = () => {
  return (
    <>
      <div className="jumbotron text-primary h1 font-weight-bold text-center">
        <Jumbotron text={[ "New Arrivals","Latest Courses", "Best Sellers"]} />
      </div>
{/*       <h4 className="text-center font-weight-bold p-1 mt-2 mb-2 display-4 jumbotron">
        Categories
      </h4>
      <CategoryList /> */}


      <h4 className="text-center font-weight-bold p-3 mt-5 mb-5 display-4 jumbotron">
        New Arrivals
      </h4>
      <NewArrivals />

      <h4 className="text-center font-weight-bold p-3 mt-5 mb-5 display-4 jumbotron">
        Best Sellers
      </h4>
      <BestSellers />

      

      <h4 className="text-center font-weight-bold p-3 mt-5 mb-5 display-4 jumbotron">
        Sub Categories
      </h4>
      <SubList />

      <br />
      <br />
    </>
  );
};

export default Home;
