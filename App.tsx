import { useState } from 'react';

interface SeriesProps {
  series: string;
}

const SeriesComponent: React.FC = () => {
  const [series, setSeries] = useState('');
  const [result, setResult] = useState<string[]>([]);

  const handleSeriesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSeries(e.target.value);
  };

  const handleAddSeries = () => {
    const results: string[] = [];
    for (let i = 0; i < 1000; i++) {
      const str = String(i).padStart(3, '0');
      results.push(`${series}${str}`);
    }
    setResult(results);
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded-md shadow-md">
      <input
        type="text"
        value={series}
        onChange={handleSeriesChange}
        placeholder="Enter 7 digit series"
        className="w-full p-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
      />
      <button
        onClick={handleAddSeries}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring focus:border-blue-500"
      >
        Add Series
      </button>
      <ul className="mt-4">
        {result.map((item, index) => (
          <li key={index} className="py-2 border-b border-gray-300">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SeriesComponent;