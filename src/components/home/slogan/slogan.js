import './slogan.css';

const Slogan = () => {
    return(
        <div className='slogan'>
            <h1>Let's Make Saving The Planet a Trand</h1>
            <span className='date'>
                <img className='calendar-icon' src="/assets/Frame.svg" alt="Calendar icon" />
                30 July 2023
            </span>

            <div className='we-belive-that-container'>
                <span className='we-belive-that'>
                    Each contribution is essential for success that you can achieve by only team work
                </span>
            </div>
            

            <div className='button-wrapper'>
                <button className='join-trand-button'>
                    <span className='join-trand-button-text'>Join the Trend</span>
                </button>
            </div>
            
        </div>
    )
}

export default Slogan;