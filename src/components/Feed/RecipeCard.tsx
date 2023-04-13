import * as React from "react"

interface Props {
	nome: string
	imagem: any
	position: number
}

const RecipeCard: React.FC<Props> = ({ nome, imagem, position }) => {
	return (
		<section>
			<img src={imagem} alt={nome} />
			<h3>{nome}</h3>
		</section>
	)
}

export default RecipeCard
