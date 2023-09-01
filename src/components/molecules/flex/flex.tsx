import { IFlex } from './types';

export default function Flex({
  children,
  direction = 'row',
  justifyContent = 'flex-start',
  alignItems = 'flex-start',
  flexWrap = 'nowrap',
  style = {},
  className = '',
  ...props
}: IFlex) {
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
