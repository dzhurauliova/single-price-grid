import './style.css'

export const SinglePrice = () => {
    return(
        <>
            <section className='join'>
                <h1>Join our community</h1>

                <h2 className='join-name'>30-day, hassle-free money back guarantee</h2>

                <p className='join-text'>
                    Gain access to our full library of tutorials along with expert code reviews. 
                    Perfect for any developers who are serious about honing their skills.
                </p>
            </section>
            <section className='subscription'>
                <h2 className='subscription-name'>Monthly Subscription</h2>

                <div className='subscription-text__price'>
                    <p >&dollar;29</p> 
                    <p>per month</p>
                </div>
                

                <p>Full access for less than &dollar;1 a day</p>

                <button>Sign Up</button>
            </section>
            <section className='why'>
                <h2 className='why-name'>Why Us</h2>

                <p className='why-text'>
                    Tutorials by industry experts
                    Peer &amp; expert code review
                    Coding exercises
                    Access to our GitHub repos
                    Community forum
                    Flashcard decks
                    New videos every week
                </p>
            </section>
        </>
    )
}