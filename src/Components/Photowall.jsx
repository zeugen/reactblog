import React from "react";
import Photo from "./Photo";

function Photowall(props) {
  const postsData = props.posts;
  console.log(postsData);

  return (
    <div className="photoGrid">
      {postsData.map((post, index) => (
        <Photo key={index} post={post} />
      ))}
    </div>
  );
}
// class Photowall extends Component {
//   render(props) {
//     const postsData = this.props.posts;
//     console.log(postsData);

//     return (
//       <div className="photoGrid">
//         {postsData.map((post, index) => (
//           <Photo key={index} post={post} />
//         ))}
//       </div>
//     );
//   }
// }

export default Photowall;
