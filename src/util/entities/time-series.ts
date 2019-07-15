export type TimeSeries = TimePoint[];

export interface TimePoint {
  date: string;
  minute?: string;
  close: number;
  label: string;
}
