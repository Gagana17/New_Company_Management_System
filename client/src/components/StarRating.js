// import React, { useState } from "react";
// import "./cssForComponents/StarRatingStyles.css";

// function StarRating() {
//   const [rating, setRating] = useState(null);
//   const [hover, setHover] = useState(0);
//   return (
//     <div className="star-rating">
//       {/* declare array for generate 5 stars */}
//       {[...Array(5)].map((starIcon, index) => {
//         index += 1;
//         return (
//           <button
//             type="button"
//             key={index}
//             className={index <= (hover || rating) ? "on" : "off"}
//             onClick={() => setRating(index)}
//             onMouseEnter={() => setHover(index)}
//             onMouseLeave={() => setHover(rating)}
//           >
//             <span className="star startProp" size="100%">
//               &#9733;
//             </span>
//           </button>
//         );
//       })}
//       <h6>Hello</h6>
//     </div>
//   );
// }

// export default StarRating;
