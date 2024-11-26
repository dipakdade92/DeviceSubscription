import React, { useState } from "react";
import { navItems } from "../../constants";
import { GoCheckCircleFill } from "react-icons/go";
import "./style.scss";
import { IFormPages } from "../../constants/types";

interface Iprop {
  formPages: IFormPages;
}

const Sidebar: React.FC<Iprop> = ({ formPages }) => {
  return (
    <>
      <div className="sidebar-section">
        <div>
          {navItems.map((item: string) => (
            <div
              className={`sidebar-links ${
                item === formPages.active ? "sidebar-active" : ""
              }  ${
               formPages.uncompleted.includes(item)
                  ? "sidebar-remain"
                  : ""
              }`}
            >
              <span>{item}</span>
              {formPages.completed.includes(item) && <GoCheckCircleFill />}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
