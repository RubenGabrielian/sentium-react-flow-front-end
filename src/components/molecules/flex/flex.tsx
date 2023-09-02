import React from 'react';
import {Globals} from 'csstype';

type Direction = Globals | 'column' | 'column-reverse' | 'row' | 'row-reverse';
type FlexWrap = Globals | 'nowrap' | 'wrap' | 'wrap-reverse';


export interface IProps {
    children?: React.ReactNode;
    direction?: Direction;
    justifyContent?: string;
    alignItems?: string;
    flexWrap?: FlexWrap;
    style?: object;
    className?: string;
}

const Flex = ({
                  children,
                  direction = 'row',
                  justifyContent = 'flex-start',
                  alignItems = 'flex-start',
                  flexWrap = 'nowrap',
                  style = {},
                  className = '',
                  ...props
              }: IProps): JSX.Element => {
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: direction,
                alignItems,
                justifyContent,
                flexWrap,
            }}
            className={className}
            {...props}
        >
            {children}
        </div>
    );
}

export default Flex;