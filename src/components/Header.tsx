import * as React from "react"
import { HeaderStyle } from "./styles"
import { TextField } from "@mui/material"

const Header = () => {
	return (
		<HeaderStyle>
			<h1>Chef App</h1>
			<TextField label="Procurar Receitas" variant="outlined" />
		</HeaderStyle>
	)
}

export default Header
