import React from "react";
import { useSelector, useDispatch } from "react-redux";

import Card from "./NewCard";

import OutlinedCard from "./OutlinedCard";

const HomePage = () => {
  const items = useSelector(state => state.foodData.items);
  const courses = useSelector(state => state.foodData.categories);
  const dispatch = useDispatch();
  const itemsToDisplay = items.slice(0, 4);

  const renderItems = items => {
    return items.map((item, index) => <Card key={index} item={item} />);
  };

  const renderCourses = courses => {
    return courses.map((course, index) => (
      <OutlinedCard key={index} course={course} />
    ));
  };

  return (
    <div className="home-page">
      <div className="heading">
        <h1>WTF Menu</h1>
        <small>(Where's The Food MENU)</small>
      </div>

      <br />
      <h2>Today's Special</h2>
      <div className="card-wrapper">{renderItems(itemsToDisplay)}</div>
      <h2>Courses</h2>
      <div className="row">
        <div className="courses-wrapper">{renderCourses(courses)}</div>
      </div>
    </div>
  );
};

export default HomePage;
