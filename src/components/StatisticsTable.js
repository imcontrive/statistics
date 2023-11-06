import React from 'react';

function StatisticsHeader({ statistics, title }) {
  return (
    <thead>
      <tr>
        <th>Measure</th>
        {Object.keys(statistics).map(alcoholClass => (
          <th key={alcoholClass}>Class {alcoholClass}</th>
        ))}
      </tr>
      <tr>
        <td>{title} (Mean)</td>
        {Object.keys(statistics).map(alcoholClass => (
          <td key={alcoholClass}>{statistics[alcoholClass]?.mean?.toFixed(3)}</td>
        ))}
      </tr>
      <tr>
        <td>{title} (Median)</td>
        {Object.keys(statistics).map(alcoholClass => (
          <td key={alcoholClass}>{statistics[alcoholClass].median?.toFixed(3)}</td>
        ))}
      </tr>
      <tr>
        <td>{title} (Mode)</td>
        {Object.keys(statistics).map(alcoholClass => (
          <td key={alcoholClass}>{statistics[alcoholClass].mode?.toFixed(3)}</td>
        ))}
      </tr>
    </thead>
  );
}

function StatisticsTable({ data, statistics, title }) {
  return (
    <div className="table-container">
      <table>
        <StatisticsHeader statistics={statistics} title={title} />
      </table>
    </div>
  );
}

export default StatisticsTable;
