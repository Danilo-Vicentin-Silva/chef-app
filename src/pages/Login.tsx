import * as React from "react"
import Box from "@mui/material/Box"
import TextField from "@mui/material/TextField"
import Button from "@mui/material/Button"
import DeleteIcon from "@mui/icons-material/Delete"
import SendIcon from "@mui/icons-material/Send"
import Stack from "@mui/material/Stack"

const Login = () => {
	return (
		<main>
			<section>
				<h1>Chef App</h1>
				<Box
					component="form"
					sx={{
						"& .MuiTextField-root": { m: 1, width: "25ch" },
					}}
					autoComplete="on"
				>
					<form action="">
						<div>
							<TextField required id="outlined-required" label="Email" />
							<TextField
								id="outlined-password-input"
								label="Password"
								type="password"
								autoComplete="current-password"
							/>
						</div>
						<div>
							<Stack direction="row" spacing={2}>
								<Button variant="outlined" startIcon={<DeleteIcon />}>
									Delete
								</Button>
								<Button variant="contained" endIcon={<SendIcon />}>
									Login
								</Button>
							</Stack>
						</div>
					</form>
				</Box>
			</section>
		</main>
	)
}

export default Login
