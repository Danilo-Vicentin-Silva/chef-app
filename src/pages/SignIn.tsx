import Login from "../forms/Login"
import { LoginInterface } from "../styles/styles"
import Logo from "../images/logo.png"
import OpenInNewIcon from "@mui/icons-material/OpenInNew"

const SignIn = () => {
	return (
		<LoginInterface>
			<section>
				<img src={Logo} alt="Logo" height={"320px"} width={"320px"} />
				<h1 id="welcome">SEJA BEM VINDO!</h1>
				<Login />
				<p id="autoria">
					Desenvolvido por{" "}
					<a
						href="https://www.instagram.com/danilo_vicentin_silva/"
						rel="noopener"
						target="_blank"
					>
						<small>
							Danilo V Silva <OpenInNewIcon fontSize="small" />
						</small>
					</a>
				</p>
			</section>
		</LoginInterface>
	)
}

export default SignIn
