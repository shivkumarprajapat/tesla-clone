import React, { useState } from 'react';
import styled from 'styled-components'
import { FaTimes, FaBars } from "react-icons/fa";
import { selectCars } from '../features/carSlice'
import { useSelector } from 'react-redux'
const Header = () => {
	const [active, setActive] = useState(false)
	const cars = useSelector(selectCars)
	console.log(cars)
	const hamburger = () => {
		setActive(!active)

	}
	return (
		<Container>
			<a href='regin'>
				<img src="/images/logo.svg" alt="logo" />
			</a>
			<Menu>

				{
					cars.map((item, index) => {
						return (
							<li key={index}> <a href="regin">{item}</a> </li>
						)
					})
				}
			</Menu>
			<RightMenu>
				<a href="regin">Shop</a>
				<a href="regin">Tesla Account</a>
				<CustomMenu onClick={hamburger} />
			</RightMenu>
			<Nav show={active}>
				<CloseWrapper>
					<CustomClose onClick={hamburger} />
				</CloseWrapper>
				<ul>
					{
						cars.map((item, index) => {
							return (
								<li key={index}> <a href="regin">{item}</a> </li>
							)
						})
					}
					<li> <a href="regin">Existing Inventory</a> </li>
					<li> <a href="regin">Used Inventory</a> </li>
					<li> <a href="regin">Trade-in</a> </li>
					<li> <a href="regin">Cybertruck</a> </li>
					<li> <a href="regin">Roadster</a> </li>
					<li> <a href="regin">Semi</a> </li>
					<li> <a href="regin">Charging</a> </li>
					<li> <a href="regin">Power</a> </li>
					<li> <a href="regin">Components</a> </li>
					<li> <a href="regin">Utilities</a> </li>
					<li> <a href="regin">Test Drive</a> </li>
				</ul>
			</Nav>
		</Container>
	)
}

export default Header

const Container = styled.div`
	position: fixed;
	min-height: 60px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 20px;
	top: 0;
	left: 0;
	right: 0;
	z-index: 1;

	background-color: rgba( 255, 255, 255, 0.5);
	box-shadow: 0 35px 55px rgba(0, 0, 0, 0.1);

	@media(max-width: 400px){
		min-height: 40px;
		padding: 0 10px;
		a{
			img{
				width: 75px;
			}
		}
	}
`
const Menu = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex: 1;
	
	a{
		color: black;
		font-weight: 600;
		text-transform: uppercase;
		padding: 0 10px;
		white-space: nowrap;
	}

	@media(max-width: 768px){
		display: none;
	}
`
const RightMenu = styled.div`
	display: flex;
	align-items: center;
	a{
		color: black;
		font-weight: 600;
		text-transform: uppercase;
		margin-right: 10px;
		white-space: nowrap;
	}
	@media(max-width: 400px){
		a{
			font-size: 12px;
		}
	}

`
const Nav = styled.div`
	position: fixed;
	top: 0;
	bottom: 0;
	right: 0;
	background: rgba( 255, 255, 255, 1);
	width: 300px;
	z-index: 16;
	list-style: none;
	padding: 20px;
	display: flex;
	flex-direction: column;
	text-align: start;

	transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
	transition: transform 0.2s ease-in-out;

	@media(max-width: 576px){
		width: 91%;
	}
	overflow-y: scroll ;
	
	li{
		padding: 15px 0;
		border-bottom: 1px solid rgba(0, 0, 0, 0.2);

		a{
			color: black;
			font-weight: 600;
		}
	}

	::-webkit-scrollbar {
  	display: none;
	}
`
const CloseWrapper = styled.div`
	display: flex;
	justify-content: flex-end;
`
const CustomMenu = styled(FaBars)`
	cursor: pointer;
`
const CustomClose = styled(FaTimes)`
	cursor: pointer;
`