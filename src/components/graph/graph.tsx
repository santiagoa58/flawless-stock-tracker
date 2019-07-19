import * as React from 'react';
import { TimeSeries } from '../../util';
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from 'recharts';

type GraphProps = {
  [key: string]: TimeSeries;
};

const areEqual = (prevProps: GraphProps, nextProps: GraphProps) => {
  if (!prevProps.oneDay[0]) {
    return;
  }
  return (
    prevProps.oneDay[0] === nextProps.oneDay[0] &&
    prevProps.fiveDay[0] === nextProps.fiveDay[0] &&
    prevProps.oneMonth[0] === nextProps.oneMonth[0] &&
    prevProps.oneYear[0] === nextProps.oneYear[0] &&
    prevProps.fiveYear[0] === nextProps.fiveYear[0] &&
    prevProps.max[0] === nextProps.max[0]
  );
};

export const Graph = (props: GraphProps) => {
  const [dataChoice, setDataChoice] = React.useState('oneMonth');

  function selectChartData(dataSelect: string) {
    setDataChoice(dataSelect);
  }
  const dataKey = 'close';
  const xAxisTimeFrameKey = 'label';

  return (
    <div className="chart">
      {props.max.length !== 0 && (
        <>
          <div className="chart__select">
            <label>
              <input
                type="radio"
                name="one-day"
                onClick={() => selectChartData('oneDay')}
              />
              <span className="chart__select--button">1d</span>
            </label>
            <label>
              <input
                type="radio"
                name="one-day"
                onClick={() => selectChartData('fiveDay')}
              />
              <span className="chart__select--button">5d</span>
            </label>
            <label>
              <input
                type="radio"
                name="one-day"
                defaultChecked={true}
                onClick={() => selectChartData('oneMonth')}
              />
              <span className="chart__select--button">1m</span>
            </label>
            <label>
              <input
                type="radio"
                name="one-day"
                onClick={() => selectChartData('oneYear')}
              />
              <span className="chart__select--button">1y</span>
            </label>
            <label>
              <input
                type="radio"
                name="one-day"
                onClick={() => selectChartData('fiveYear')}
              />
              <span className="chart__select--button">5y</span>
            </label>
            <label>
              <input
                type="radio"
                name="one-day"
                onClick={() => selectChartData('max')}
              />
              <span className="chart__select--button">max</span>
            </label>
          </div>
          <ResponsiveContainer width="100%" aspect={2}>
            <AreaChart
              data={props[dataChoice]}
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
                dataKey={xAxisTimeFrameKey}
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
                dataKey={dataKey}
                stroke="#8884d8"
                fill="url(#colorPrice)"
                fillOpacity={0.3}
              />
            </AreaChart>
          </ResponsiveContainer>
        </>
      )}
    </div>
  );
};

export const MemoGraph = React.memo(Graph, areEqual);
