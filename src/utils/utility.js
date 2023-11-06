export default function calculateStatistics(data) {
  const statistics = {};

  // Initialize empty arrays for each class
  data.forEach(item => {
    const alcoholClass = item.Alcohol;
    if (!statistics[alcoholClass]) {
      statistics[alcoholClass] = [];
    }
    statistics[alcoholClass].push(item.Flavanoids);
  });

  // Calculate statistics for each class
  for (const alcoholClass in statistics) {
    const values = statistics[alcoholClass];

    const mean = values.reduce((sum, value) => sum + value, 0) / values.length;
    values.sort((a, b) => a - b);
    const middle = Math.floor(values.length / 2);
    const median = values.length % 2 === 0 ? (values[middle - 1] + values[middle]) / 2 : values[middle];

    const mode = values.reduce(
      (accumulator, currentValue) => {
        if (accumulator.values[currentValue]) {
          accumulator.values[currentValue]++;
        } else {
          accumulator.values[currentValue] = 1;
        }
        if (accumulator.values[currentValue] > accumulator.maxCount) {
          accumulator.maxCount = accumulator.values[currentValue];
          accumulator.mode = currentValue;
        }
        return accumulator;
      },
      { mode: null, maxCount: 0, values: {} }
    ).mode;

    statistics[alcoholClass] = { mean, median, mode };
  }

  return statistics;
}

export function calculateGammaStatistics(data) {
  const statistics = {};

  // Calculate Gamma for each data point
  data.forEach(item => {
    const alcoholClass = item.Alcohol;
    const gamma = (item.Ash * item.Hue) / item.Magnesium;
    
    if (!statistics[alcoholClass]) {
      statistics[alcoholClass] = [];
    }
    
    statistics[alcoholClass].push(gamma);
  });

  // Calculate statistics for each class
  for (const alcoholClass in statistics) {
    const values = statistics[alcoholClass];
    var mean = values.reduce((sum, value) => sum + value, 0) / values.length;
    values.sort((a, b) => a - b);
    const middle = Math.floor(values.length / 2);
    const median = values.length % 2 === 0 ? (values[middle - 1] + values[middle]) / 2 : values[middle];  
    const mode = values.reduce(
      (accumulator, currentValue) => {
        if (accumulator.values[currentValue]) {
          accumulator.values[currentValue]++;
        } else {
          accumulator.values[currentValue] = 1;
        }
        if (accumulator.values[currentValue] > accumulator.maxCount) {
          accumulator.maxCount = accumulator.values[currentValue];
          accumulator.mode = currentValue;
        }
        return accumulator;
      },
      { mode: null, maxCount: 0, values: {} }
    ).mode;
    statistics[alcoholClass] = { mean: mean, median: median, mode: mode};
  }


  return statistics;
}

