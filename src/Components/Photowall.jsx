import React from "react";
import Photo from "./Photo";
import PropTypes from "prop-types";

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

Photowall.propTypes = {
  posts: PropTypes.array.isRequired,
  onRemovePhoto: PropTypes.func.isRequired,
};

export default Photowall;
