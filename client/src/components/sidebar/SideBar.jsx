import "./style.css"
import "./script.js"


import myExams from "./../../assets/img/icons/exam.png"
import myExamsDark from "./../../assets/img/icons/exam_black.png"

import results from "./../../assets/img/icons/results.png"
import resultsDark from "./../../assets/img/icons/results_black.png"

import myClass from './../../assets/img/icons/my_class.png'
import myClassDark from './../../assets/img/icons/my_class_black.png'

import questionBase from './../../assets/img/icons/question_base.png'
import questionBaseDark from './../../assets/img/icons/question_base_black.png'

import subjAnalyse from './../../assets/img/icons/subj_analyse.png'
import subjAnalyseDark from './../../assets/img/icons/subj_analyse_black.png'

import analyseExam from "./../../assets/img/icons/analyse_exam.png"
import analyseExamDark from "./../../assets/img/icons/analyse_exam_black.png"

import students from "./../../assets/img/icons/students.png"
import studentsDark from "./../../assets/img/icons/students_black.png"

import teachers from "./../../assets/img/icons/teachers.png"
import teachersDark from "./../../assets/img/icons/teachers_black.png"

import signOut from "./../../assets/img/icons/sign_out.png"
import signOutDark from "./../../assets/img/icons/sign_out_black.png"

import { Link } from "react-router-dom"


const SideBar = ({ selectedRole }) => {
	return (
		<>
			<sidebar className="sidebar" id="sidebar">
				<div className="sidebar__container">

					<div className="sidebar-item-menu" id="sidebar-item-menu">
						<div className="sidebar_burger" id="sidebar_burger">
							<button type="button" className="menu-mobile-toggle">
								<span className="first_line"></span>
								<span className="second_line"></span>
							</button>
						</div>
					</div>

					<nav className="navbar">
						<h1 className="navbar__menu-title _hidden" id="navbar__menu-title">Экзамены</h1>

						{
							selectedRole === 'student' 
						? 
							<ul className="navbar__menu">
								<Link to='*' className="navbar__menu-list">
									<div className="navbar__list-icon">
										<img className="navbar__list_desktop-img" src={myExams} alt="" />
										<img className="navbar__list_mobile-img" src={myExamsDark} alt="" />
									</div>
									<div className="navbar__list-link _hidden" id="navbar__list-link">
										Мои экзамены
									</div>
								</Link>
								<Link to='/exam_results' className="navbar__menu-list">
									<div className="navbar__list-icon">
										<img className="navbar__list_desktop-img" src={results} alt="" />
										<img className="navbar__list_mobile-img" src={resultsDark} alt="" />
									</div>
									<div className="navbar__list-link _hidden">
										Результаты
									</div>
								</Link>

								<Link to="/login" className="navbar__menu-list">
									<div className="navbar__list-icon">
										<img className="navbar__list_desktop-img" src={signOut} alt="" />
										<img className="navbar__list_mobile-img" src={signOutDark} alt="" />
									</div>
									<div className="navbar__list-link _hidden">
										Выйти
									</div>
								</Link>
							</ul>
						: 
							selectedRole === 'teacher' 
						?
							<ul className="navbar__menu">
								<Link to='*' className="navbar__menu-list">
									<div className="navbar__list-icon">
										<img className="navbar__list_desktop-img" src={myClass} alt="" />
										<img className="navbar__list_mobile-img" src={myClass} alt="" />
									</div>
									<div className="navbar__list-link _hidden" id="navbar__list-link">
										Мой класс
									</div>
								</Link>
								<Link to='/question_base' className="navbar__menu-list">
									<div className="navbar__list-icon">
										<img className="navbar__list_desktop-img" src={questionBase} alt="" />
										<img className="navbar__list_mobile-img" src={questionBaseDark} alt="" />
									</div>
									<div className="navbar__list-link _hidden">
										База вопросов
									</div>
								</Link>
								<Link to='/subject_analyse' className="navbar__menu-list">
									<div className="navbar__list-icon">
										<img className="navbar__list_desktop-img" src={subjAnalyse} alt="" />
										<img className="navbar__list_mobile-img" src={subjAnalyseDark} alt="" />
									</div>
									<div className="navbar__list-link _hidden">
										Анализ предмета
									</div>
								</Link>

								<Link to="/login" className="navbar__menu-list">
									<div className="navbar__list-icon">
										<img className="navbar__list_desktop-img" src={signOut} alt="" />
										<img className="navbar__list_mobile-img" src={signOutDark} alt="" />
									</div>
									<div className="navbar__list-link _hidden">
										Выйти
									</div>
								</Link>
							</ul>
						:
							selectedRole === 'admin'
						?
							<ul className="navbar__menu">
								<Link to='/exam_analyse' className="navbar__menu-list">
									<div className="navbar__list-icon">
										<img className="navbar__list_desktop-img" src={analyseExam} alt="" />
										<img className="navbar__list_mobile-img" src={analyseExamDark} alt="" />
									</div>
									<div className="navbar__list-link _hidden" id="navbar__list-link">
										Анализ экзамена
									</div>
								</Link>
								<Link to='*' className="navbar__menu-list">
									<div className="navbar__list-icon">
										<img className="navbar__list_desktop-img" src={students} alt="" />
										<img className="navbar__list_mobile-img" src={studentsDark} alt="" />
									</div>
									<div className="navbar__list-link _hidden">
										Ученики
									</div>
								</Link>
								<Link to='*' className="navbar__menu-list">
									<div className="navbar__list-icon">
										<img className="navbar__list_desktop-img" src={teachers} alt="" />
										<img className="navbar__list_mobile-img" src={teachersDark} alt="" />
									</div>
									<div className="navbar__list-link _hidden">
										Учителя
									</div>
								</Link>

								<Link to="/login" className="navbar__menu-list">
									<div className="navbar__list-icon">
										<img className="navbar__list_desktop-img" src={signOut} alt="" />
										<img className="navbar__list_mobile-img" src={signOutDark} alt="" />
									</div>
									<div className="navbar__list-link _hidden">
										Выйти
									</div>
								</Link>
							</ul>
						:
							<></>
						}
						
					</nav>
				</div>
			</sidebar>
		</>
	);
}

export default SideBar;

