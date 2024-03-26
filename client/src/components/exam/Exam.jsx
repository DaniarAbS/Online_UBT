import "./style.css";

import timeIcon from "../../assets/img/icons/time-icon.svg";
import dateIcon from "../../assets/img/icons/date-icon.svg"

const Exam = ({ time, day }) => {
	return (
		<>
			<li className="exams__card">
				<div className="exams__card-title">
					ЕНТ
				</div>
				<div className="exams__card__list">
					<div className="exams__card__list-text">Время</div>
					<div className="exams_card__list-time">
						<img className="exams__card__list-img" src={timeIcon} alt="" />
						<p>{time}</p>
					</div>
				</div>
				<div className="exams__card__list">
					<div className="exams__card__list-text">День</div>
					<div className="exams_card__list-day">
						<img className="exams__card__list-img" src={dateIcon} alt="" />
						<p>{day}</p>
					</div>
				</div>
				<div className="exams__card__button">
					<button className="exams__card__button-btn main__btn">
						Начать
					</button>
				</div>
			</li>
		</>
	);
}

export default Exam;