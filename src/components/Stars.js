import "./StarStyle.css";


export default function Stars(props) {
  
  let style = props.style;
  let currentRating = style.stars;
  console.log(`Current Rating is : ${style.stars}`)

  


  return (
    <div>
    <label key={style.id}>
      <input
        type="radio"
        name="rating"
        value={currentRating}
      />
      <span
        className="star"
      >
        &#9733;
      </span>
    </label>
    </div>
  );
}