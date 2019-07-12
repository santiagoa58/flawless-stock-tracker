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
import { TimeSeries } from '../../util';

interface GraphProps {
  oneDay: TimeSeries;
  oneMonth: TimeSeries;
  fiveDay: TimeSeries;
  oneYear: TimeSeries;
  fiveYear: TimeSeries;
  max: TimeSeries;
}

export const Graph: React.SFC<GraphProps> = ({
  oneDay,
  oneMonth,
  fiveDay,
  oneYear,
  fiveYear,
  max,
}: GraphProps) => {
  return (
    <div className="chart">
      {oneDay[0] && (
        <ResponsiveContainer width="100%" aspect={2}>
          <AreaChart
            data={oneMonth}
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
              dataKey={'label'}
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
              dataKey={'close'}
              stroke="#8884d8"
              fill="url(#colorPrice)"
              fillOpacity={0.3}
            />
          </AreaChart>
        </ResponsiveContainer>
      )}
    </div>
  );
};
