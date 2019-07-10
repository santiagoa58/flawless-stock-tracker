import * as React from 'react';
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from 'recharts';

interface GraphProps {
  data: any[];
  isHourly: boolean;
}

export const Graph: React.SFC<GraphProps> = ({
  data,
  isHourly,
}: GraphProps) => {
  console.log(data);
  const datakey = isHourly ? 'Hour' : 'Date';
  return (
    <div className="chart">
      <div className="chart__select">
        <a href="#"> 1D </a>
        <a href="#"> 5D </a>
        <a href="#"> 1M </a>
        <a href="#"> 1Y </a>
        <a href="#"> 5Y </a>
        <a href="#"> MAX </a>
      </div>

      <ResponsiveContainer width="100%" aspect={2}>
        <AreaChart
          data={data}
          margin={{
            top: 0,
            right: 0,
            left: 0,
            bottom: 0,
          }}
        >
          <defs>
            <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
              <stop offset="15%" stopColor="#8884d8" stopOpacity={1} />
              <stop offset="85%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
          </defs>

          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey={datakey}
            interval={'preserveStart'}
            tick={{ stroke: '#f4f6f9', strokeWidth: 0.1 }}
          />
          <XAxis
            dataKey="dateTime"
            interval={'preserveStart'}
            tick={{ stroke: '#f4f6f9', strokeWidth: 0.1 }}
          />
          <YAxis
            orientation="right"
            domain={['dataMin', 'auto']}
            tick={{ stroke: '#f4f6f9', strokeWidth: 0.1 }}
          />
          <Tooltip
            cursor={{ stroke: 'orange', strokeWidth: 2 }}
            labelStyle={{ color: 'black' }}
          />
          <Area
            type="monotone"
            dataKey="Price"
            stroke="#8884d8"
            fill="url(#colorPrice)"
            fillOpacity={0.3}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};
