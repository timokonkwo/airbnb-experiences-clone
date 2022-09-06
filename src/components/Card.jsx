import katie from "../assets/images/katie.png";
import star from "../assets/images/star.png";

export default function Card() {
	return (
		<div className="card__container container">
			<div className="card__img-container">
				<img src={katie} alt="" className="card-img" />

				<div className="status">SOLD OUT</div>
			</div>
			<div className="card__content">
				<div className="star__holder">
					<div>
						<img src={star} alt="" />
					</div>
					<p>5.0 <span className="grey">(6) • USA</span></p>
				</div>
				Life Lessons with Katie Zaferes
				<p>
					<span className="bold">from $136 </span>/ person
				</p>
			</div>
		</div>
	);
}
