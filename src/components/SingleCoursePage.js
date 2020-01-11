import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { onCourseChange } from "../store/Food";
import SubmenuItem from "./SubmenuItem";

const SingleCoursePage = () => {
  const courses = useSelector(state => state.foodData.categories);
  const activeCourse = useSelector(state => state.foodData.activeTab);
  const subCategory = useSelector(state => state.foodData.subCategory);
  const storeItems = useSelector(state => state.foodData.items);
  const dispatch = useDispatch();

  const renderCourses = courses => {
    return courses.map((course, index) => (
      <div
        className={
          "course-item " + (activeCourse.name === course.name ? "active" : "")
        }
        onClick={() => dispatch(onCourseChange(course))}
        key={index}
      >
        {course.name}
      </div>
    ));
  };

  const menuItems = (subItem, storeItemLists) => {
    return storeItemLists.filter(
      storeItem =>
        storeItem.categoryId === subItem.categoryId &&
        storeItem.subCategoryId === subItem.id
    );
  };

  const renderSubCourses = (courses, subCategory) => {
    return courses.map(course => {
      return subCategory
        .filter(subItem => subItem.categoryId === course.id)
        .map((res, index) => {
          return (
            <div
              className={
                "submenu-wrapper " +
                (res.categoryId === activeCourse.id ? "active" : "")
              }
              key={index}
            >
              <SubmenuItem item={res} childItems={menuItems(res, storeItems)} />
            </div>
          );
        });
    });
  };

  return (
    <div className="course-page">
      <div className="back-btn-container">
        <Link to="/">
          <button className="back-button">Back</button>
        </Link>
      </div>
      <div className="course-items-wrapper"> {renderCourses(courses)}</div>

      <div className="sub-category-wrapper">
        {renderSubCourses(courses, subCategory)}
      </div>
    </div>
  );
};

export default SingleCoursePage;
