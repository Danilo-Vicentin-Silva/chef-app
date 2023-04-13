import * as React from "react"
import Header from "./components/Header"
import Feed from "./components/Feed/Feed"

const App = () => {
	return (
		<>
			<Header />
			<main>
				<Feed />
			</main>
		</>
	)
}

export default App
