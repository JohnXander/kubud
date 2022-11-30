import Router from "next/router";
import { faBowlRice, faKitchenSet, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Header({ loggedInUser }: any) {

    const handleNavigate = (page: string) => {
        let path

        if (page === 'meals') path = "/user/meals"
        if (page === 'cupboard') path = "/user/cupboard"
        if (page === 'account') path = "/user/account"

        Router.push({
            pathname: path,
            query: { user: loggedInUser.username }
        });
    }

    return (
        <ul className="border-0 border-b-2 border-gray-600 w-full flex justify-around py-4">
            <li 
                className="cursor-pointer text-3xl text-yellow-400" 
                onClick={() => handleNavigate('meals')}
                >
                    <FontAwesomeIcon icon={faBowlRice} />
            </li>
            <li 
                className="cursor-pointer text-3xl text-blue-400" 
                onClick={() => handleNavigate('cupboard')}
                >
                    <FontAwesomeIcon icon={faKitchenSet} />
            </li>
            <li 
                className="cursor-pointer text-3xl text-purple-400" 
                onClick={() => handleNavigate('account')}
                >
                    <FontAwesomeIcon icon={faUser} />
            </li>
        </ul>
    )
}