import { useSearchParams } from "react-router-dom"

const SearchResults = () => {
    const [searchParams] = useSearchParams()
    const query = searchParams.get("q")
    return (
        <>
            <h3>Resultado de busca para: "{query}"</h3>
            {query == "" && <p>Nenhum resultado encontrado para esse parâmetro, tente novamente!</p>}
        </>
    )
}

export default SearchResults
