import TextField from "@mui/material/TextField"
import Autocomplete from "@mui/material/Autocomplete"

const SearchInput = () => {
	return (
		<Autocomplete
			freeSolo
			disableClearable
			options={["Pesquisas"]}
			renderInput={(params) => (
				<TextField
					{...params}
					label="Pesquisar receitas"
					InputProps={{
						...params.InputProps,
						type: "search",
					}}
				/>
			)}
		/>
	)
}

export default SearchInput
