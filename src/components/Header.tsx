import { HeaderStyle } from "../styles/styles"
import SearchInput from "./SearchInput"

const Header = () => {
	return (
		<HeaderStyle>
			<h1 id="title">CHEF APP</h1>
			<hr id="separator" />
			<SearchInput />
		</HeaderStyle>
	)
}

export default Header
