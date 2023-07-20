import StatisticItem from './statistic.item';

const Statistic = () => {
    const wrapperStyles = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '100px',
        flexWrap: 'wrap',
    }

    return (
        <div style={wrapperStyles}>
            <StatisticItem name="Events" statistic="45+"/>
            <StatisticItem name="Volunteers" statistic="750+"/>
            <StatisticItem name="Garbadge" statistic="3+ ton"/>
        </div>
    )
}

export default Statistic;