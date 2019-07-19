import { Quote, KeyStats, Earnings } from '../../util';

export function keyStatsSelector(
  stats: KeyStats | undefined,
  quote: Quote | undefined,
  earnings: Earnings | undefined
) {
  return stats && quote
    ? {
        companyStatsLeft: [
          {
            value: quote.previousClose,
            name: 'Previous Close',
          },
          {
            name: 'Day Range',
            value: {
              high: quote.high,
              low: quote.low,
            },
          },
          {
            value: quote.latestVolume
              ? quote.latestVolume.toLocaleString()
              : undefined,
            name: 'Volume',
          },
          {
            value: quote.marketCap
              ? quote.marketCap.toLocaleString()
              : undefined,
            name: 'Market Cap',
          },
          {
            value: quote.peRatio,
            name: 'P/E Ratio',
          },
        ],
        companyStatsRight: [
          {
            value: quote.open,
            name: 'Open',
          },
          {
            name: '52 Week Range',
            value: {
              high: quote.week52High,
              low: quote.week52Low,
            },
          },
          {
            value: quote.avgTotalVolume
              ? quote.avgTotalVolume.toLocaleString()
              : undefined,
            name: 'Total Avg Volume',
          },
          {
            value:
              earnings && earnings.hasOwnProperty('earnings')
                ? earnings.earnings[0].actualEPS
                : undefined,
            name: 'Earnings Per Share',
          },
          {
            value: `${Number(stats.dividendYield * 100).toFixed(2)}%`,
            name: 'Dividend & Yield',
          },
        ],
      }
    : {};
}
