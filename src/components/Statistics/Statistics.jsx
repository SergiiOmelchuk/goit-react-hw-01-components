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

export default Statistics;
