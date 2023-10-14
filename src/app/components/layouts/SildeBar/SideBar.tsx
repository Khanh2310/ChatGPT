import Image from "next/image";
import React from "react";
import chatGPTLogo from "../../../../../public/ChatGPT_logo.svg.png";
export const SideBar = () => {
  return (
    <>
      <div className="sidebar">
        <div className="upperSide">
          <div className="upperSideTop">
            <Image src={chatGPTLogo} alt="" className="logo" />
            <span className="brand">ChatGPT</span>

            <button className="midBtn">
              <Image src="" alt="" className="addBtn" />
              New Chat
            </button>
            <div className="upperSideBarBottom">
              <button className="query">
                <Image src="" alt="" />
                What is Programming ?
              </button>
              <button className="query">
                <Image src="" alt="" />
                What is Programming ?
              </button>
            </div>
          </div>
        </div>
        <div className="lowerSide"></div>
      </div>
      <div className="main"></div>
    </>
  );
};
