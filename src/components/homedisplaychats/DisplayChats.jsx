// Whenever there's data ask chat gpt why this code runs.

import "./DisplayChats.css";
import { Link } from "react-router-dom";
import dater from "../../demo/demoReq";
import { BsPerson } from "react-icons/bs";

const dateFunction = (dateStr) => {
  let convertedDate = new Date(dateStr);
  return convertedDate;
};

const DisplayChats = ({ searched }) => {
  return (
    <div className="display-chats  pb-5 px-0">
      {/* Shows people if searched length is more than 0 */}
      {searched.length > 0 ? (
        searched.map((req, i) => (
          <Link
            to={`/chat/:${i * 2345681879 + 913084797478173}`}
            key={i}
            className=" text-decoration-none"
          >
            <div className="chat pt-1 pb-2 d-flex align-items-center   border-2 border-white border-bottom gap-3 position-relative">
              <BsPerson
                className="border-1 p-1 border-white border rounded-circle text-white bg-white bg-opacity-50"
                style={{
                  minHeight: "30px",
                  minWidth: "30px",
                }}
                alt="person img"
              />
              <div className="div1 ps-0 me-3 text-white">
                <h6 className="mb-0">{req.from}</h6>
                <p
                  className=" text-white-50"
                  style={{ fontSize: "13px", marginBlockEnd: "3px" }}
                >
                  {req.recentChat.length < 40
                    ? req.recentChat
                    : `${req.recentChat.slice(0, 40)}...`}
                </p>
              </div>
              <div className="div2 mt-0 text-white-50 position-absolute end-0">
                {dateFunction(req.time).toString() === Date()
                  ? "Now"
                  : dater(req.time) === "Yesterday"
                  ? "Yesterday"
                  : dateFunction(req.time).getTime() <
                      dateFunction(Date()).getTime() &&
                    dateFunction(req.time).toDateString().slice(4) ===
                      dateFunction(Date()).toDateString().slice(4)
                  ? dateFunction(req.time).toISOString().slice(11, 16) //normal time hh:mm:ss
                  : dateFunction(req.time).getTime() <
                      dateFunction(Date()).getTime() &&
                    dateFunction(req.time).toDateString().slice(4) !==
                      dateFunction(Date()).toDateString().slice(4)
                  ? dateFunction(req.time).toISOString().slice(0, 10)
                  : req.time.slice(0, 10).replaceAll(" ", "/")}
              </div>
            </div>
          </Link>
        ))
      ) : (
        <p className=" text-white pt-5 ms-4 fs-6">
          Sorry, no Search found 🥺🥺😞
        </p>
      )}
    </div>
  );
};

export default DisplayChats;
