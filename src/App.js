import React, { useMemo } from 'react';
import calculateStatistics, { calculateGammaStatistics } from './utils/utility.js';
import { data } from './utils/constant.js';
import StatisticsTable from './components/StatisticsTable.js';

function App() {
  const statistics = useMemo(() => calculateStatistics(data), []);
  const gammaStatistics = useMemo(() => calculateGammaStatistics(data), []);

  return (
    <div>
      <StatisticsTable data={data} statistics={statistics} title="Flavanoids" />
      <StatisticsTable data={data} statistics={gammaStatistics} title="Gamma" />
    </div>
  );
}

export default App;