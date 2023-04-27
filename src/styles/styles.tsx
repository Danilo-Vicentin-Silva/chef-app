import styled from "styled-components"

export const HeaderStyle = styled.header`
	text-align: center;
	padding: 30px;
	position: sticky;
	top: 0;

	#title {
		color: #2f4023;
		font-family: "Lobster Two", cursive;
	}

	#separator {
		background-color: yellow;
		margin: 10px 0;
	}
`

export const LoginInterface = styled.main`
	color: #d93f07;
	text-align: center;

	margin: auto;

	#welcome {
		margin-bottom: 50px;
	}

	#autoria {
		background-color: #e3c2af;
		border: 1px solid #d93f07;
		border-radius: 5px;
		margin-top: 80px;
		margin: 80px 10px;
		padding: 5px;
	}

	#autoria a {
		color: #2f4023;
	}

	#autoria a:hover {
		text-decoration: overline;
		color: #6f9a53;
	}
`
