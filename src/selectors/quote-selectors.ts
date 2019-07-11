import { ApplicationState } from '../states';

export const getQuote = ({ quoteState }: ApplicationState) => quoteState.quote;
