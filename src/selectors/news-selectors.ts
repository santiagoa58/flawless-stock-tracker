import { ApplicationState } from '../states';

export const getNews = ({ newsState }: ApplicationState) => newsState.news;
