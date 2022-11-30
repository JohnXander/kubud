import Router from "next/router";
import { ReactElement } from 'react'
import { faBowlRice, faCoffee, faKitchenSet, faUser } from '@fortawesome/free-solid-svg-icons'
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
        <ul className="border w-full flex justify-between px-96 p-4">
            <li className="cursor-pointer" onClick={() => handleNavigate('meals')}><FontAwesomeIcon icon={faBowlRice} /></li>
            <li className="cursor-pointer" onClick={() => handleNavigate('cupboard')}><FontAwesomeIcon icon={faKitchenSet} /></li>
            <li className="cursor-pointer" onClick={() => handleNavigate('account')}><FontAwesomeIcon icon={faUser} /></li>
        </ul>
    )
}