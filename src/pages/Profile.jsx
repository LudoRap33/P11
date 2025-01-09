import Account from "../components/Account"
import { useEffect } from "react"
import { getUser } from "../app/userApi"
import { selectToken, setUser } from "../app/userSlice"
import { useSelector, useDispatch } from "react-redux"
import Welcome from "../components/Welcome"
import { useNavigate } from "react-router-dom"

const accounts = [
    {
        title: 'Argent Bank Checking (x8349)',
        amount: '$2,082.79',
        amountDescription: 'Available Balance',
        viewTransactions: '#',
    },
    {
        title: 'Argent Bank Savings (x6712)',
        amount: '$10,928.42',
        amountDescription: 'Available Balance',
        viewTransactions: '#',
    },
    {
        title: 'Argent Bank Credit Card (x8349)',
        amount: '$184.30',
        amountDescription: 'Current Balance',
        viewTransactions: '#',
    }
]

const Profile = () => {
    const dispatch = useDispatch()
    const token = useSelector(selectToken)
    const navigate = useNavigate()

    useEffect(() => {

        if (!token) {
            navigate('/sign-in')
        }

        getUser(token).then(data => dispatch(setUser(data.body)))
    }, [dispatch, navigate, token])

    return (
        <main className='main'>
            <section id="user" className="bg-dark">
                <Welcome />
                <div className="accounts">
                    <h2 className="sr-only">Accounts</h2>
                    {accounts.map(item => (
                        <Account
                            key={item.title}
                            data={item}
                        />
                    ))}
                </div>
            </section>
        </main>
    )

}

export default Profile