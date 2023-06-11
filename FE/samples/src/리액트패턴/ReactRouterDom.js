import { useNavigate, useParams, useSearchParams } from "react-router-dom"

const ReactRouterDom = () => {
    const {id} = useParams();
    const navigate = useNavigate();
    const {queryString} = useSearchParams();

    return <div></div>
}

export default ReactRouterDom