"use client";
import Image from "next/image";
import chatGPTLogo from "../../../../../public/chatgpt.svg";

import addBtn from "../../../../../public/add-30.svg";
import msgIcon from "../../../../../public/message.svg";
import home from "../../../../../public/home.svg";
import saved from "../../../../../public/bookmark.svg";
import rocked from "../../../../../public/rocket.svg";
import sendBtn from "../../../../../public/send.svg";
import userIcon from "../../../../../public/user.jpg";
import gptImgLogo from "../../../../../public/./ChatGPT_logo.svg.png";
import { sendMessageToOpenAI } from "app/openai";
import { useState } from "react";
export const SideBar = () => {
  const [send, setSend] = useState("");
  const handleSendMessage = async () => {
    const res = await sendMessageToOpenAI(send);
    console.log(res);
  };
  return (
    <>
      <div className="sidebar">
        <div className="upperSide">
          <div className="upperSideTop">
            <div className="mb-8">
              <Image src={chatGPTLogo} alt="" className="logo inline-block" />
              <span className="brand">ChatGPT</span>
            </div>
            <button className="midBtn flex items-center">
              <Image src={addBtn} alt="" className="addBtn" />
              <span>New Chat</span>
            </button>
            <div className="upperSideBarBottom">
              <button className="query flex items-center">
                <Image src={msgIcon} alt="" />
                What is Programming ?
              </button>
              <button className="query flex items-center">
                <Image src={msgIcon} alt="" />
                How to use an API ?
              </button>
            </div>
          </div>
        </div>
        <div className="lowerSide">
          <div className="listItems">
            <Image src={home} alt="" className="listitemsImg" />
            Home
          </div>
          <div className="listItems">
            <Image src={saved} alt="" className="listitemsImg" />
            Saved
          </div>
          <div className="listItems">
            <Image src={rocked} alt="" className="listitemsImg" />
            Upgrade to PRO
          </div>
        </div>
      </div>
      <div className="main">
        <div className="chats">
          <div className="chat">
            <Image
              src={userIcon}
              alt="User"
              className="w-20 h-20 object-cover chatImg"
            />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
              perspiciatis, totam inventore culpa voluptas odio in? Doloremque
              quaerat eos delectus, velit iste consectetur eveniet sint quasi
              ipsam necessitatibus, nemo veritatis.
            </p>
          </div>
          <div className="chat bot">
            <Image src={gptImgLogo} alt="GPT" className="w-20 h-20 chatImg" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
              perspiciatis, totam inventore culpa voluptas odio in? Doloremque
              quaerat eos delectus, velit iste consectetur eveniet sint quasi
              ipsam necessitatibus, nemo veritatis.
            </p>
          </div>
        </div>
        <div className="chatFooter">
          <div className="inp">
            <input
              type="text"
              placeholder="Send a message"
              value={send}
              onChange={(e) => setSend(e.target.value)}
            />
            <button className="send">
              <Image src={sendBtn} alt="Send" onClick={handleSendMessage} />
            </button>
          </div>
          <p>
            ChatGPT may produce inaccurate information about people, places, or
            facts. ChatGPT August 20 Version
          </p>
        </div>
      </div>
    </>
  );
};
