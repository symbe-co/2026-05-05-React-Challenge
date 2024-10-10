import { PropsWithChildren } from 'react';

type Props = PropsWithChildren<{
  onClick: () => void;
}>;

export const Button = ({ children, onClick }: Props) => {
  return (
    <button
      className="bg-slate-400 hover:opacity-75 rounded py-2 px-4 text-white"
      onClick={onClick}
    >
      {children}
    </button>
  );
};
