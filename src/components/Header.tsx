import Router from "next/router";

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
            <li className="cursor-pointer" onClick={() => handleNavigate('meals')}>Meal Suggestions</li>
            <li className="cursor-pointer" onClick={() => handleNavigate('cupboard')}>Cupboard</li>
            <li className="cursor-pointer" onClick={() => handleNavigate('account')}>Account</li>
        </ul>
    )
}