import React, { useState } from "react";
import "./Header.css";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import {  Link } from "react-router-dom";
function Header() {

	const [inputSearch, setInputSearch] = useState('');
	return (
		<div className="header">
			<div className="header__left">
				<MenuIcon />
				<Link to='/'>
					<img className="header__logo" src="" alt="youtubelogo" />
				</Link>
			</div>
			<div className="header__input">
				<input
					type="text"
					placeholder="Search"
					value={inputSearch}
					onChange={(e) => setInputSearch(e.target.value)}
				/>
				<Link to={"/search/${inputSearch}"}>
					<SearchIcon className="header__inpututton" />
				</Link>
			</div>
			<div className="header__icons">
				<VideoCallIcon className="header__icon" />
				<AppsIcon className="header__icon" />
				<NotificationsIcon className="header__icon" />
				<AccountCircleIcon />
			</div>
		</div>
	);
}

export default Header;
