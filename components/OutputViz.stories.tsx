import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import { Loadable } from 'recoil';
import { FiddleOutput } from '../types';
import OutputViz from './OutputViz';

export default {
  title: 'Output Viz',
  decorators: [(storyFn: React.FC) => <ChakraProvider>{storyFn({})}</ChakraProvider>],
};

const output = [
  {
    name: 'interval',
    id: 'interval-1',
    events: [
      { timestamp: 1000, type: 'value', value: 0 },
      { timestamp: 2000, type: 'value', value: 1 },
      { timestamp: 3000, type: 'value', value: 2 },
      { timestamp: 4000, type: 'value', value: 3 },
    ],
    pipes: ['take-2', 'map-3'],
    inputs: [],
    isTopLevel: true,
  },
  {
    name: 'take',
    id: 'take-2',
    events: [
      { timestamp: 1000, type: 'value', value: 0 },
      { timestamp: 2000, type: 'value', value: 1 },
      { timestamp: 3000, type: 'value', value: 2 },
      { timestamp: 4000, type: 'value', value: 3 },
    ],
    pipes: [],
    inputs: [],
    isTopLevel: false,
  },
  {
    name: 'map',
    id: 'map-3',
    events: [
      { timestamp: 1000, type: 'value', value: 0 },
      { timestamp: 2000, type: 'value', value: 10 },
      { timestamp: 3000, type: 'value', value: 20 },
      { timestamp: 4000, type: 'error' },
    ],
    pipes: [],
    inputs: [],
    isTopLevel: false,
  },
];

const outputLoadable = ({ getValue: () => output } as unknown) as Memoized<Loadable<FiddleOutput>>;

export const simpleOutput = () => <OutputViz fiddleOutputLoadable={outputLoadable} />;
