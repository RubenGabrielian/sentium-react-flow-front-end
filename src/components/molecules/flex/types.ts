import React from 'react';
import { Globals } from 'csstype';

export interface IFlex {
  children?: React.ReactNode;
  direction?: Globals | 'column' | 'column-reverse' | 'row' | 'row-reverse';
  justifyContent?: string;
  alignItems?: string;
  flexWrap?: Globals | 'nowrap' | 'wrap' | 'wrap-reverse';
  style?: object;
  className?: string;
}
