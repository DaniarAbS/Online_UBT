import "./style.css"
import "./script.js"


import myExams from "./../../assets/img/icons/My exams.svg"
import myExamsDark from "./../../assets/img/icons/exam_black.svg"

import results from "./../../assets/img/icons/results.svg"
import resultsDark from "./../../assets/img/icons/result_black.svg"

import signOut from "./../../assets/img/icons/sign-out.svg"
import signOutDark from "./../../assets/img/icons/sign-out_black.svg"


const SideBar = () => {
	return (
		<>
			<sidebar className="sidebar " id="sidebar">
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
						<ul className="navbar__menu">
							<a href="" className="navbar__menu-list">
								<div className="navbar__list-icon">
									<img className="navbar__list_desktop-img" src={myExams} alt="" />
									<img className="navbar__list_mobile-img" src={myExamsDark} alt="" />
								</div>
								<div className="navbar__list-link _hidden" id="navbar__list-link">
									Мои экзамены
								</div>
							</a>
							<a href="" className="navbar__menu-list">
								<div className="navbar__list-icon">
									<img className="navbar__list_desktop-img" src={results} alt="" />
									<img className="navbar__list_mobile-img" src={resultsDark} alt="" />
								</div>
								<div className="navbar__list-link _hidden">
									Результаты
								</div>
							</a>

							<a href="" className="navbar__menu-list">
								<div className="navbar__list-icon">
									<img className="navbar__list_desktop-img" src={signOut} alt="" />
									<img className="navbar__list_mobile-img" src={signOutDark} alt="" />
								</div>
								<div className="navbar__list-link _hidden">
									Выйти
								</div>
							</a>
						</ul>
					</nav>
				</div>
			</sidebar>
		</>
	);
}

export default SideBar;

