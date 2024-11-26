import React, { useState } from "react";
import "./style.scss";

interface Iprop {
  updateActiveForm : (arg: string) => void;
  currentForm: string;
}

const Footer: React.FC<Iprop> = ({ updateActiveForm, currentForm }) => {

  return (
    <>
      <div className="footer-body">
        <div>
          <button type="button" onClick={() => updateActiveForm(currentForm)}>Next</button>
        </div>
      </div>
    </>
  );
};

export default Footer;
