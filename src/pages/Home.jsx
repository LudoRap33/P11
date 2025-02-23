import Features from '../components/Features'
import iconChat from '../assets/img/icon-chat.webp'
import iconMoney from '../assets/img/icon-money.webp'
import iconSecurity from '../assets/img/icon-security.webp'

const data = [
    {
        "id": 1,
        "img": iconChat,
        "title": "You are our #1 priority",
        "description": "Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."
    },
    {
        "id": 2,
        "img": iconMoney,
        "title": "More savings means higher rates",
        "description": "The more you save with us, the higher your interest rate will be!"
    },
    {
        "id": 3,
        "img": iconSecurity,
        "title": "Security you can trust",
        "description": "We use top of the line encryption to make sure your data and money is always safe."
    }
]

const Home = () => {


    return (
        <main>
            <div className="hero">
                <section className="hero-content">
                    <h2 className="sr-only">Promoted Content</h2>
                    <p className="subtitle">No fees.</p>
                    <p className="subtitle">No minimum deposit.</p>
                    <p className="subtitle">High interest rates.</p>
                    <p className="text">Open a savings account with Argent Bank today!</p>
                </section>
            </div>
            <section className="features">
                <h2 className="sr-only">Features</h2>
                {
                    data.map(item => <Features key={item.id} data={item} />)
                }
            </section>
        </main>
    )
}

export default Home