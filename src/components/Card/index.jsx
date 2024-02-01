import "./Card.css";
import Button from "../Button";

const Card = (props) => {
  return (
    <>
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
          integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA=="
          crossorigin="anonymous"
          referrerpolicy="no-referrer"
        />
        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/fontawesome-iconpicker/3.2.0/js/fontawesome-iconpicker.min.js"
          integrity="sha512-7dlzSK4Ulfm85ypS8/ya0xLf3NpXiML3s6HTLu4qDq7WiJWtLLyrXb9putdP3/1umwTmzIvhuu9EW7gHYSVtCQ=="
          crossorigin="anonymous"
          referrerpolicy="no-referrer"
        ></script>
        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/fontawesome-iconpicker/3.2.0/js/fontawesome-iconpicker.min.js"
          integrity="sha512-7dlzSK4Ulfm85ypS8/ya0xLf3NpXiML3s6HTLu4qDq7WiJWtLLyrXb9putdP3/1umwTmzIvhuu9EW7gHYSVtCQ=="
          crossorigin="anonymous"
          referrerpolicy="no-referrer"
        ></script>
      </head>
      <div className="card">
        <div class="image-div">
          <img className="image" src={props.src} />
        </div>
        <div className="details-div">
          <h2 className="heading">{props.title}</h2>
          <p className="rating">
            <i class="star-c fa fa-star-o" aria-hidden="true"></i>
            {props.rating}
          </p>
          <ul className="list">
            <li>{props.ram}</li>
            <li>{props.size}</li>
            <li>{props.camera}</li>
            <li>{props.battery}</li>
            <li>{props.processor}</li>
            <li>{props.description}</li>
          </ul>
        </div>
        <div className="price-div">
          <div className="assured">
            <h1>{props.crntprice}</h1>
          </div>
          <div className="price-p">
            <p>
              <span className="strike">{props.strikeprice}</span>
              <span className="green">&nbsp;{props.off}</span>
            </p>
            <p>{props.delivery}</p>
            <p className="green">{props.save}</p>
            <p className="green">{props.bankoff}</p>
          </div>
        </div>

        {/* <img className="image" src={props.src} /> */}
        {/* <h1>{props.head}</h1> */}
        {/* <p>{props.title}</p> */}
        {/* <Button text={props.btntext} /> */}
      </div>
    </>
  );
};
export default Card;
