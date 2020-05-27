import React from 'react';
import styled from 'styled-components';
import { pizzaRed } from '../Styles/Colors';
import { Title } from '../Styles/Title';

const NavbarStyled = styled.div`
	background-color: ${pizzaRed};
	padding: 10px;
	position: fixed;
	width: 100%;
`;

const Logo = styled(Title)`
    font-size: 20px;
    color: #fff;
    text-shadow: 2px 2px 2.5px #380502;

    display: inline;
    padding-right: 20px;
`;

export function Navbar() {
	return (
		<NavbarStyled>
			<Logo>Sliceline 🍕</Logo>
			Hello Navbar
		</NavbarStyled>
	);
}
