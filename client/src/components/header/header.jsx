import "./style.css"

import logo from "./../../assets/img/icons/Logo.svg"
import user from "./../../assets/img/icons/user_logo.svg"


const Header = () => {
	return (
		<>
			<section className="header">
				<div className="overlay" id="overlay"></div>
				<div className="header__contianer _container">
					<div className="header-item-menu">
						<div className="header_burger" id="header_burger">
							<button type="button" className="menu-mobile-toggle" >
								<span className="first_line"></span>
								<span className="second_line"></span>
								<span className="third_line"></span>
							</button>
						</div>
					</div>

					<div className="header__logo">
						<a href="">
							<img src={logo} alt="" className="header__logo-img" />
						</a>
					</div>

					<div className="header__user">
						<a href="" className="header__user-link">
							Алишер Алтынбеков
							<span className="header__user-icon">
								<img src={user} alt="" />
							</span>
						</a>
					</div>
				</div>
			</section >
		</>
	);
}

export default Header;