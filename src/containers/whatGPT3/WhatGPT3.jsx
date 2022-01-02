import React from "react";
import { Feature } from "../../components";
import "./whatGPT3.css";

const WhatGPT3 = () => {
  return (
    <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
      <div className="gpt3__whatgpt3-feature">
        <Feature
          title="What is GPT-3"
          text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab animi tempore similique mollitia officiis maiores ex placeat nobis voluptas, debitis aliquam odio quia impedit numquam dolore quidem a quam nemo."
        />
      </div>
      <div className="gpt3__whatgpt3-heading">
        <h1 className="gradient__text">
          The possibilities are beyond your imagination
        </h1>
        <p>Expore The Library</p>
      </div>
      <div className="gpt3__whatgpt3-container">
        <Feature
          title="Chatbots"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem numquam aperiam."
        />
        <Feature
          title="Knowledgebase"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem numquam aperiam."
        />
        <Feature
          title="Education"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem numquam aperiam."
        />
      </div>
    </div>
  );
};

export default WhatGPT3;
