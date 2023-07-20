const StatisticItem = ({ name, statistic }) => {

    const containerStyle = {
        display: 'flex',
        width: '250px',
        padding: '25px 18px',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '5px',

        borderRadius: '16px',
        background: 'rgba(255, 255, 255, 0.80)'
    }

    const statisticStyle = {
        color: '#559A5A',
        fontFamily: 'Lato',
        fontSize: '35px',
        fontStyle: 'normal',
        fontWeight: '500',
        lineHeight: '64px' /* 114.286% */
    }

    const nameStyle = {
        color: '#559A5A',
        fontFamily: 'Lato',
        fontSize: '15px',
        fontWeight: '500',
        lineHeight: '32px', /* 133.333% */
        letterSpacing: '0.72px',
        textTransform: 'uppercase'
    }

    return (
        <div style={containerStyle}>
            <span style={statisticStyle}>{statistic}</span>
            <span style={nameStyle}>{name}</span>
        </div>
    )
};
  
  export default StatisticItem;