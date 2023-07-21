import './about.css';


function About() {
    return (
        <div className='about-container'>
            <div className='about-us'>
                <span className='title'>
                    What does "<span className='maqoor'>MAQOOR</span>" do?
                </span>
                <p className='text'>
                    "Maqoor" is an environmental movement aiming to unite people with the goal of solving current environmental issues.
                    Advocating the idea that even picking up a single piece of litter can result in greater change, the movement started its path with small clean-up events in Armenia.<br/><br/>

                    With its teams, Maqoor continues to encourage collective steps through education and actions, leading to impactful changes in society.
                </p>
            </div>
            <div className='flex-center relative'>
                <div className="background"></div>
                <div className="img-container"></div>
            </div>
        </div>
    )
}

export default About;