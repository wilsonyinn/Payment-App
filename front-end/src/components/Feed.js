import React from "react";
import { useEffect } from "react";

const Feed = () => {
  const [feedData, setFeedData] = React.useState([]);

  const handleAdd = (data, arr, setter) => {
    setter((arr) => [...arr, data]);
  };

  useEffect(() => {
    const settings = {
      method: "get",
    };
    fetch("/getFeed", settings)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        data.forEach((element) => {
          console.log(element);
          handleAdd(element, feedData, setFeedData);
          console.log(feedData);
        });
      })
      .catch((e) => console.log(e));
  }, []);
  console.log(feedData);

  return (
    <div>
      {feedData.map((element, index) => (
        <p key={index}>
          {element.from} sent {element.to} ${element.amount} <br></br>
          Payment Type: {element.type} <br></br>
          Message: {element.note} <br></br>
        </p>
      ))}
    </div>
  );
};

export default Feed;
