import React, { useContext, useEffect, useState } from "react";
import { BsPersonAdd } from "react-icons/bs";
import { Link } from "react-router-dom";
import "./MayKnow.css";
import { ApiContext } from "../../context/ApiContext";
import MayKnowNav from "../../components/mayknowComp/mayKnowNavbar/MayKnowNav.jsx";
import Talkers from "../../components/mayknowComp/mayKnowTalkers/Talkers.jsx";

const MayKnow = () => {
  const api = useContext(ApiContext);
  // to see search input
  const [searchMode, setSearchMode] = useState(false);
  // default search content
  const [filter, setFilter] = useState("");
  const [searched, setSearched] = useState([]);
  const [realChats, setRealChats] = useState([]);
  const [error, setError] = useState("");

  // Demo chats
  const noOfChat = [
    "Sia",
    "Marshmallow",
    "Alvin",
    "Sebastian",
    "Theophilus",
    "Ben",
    "Francis",
    "Sam",
    "Theresa",
    "Aloysius",
    "Rachel",
    "Joel",
  ];

  // Real Chats from api
  const usersGetter = async () => {
    try {
      const res = await api.get("/users/");
      setRealChats(res);
    } catch (error) {
      setError(error.message);
      console.error("Error getting users: ", error.message);
    }
  };

  // changes the searched array content
  const talk = (filter) => {
    // const searching = noOfChat.filter((chat) => {
    //   return chat.toLowerCase().includes(filter.toLowerCase());
    // });
    const searching = realChats.filter((chat) => {
      return chat?.data.name.toLowerCase().includes(filter.toLowerCase());
    });
    setSearched(searching);
  };

  // allows change of searched on changing input value
  useEffect(() => {
    usersGetter();
    talk(filter);
  }, [filter || []]);

  return (
    <div className="text-white may-know">
      <MayKnowNav
        searchMode={searchMode}
        setFilter={setFilter}
        filter={filter}
        setSearchMode={setSearchMode}
      />

      <main className="mt-5 ">
        <Link
          to="/sign-up "
          className="  text-secondary-emphasis text-decoration-none"
        >
          <div className="chat pt-1 pb-2 d-flex align-items-center bg-black gap-3 ps-3">
            <BsPersonAdd
              className="bg-white rounded-circle p-2 overflow-visible"
              style={{ fontSize: "35px" }}
            />
            <div className="div1 ps-0 me-3 text-white">
              <h6 className="mb-0">New Contact</h6>
            </div>
          </div>
        </Link>

        <p className="bg-black fw-bold ps-3 pt-2 mb-0 text-white-50">
          Talkers You May Know On Talk
        </p>
        <div className="bg-black pb-5">
          <p className=" text-white ps-4 bg-black">
            Couldn't Get People You may Know Due To:{" "}
            <i className=" text-danger fw-bold bg-black">{error}</i>
          </p>
          {/* Shows people if searched length is more than 0 */}
          {searched.length > 0 ? (
            searched.map((no, i) => <Talkers no={no} i={i} />)
          ) : (
            <p className="bg-black ms-4 fs-6">Sorry, no Search found 🥺🥺😞</p>
          )}
        </div>
      </main>
    </div>
  );
};

export default MayKnow;
