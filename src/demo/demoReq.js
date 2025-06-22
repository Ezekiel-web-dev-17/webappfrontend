import react from "../assets/react.svg";

export const demoReq = [
  {
    img: react,
    from: "Ezekiel",
    recentChat: "Hello📞📞",
    time: "2025-06-15T17:45:05.137Z",
  },
  {
    img: react,
    from: "Overcome Theresa",
    recentChat: "Ezi can you switch your course to Nursing?",
    time: Date(),
  },
  {
    img: react,
    from: "Theophilus",
    recentChat: "Ezi, read my article ooo",
    time: "2025-06-20T11:45:05.137Z",
  },
  {
    img: react,
    from: "Onumajuru",
    recentChat: "Okay ma, I will.",
    time: "2025-06-16T15:23:40",
  },
  {
    img: react,
    from: "Sis. Martha",
    recentChat: "Will there be meeting tomorrow?",
    time: "2025-02-14T21:06:05.137Z",
  },
  {
    img: react,
    from: "Mr. Akin",
    recentChat: "Thank you sir.",
    time: "2025-06-15T21:06:05.137Z",
  },
  {
    img: react,
    from: "Musa David",
    recentChat: "Yes, I have seen it.",
    time: "2025-05-16T11:47:32.351Z",
  },
  {
    img: react,
    from: "Tech Studio",
    recentChat:
      "Congratulations, you made it to the end of the internship programme.🎊🎊🎊",
    time: "2025-06-16T21:48:14.037Z",
  },
  {
    img: react,
    from: "Lauren Jude",
    recentChat: "Thank you for the code.",
    time: "2025-04-20T21:45:39.699Z",
  },
];

function dater(dateToCheck) {
  // const currentDate = new Date(Date()).toISOString().slice(0, 10).split("-");
  // const check = new Date(dateToCheck).toISOString().slice(0, 10).split("-");

  // let a = 0;
  // for (let i = 0; i < check.length; i++) {
  //   if (check[i] === currentDate[i]) {
  //     a += 1;
  //   }
  // }

  // return a === 2 ? "Yesterday" : "IDK";

  const currentDate = new Date();
  const transformDate = new Date(dateToCheck);

  if (transformDate.getDate() === currentDate.getDate() - 1) {
    return "Yesterday";
  } else {
    return "IDK";
  }
}

export default dater;
