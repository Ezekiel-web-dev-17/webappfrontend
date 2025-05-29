import React from 'react'
import react from '../../assets/react.svg'
import {Link} from 'react-router-dom'
import "./ChatDetails.css"
import {  BsCamera, BsChevronLeft,    BsPaperclip,  BsPlus,  BsSend } from 'react-icons/bs'

const ChatDetails = () => {
  return (
    <div>
      <nav className="chat-nav d-flex align-items-center px-3 py-2">
        <Link to="/">
          <BsChevronLeft className="fs-5 me-2" />
        </Link>

        <div className="chat bg-transparent border-0 d-flex gap-3 align-items-center">
          <img className="bg-transparent" src={react} alt="" style={{width: "25px", height: "25px"}} />
          <div className="div1 bg-transparent">
            <h5 className=" fs-6 bg-transparent mb-0">HomeChat</h5>
            <p className="bg-transparent mb-0 fs-6">IAM-ELIMONI: 🤣🤣</p>
          </div>
        </div>
      </nav>

      <main className='pt-4'>
        {/* from */}
        
            {/* To */}
        <section className="ms-0 me-5 px-3">
          <div
            className=""
            style={{
              borderRadius: "10px 10px 10px 0px / 10px 10px 10px 0px",
              backgroundColor: "#444",
            }}
          >
            <p className="mb-0 px-3 pt-2 bg-transparent text-wrap">
              I am Home. Quit Looking for me.
            </p>
            <span className=" text-end ">
              <p className="time mb-0 pe-3 bg-transparent">4:56 PM </p>
            </span>
          </div>
        </section>
      </main>

      <footer className="text-sender position-absolute py-2">
        <BsPlus className="fs-1 mx-2" />
        <form
          className="w-100 d-flex justify-content-between align-items-center me-3"
        >
          <textarea cols="500"
            className=" placeholder-wave border-0 px-3 py-1 rounded w-100 me-5"
            placeholder="Message"
            type="text"
          ></textarea>
          <button
            className="send-btn rounded-circle border-0 ms-4" 
            onClick={() => {
              let textMap = [document.querySelector("textarea").value]

              const crux = document.querySelector('main')

              alert(textMap[0])

             textMap.forEach((val) => {
              return crux.innerHTML = `<section className="ms-5 me-0 px-3 mb-3">
            <div
              className=""
              style={{
                borderRadius: "10px 10px 0px 10px / 10px 10px 0px 10px",
                backgroundColor: "#eee",
                color: "#000",
              }}
              >
              <p className="mb-0 px-3 pt-2 bg-transparent text-wrap text-black">
                ${val}
              </p>
              <span className=" text-end">
                <p className="time mb-0 pe-3 bg-transparent text-black">
                  4:55 PM
                </p>
              </span>
            </div>
          </section>
  `;
              })
            }}
          >
            <BsSend className="send-btn-img m-2" />
          </button>
        </form>
        <BsPaperclip className="clip fs-6 text-white-50 position-absolute" />
        <BsCamera className="send-camera position-absolute" />
      </footer>
    </div>
  );
}

export default ChatDetails