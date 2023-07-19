import PropTypes from "prop-types";

const Statistics = ({ stats, tittle }) => {
  // tittle = "Uploud stats"
  return (
    <section className="statistics">
      {tittle && <h2 className="title">{tittle}</h2>}

      <ul className="stat-list">
        {stats.map(item => (
          <li key={item.id} className="item">
            <span className="label">{item.label}</span>
            <span className="percentage">{item.percentage}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  tittle: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.shape ({
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired
  }))
}

export default Statistics;
