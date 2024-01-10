import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  styles?: string;
}

export const smallText = ({ children, styles = 'text-black-main' }: Props) => {
  return <p className={`text-t-sm font-medium ${styles}`}>{children}</p>;
};

export const mediumText = ({
  children,
  styles = 'text-black-main font-semibold',
}: Props) => {
  return <p className={`text-t-md ${styles}`}>{children}</p>;
};

export const text = ({
  children,
  styles = 'text-black-main font-semibold',
}: Props) => {
  return <p className={`text-t-lg ${styles}`}>{children}</p>;
};

export const Heading1 = ({ children, styles = 'text-black-main' }: Props) => {
  return <p className={`text-d-2xl font-bold ${styles}`}>{children}</p>;
};

const Typography = {
  smallText: smallText,
  mText: mediumText,
  h1: Heading1,
  text: text,
};

export default Typography;
