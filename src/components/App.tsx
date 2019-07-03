import * as React from 'react';

interface AppProps {
  title: string;
}

export default function App({ title }: AppProps) {
  return <h1>{title}</h1>;
}
