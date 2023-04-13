import * as React from "react"
import Header from "./components/Header"
import Feed from "./components/Feed/Feed"
import Post from "./components/Post"

const App = () => {
	return (
		<>
			<Header />
			<main>
				<Feed />
				<Post />
			</main>
		</>
	)
}

export default App
