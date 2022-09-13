import star from "../assets/images/star.png";

export default function Card(props) {
	return (
		<div className="container">
			<div className="card__img-container">
				<img src={`../assets/images/${props.img}`} alt="" className="card-img" />

				{props.status && <div className="status">{props.status}</div>}
			</div>
			<div className="card__content">
				<div className="star__holder">
					<div>
						<img src={star} alt="" />
					</div>
					<p>{props.rating}<span className="grey">({props.count}) • USA</span></p>
				</div>
					{props.title}
				<p>
					<span className="bold">from ${props.price} </span>/ person
				</p>
			</div>
		</div>
	);
}
