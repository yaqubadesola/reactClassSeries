import {useParams} from 'react-router-dom';

function Service(props) {
    const {id} = useParams()
    return (
        <div>
            <h1>{ `Service : ${id}`}</h1>
        </div>
    );
}

export default Service;