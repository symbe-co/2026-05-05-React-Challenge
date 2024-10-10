import { PropsWithChildren, ReactNode, RefObject, useRef } from 'react';

type Props = PropsWithChildren<{
  onDragStart: () => void;
  onDragEnd: (sourceIndex: number, destinationIndex: number) => void;
}>;

export const DragAndDropContext = ({ children }: Props) => (
  <div>{children}</div>
);

type DraggableProps = {
  children: (ref: RefObject<HTMLDivElement>, draggableProps: any) => ReactNode;
  draggableId: string;
  index: number;
};

export const Draggable = ({ children, draggableId, index }: DraggableProps) => {
  const ref = useRef<HTMLDivElement>(null);

  return <div>{children(ref, {})}</div>;
};
