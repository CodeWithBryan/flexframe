import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  styles?: string;
}

export const smallText = ({ children, styles = 'text-black-main' }: Props) => {
  return <p className={`text-t-sm font-medium ${styles}`}>{children}</p>;
};

const Typography = {
  smallText: smallText,
};

export default Typography;
