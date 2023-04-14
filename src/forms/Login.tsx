import { GoogleAuthProvider, signInWithPopup, User } from "firebase/auth"
import { auth } from "../services/firebase"
import { Button } from "@mui/material"
import { useState } from "react"

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
			{user.photoURL && (
				<section>
					<img src={user.photoURL} alt="Foto do usuário" />{" "}
					<p>Bem vindo de volta! {user.displayName}</p>
					<Button variant="contained">
						<a href="/">Vamos Começar!</a>
					</Button>
				</section>
			)}
			<Button variant="contained" onClick={handleGoogleSignIn}>
				Logar com Google
			</Button>
		</section>
	)
}

export default Login
