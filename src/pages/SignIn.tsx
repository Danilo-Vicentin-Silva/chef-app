import Login from "../forms/Login"
import { LoginInterface } from "../styles/styles"
import Logo from "../images/logo.png"

const SignIn = () => {
	return (
		<LoginInterface>
			<section>
				<img id="logo" src={Logo} alt="Logo" height={"500px"} width={"500px"} />
				<h1>SEJA BEM VINDO!</h1>
				<Login />
			</section>
		</LoginInterface>
	)
}

export default SignIn
