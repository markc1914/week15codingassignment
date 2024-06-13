import "./StarStyle.css";


export default function Stars(props) {

  let style = props.style;
  let currentRating = style.stars;
  console.log(`Current Rating is : ${style.stars}`)

  let stars=[];
  for (let i=1;i<=currentRating;i++){
    let element = <span key={i} className="star">&#9733;</span>;
    stars.push(element);
  }


  return (
    <label key={style.id}>
      <input
        type="radio"
        name="rating"
        value={currentRating}
      />
      {stars}
    </label>
  );
}
