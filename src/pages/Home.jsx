import data from '../data/features.json'
import Features from '../components/Features'

const Home = () => {


    return (
        <main>
            <div class="hero">
                <section class="hero-content">
                    <h2 class="sr-only">Promoted Content</h2>
                    <p class="subtitle">No fees.</p>
                    <p class="subtitle">No minimum deposit.</p>
                    <p class="subtitle">High interest rates.</p>
                    <p class="text">Open a savings account with Argent Bank today!</p>
                </section>
            </div>
            <section class="features">
                <h2 class="sr-only">Features</h2>
                {
                    data.map(item => <Features key={item.id} data={item} />)
                }
            </section>
        </main>
    )
}

export default Home