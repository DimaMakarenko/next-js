import { ReactNode, ElementType, HTMLAttributes, FC } from 'react';

interface HeadingProps extends HTMLAttributes<HTMLOrSVGElement> {
  as?: ElementType;
  children: ReactNode;
}

const Heading: FC<HeadingProps> = ({ as: Tag = 'h1', children }) => (
  <Tag>
    {children}
  </Tag>
)

export default Heading
