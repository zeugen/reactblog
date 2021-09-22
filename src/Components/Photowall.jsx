import React from "react";
import Photo from "./Photo";

function Photowall(props) {
  console.log(props);
  const postsData = props.posts;

  return (
    <div className="photoGrid">
      {postsData.map((post, index) => (
        <Photo key={index} post={post} onRemovePhoto={props.onRemovePhoto} />
      ))}
    </div>
  );
}

export default Photowall;
