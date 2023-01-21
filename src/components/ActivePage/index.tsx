import { IActivePageProps } from "./types/IActivePageProps"
import './styles/index.scss';
import { useFilterActiveUsers } from "../../hooks/useFilterActiveUsers";

const ActivePage = ({ activePage, allUsers, usersPerPage, }: IActivePageProps) => {
    const usersOnCurrentPage = useFilterActiveUsers({activePage, allUsers, usersPerPage})

    return (
        <div className="active-page__container">
            <div className="active-page__headers">
                <div className="active-page__header">name</div>
                <div className="active-page__header">age</div>
                <div className="active-page__header">email</div>
            </div>

            <ul className="active-page__users">
                {usersOnCurrentPage && usersOnCurrentPage.map( ({name, age, email}) => (
                    <li className="active-page__user" key={email}>
                        <span className="active-page__user-name">{name}</span>
                        <span className="active-page__user-age">{age}</span>
                        <span className="active-page__user-email">{email}</span>
                    </li>
                ))}
                
            </ul>
        </div>)
}

export default ActivePage;