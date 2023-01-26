import './styles/index.scss'

const FetchError = ({msg}: {msg: string | undefined}) => {
    return (
        <div className="error__container">
            <h1 className="error__heading">Oooops! There was a problem with data fetching!</h1>
            <p className="error__text">Error: {msg}</p>
            <img className="error__img" src="/img/ai-img.png" alt="background image" />
        </div>
    )
}


export default FetchError;