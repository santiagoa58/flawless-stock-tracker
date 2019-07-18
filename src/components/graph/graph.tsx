import * as React from 'react';

import { TimeSeries } from '../../util';
import { GraphDisplay } from './graphDisplay';

type GraphProps = {
  [key: string]: TimeSeries;
};

export const Graph: React.FC<GraphProps> = (props: GraphProps) => {
  const [dataChoice, setDataChoice] = React.useState('oneMonth');

  function selectChartData(dataSelect: string) {
    setDataChoice(dataSelect);
  }

  return (
    <div className="chart">
      {props.oneDay[0] && (
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
