import * as React from 'react';
import { TimeSeries, TimeSeriesRange } from '../../util';
import { GraphDisplay } from './graphDisplay';

type GraphProps = {
  [key: string]: TimeSeries;
};

export const Graph: React.SFC<GraphProps> = (props: GraphProps) => {
  const [dataChoice, setData] = React.useState('oneDay');

  function selectChartData(dataSelect: string) {
    setData(dataSelect);
  }

  return (
    <div className="chart">
      {props.oneDay[0] && (
        <>
          <div className="chart__select">
            <a href="#" onClick={() => selectChartData('oneDay')}>
              {'1D'}
            </a>
            <a href="#" onClick={() => selectChartData('fiveDay')}>
              {'5D'}
            </a>
            <a href="#" onClick={() => selectChartData('oneMonth')}>
              {'1M'}
            </a>
            <a href="#" onClick={() => selectChartData('oneYear')}>
              {'1Y'}
            </a>
            <a href="#" onClick={() => selectChartData('fiveYear')}>
              {'5Y'}
            </a>
            <a href="#" onClick={() => selectChartData('max')}>
              {'MAX'}
            </a>
          </div>
          <GraphDisplay
            data={props[`${dataChoice}`]}
            dataName="close"
            timeFrame="label"
          />
        </>
      )}
    </div>
  );
};
