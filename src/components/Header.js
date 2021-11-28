import React, { useState } from 'react';

import  styled  from 'styled-components'
const Header = () => {
    const [burgerStatus, setBurgerStatus] = useState(false)

    return (
        <Container>
           <h1>Hello React</h1>    
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