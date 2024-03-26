import { useEffect, useState } from 'react';
import Exam from '../components/exam/Exam'

import { exams } from "../components/helpers/examLists";

const Exams = () => {
	const [upExams, setUpExams] = useState(null)

	useEffect(() => {
		const fetchUpExams = async() => {
			const response = await fetch('api/exams')
			const json = await response.json()

			if (response.ok){
				setUpExams(response)
			}
		}

		fetchUpExams();
	}, [])

	return (
		<>
			<div className="exams">
				<div className="exams__container _container">
					<h1 className="exams__title main__title">
						Предстоящие экзамены
					</h1>
					<ul className="exams__list">

						{/* {exams.map((exam) => {

							return <Exam time={exam.time} day={exam.day} />;

						})} */}

						{
							upExams 
						?
							upExams.map((exam) => {
								return <Exam time={exam.time} day={exam.day}/>
							})
						:
							<p>
								There aren't any exams yet... 
							</p>
						}


					</ul>
				</div>
			</div>
		</>
	);
}

export default Exams;