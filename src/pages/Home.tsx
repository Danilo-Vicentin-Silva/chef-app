import * as React from "react"
import Header from "../components/Header"
import Feed from "../components/Feed/Feed"
import Post from "../components/Post"
import NavBar from "../components/NavBar"

const Home = () => {
	return (
		<>
			<Header />
			<main>
				<Feed />
				<Post />
				<NavBar />
			</main>
		</>
	)
}

export default Home
