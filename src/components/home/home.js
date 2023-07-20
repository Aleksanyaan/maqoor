import Menu from '../menu/menu';
import Slogan from '../home/slogan/slogan';
import Statistic from '../home/statistics/statistics';
// import ImageSlider from '../slider/slider';

// export const slides = [
//     {
//         url: '/assets/MAQOOR_logo.png',
//         alt: 'First image'
//     },
//     {
//         url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-VyxrW-DGCl4sYd5g4Rj8lUKLgteK1YhlRQo4AxJb&s',
//         alt: 'Second image'
//     },
//     {
//         url: 'https://1.bp.blogspot.com/-kK7Fxm7U9o0/YN0bSIwSLvI/AAAAAAAACFk/aF4EI7XU_ashruTzTIpifBfNzb4thUivACLcBGAsYHQ/s1280/222.jpg',
//         alt: 'Third image'
//     }   
// ];

function Home() {
    

    // const containerStyles = {
    //     width: '500px',
    //     height: '280px',
    //     margin: '0 auto'
    // }
    const backgroundStyles = {
        width: '100%',
        height: '100vh',
        backgroundColor: '#3A573C',
        backgroundImage: 'url("/assets/world-map.png")',
        backgroundRepeat: 'repeat',
        backgroundSize: 'cover', 
        zIndex: '-5',

        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
      };
    
    return(
        <div style={backgroundStyles}>
            <Menu/>
            <Slogan />
            <Statistic />
            {/* <div style={containerStyles}>
                <ImageSlider slides={slides}/>
            </div> */}
            
        </div>
    )
}

export default Home;