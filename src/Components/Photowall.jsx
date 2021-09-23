import React from "react";
import Photo from "./Photo";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Photowall(props) {
  console.log(props);
  const postsData = props.posts;

  return (
    <div>
      {/* <button className="addIcon" onClick={props.onViewPhoto}> </button> */}
      <Link className="addIcon" to="/AddPhoto"></Link>
      <div className="photoGrid">
        {postsData
          .sort(function (x, y) {
            return y.id - x.id;
          })
          .map((post, index) => (
            <Photo
              key={index}
              post={post}
              onRemovePhoto={props.onRemovePhoto}
            />
          ))}
      </div>
    </div>
  );
}

Photowall.propTypes = {
  posts: PropTypes.array.isRequired,
  onRemovePhoto: PropTypes.func.isRequired,
};

export default Photowall;
