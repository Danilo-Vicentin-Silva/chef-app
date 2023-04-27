import { GoogleAuthProvider, signInWithPopup, User } from "firebase/auth"
import { auth } from "../services/firebase"
import { Button } from "@mui/material"
import { useState } from "react"
import LoginIcon from "@mui/icons-material/Login"

const Login = () => {
	const [user, setUser] = useState<User>({} as User)

	function handleGoogleSignIn() {
		const provider = new GoogleAuthProvider()

		signInWithPopup(auth, provider)
			.then((result) => setUser(result.user))
			.catch((error) => console.log(error))
	}

	return (
		<section>
			{user.displayName ? (
				<>
					<p>Bem vindo de volta, {user.displayName}!</p>
					<Button size="large" variant="outlined">
						<a href="/">Vamos Começar!</a>
					</Button>
				</>
			) : (
				<Button size="large" variant="outlined" onClick={handleGoogleSignIn}>
					Logar com Google <LoginIcon />
				</Button>
			)}
		</section>
	)
}

export default Login
