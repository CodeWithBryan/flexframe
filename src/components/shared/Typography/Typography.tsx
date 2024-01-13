import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  styles?: string;
}

export const xSmallText = ({
  children,
  styles = 'text-black-main font-medium',
}: Props) => {
  return <p className={`text-t-xs ${styles}`}>{children}</p>;
};

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

export const lgText = ({
  children,
  styles = 'text-black-main font-semibold',
}: Props) => {
  return <p className={`text-d-xs ${styles}`}>{children}</p>;
};

export const Heading1 = ({ children, styles = 'text-black-main' }: Props) => {
  return (
    <p
      className={`text-d-md sm:text-d-lg md:text-d-xl  lg:text-d-2xl font-bold ${styles}`}
    >
      {children}
    </p>
  );
};

export const Heading2 = ({
  children,
  styles = 'text-black-main font-bold text-white-1',
}: Props) => {
  return <p className={`text-d-lg ${styles}`}>{children}</p>;
};

export const Heading3 = ({ children, styles = 'text-white-1' }: Props) => {
  return <p className={`text-d-sm ${styles}`}>{children}</p>;
};

const Typography = {
  smallText: smallText,
  xsText: xSmallText,
  mText: mediumText,
  h1: Heading1,
  h2: Heading2,
  h3: Heading3,
  text: text,
  lgText: lgText,
};

export default Typography;
