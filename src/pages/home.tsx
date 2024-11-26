import React, { useState } from "react";
import Header from "../components/header";
import Subscription from "../components/subscription";
import Sidebar from "../components/sidebar";
import "./style.scss";
import Footer from "../components/footer";
import Device from "../components/device";
import { IFormPages } from "../constants/types";
import { initialFormPages } from "../constants";

const HomePage = () => {
  const [ formPages, setFormPages ] = useState<IFormPages>(initialFormPages);

  const updateActiveForm = (pageName: string) => {
    if(pageName !== 'Device'){
      const completed = [...formPages.completed, pageName];
      const uncompleted = [...formPages.uncompleted];
      const active:string | any = uncompleted.shift();
      setFormPages({...formPages, active, uncompleted, completed});
    }
  }

  return (
    <div style={{ backgroundColor: "#FCFCFC" }}>
      <Header />
      <main className="main-section">
        <Sidebar formPages={formPages} />
        {formPages.active == 'Subscription'? <Subscription /> :
        <Device />}
      </main>
      <Footer updateActiveForm={updateActiveForm} currentForm={formPages.active}/>
    </div>
  );
};

export default HomePage;
