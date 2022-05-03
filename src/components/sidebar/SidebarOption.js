import React from "react";
import "../../styles/sidebar/sidebar-option.scss";

const SidebarOption = ({ title }) => {
  return (
    <div className="sidebarOptions">
      <div className="option__container">
        <label htmlFor="gender">Gender</label>
        <select id="gender" name="gender">
          <option value=""></option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>
      <div className="option__container">
        <label htmlFor="size">Size</label>
        <select id="size" name="size">
          <option value=""></option>
          <option value="s">S</option>
          <option value="m">M</option>
          <option value="l">L</option>
          <option value="xl">XL</option>
          <option value="xxl">XXL</option>
        </select>
      </div>
      <div className="option__container">
        <label htmlFor="grade">Grade</label>
        <select id="grade" name="grade">
          <option value=""></option>
          <option value="grade 1">Grade 1</option>
          <option value="grade 2">Grade 2</option>
          <option value="grade 3">Grade 3</option>
        </select>
      </div>
      <div className="option__container">
        <label htmlFor="cars">Color</label>
        <select id="gender" name="gender">
          <option value="male"></option>
          <option value="male">Red</option>
          <option value="male">Blue</option>
          <option value="male">White</option>
          <option value="male">Black</option>
          <option value="male">Yellow</option>
        </select>
      </div>
      <div className="option__container">
        <label htmlFor="cars">Type</label>
        <select id="gender" name="gender">
          <option value="male"></option>
          <option value="male">Short</option>
          <option value="male">Three-quarter</option>
          <option value="male">Long</option>
        </select>
      </div>
      <div className="option__container">
        <label htmlFor="cars">Vendor</label>
        <select id="gender" name="gender">
          <option value="male"></option>
          <option value="male">Thrifted Labels</option>
          <option value="male">Barnirush</option>
          <option value="male">Lolly wearsh</option>
        </select>
      </div>
      <div className="option__container">
        <label htmlFor="cars">Price</label>
        <select id="gender" name="gender">
          <option value="male"></option>
          <option value="male">Lowest - Highest</option>
          <option value="male">Highest - Lowest</option>
        </select>
      </div>
    </div>
  );
};

export default SidebarOption;
