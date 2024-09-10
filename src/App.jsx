import React from "react";
import Buttons from "./assets/components/buttons";
import "./App.css";

import { MoveUpRight, User } from "lucide-react";

const App = () => {
  return (
    <div className="container">
      <div className="header">
        <div className="tabReader">
          <div className="tab">Tab</div>
          <div className="reader">Reader</div>
        </div>
        <div className="navLinks">
          <span>Home</span>
          <span>About</span>
          <span>Blog</span>
          <span>Contact us</span>
          <Buttons title={"Sign in"} />
        </div>
      </div>

      <div className="cont">
        <div className="left">
          <div className="aboutTag">
            <img src="\image\me.jpg" alt="" height={180} width={180} />
            <div className="about">
              <span className="name">ENDWELL HERITAGE</span>
              <p>Writer</p>
            </div>

            <div className="lowerDetail">
              <p>
                Endwell Heritage is a Poet and Author of Several Sci-Fi and
                Fantasy Novels.
              </p>
            </div>
          </div>

          <div className="callToActn">
            <span>Get In Touch</span>
            <div className="icon">
              <MoveUpRight width={12} height={12} strokeWidth={4} />
            </div>
          </div>
        </div>

        <div className="right">
          <div className="head">
            <h1>CONTENT</h1>
            <h1>WRITER</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;

const words = [
  {
    id: 1,
    note: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque, dignissimos tempora. Enim soluta consectetur quas molestiae at unde, vitae dolore sed quisquam repudiandae odit ullam quod, quasi quaerat ad voluptatem!",
  },
  {
    id: 2,
    note: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque, dignissimos tempora. Enim soluta consectetur quas molestiae at unde, vitae dolore sed quisquam repudiandae odit ullam quod, quasi quaerat ad voluptatem!",
  },
];
