import { Slide } from '../../Slide.types';
import { Button } from '../Common/Button';

type Props = {
  slide: Slide;
  openVariableWindow?: () => void;
  onClick?: () => void;
};

export const ExpensiveSlideContent = ({
  slide,
  openVariableWindow,
  onClick,
}: Props) => {
  // Let's assume this component is expensive to render, and cannot be
  // optimised further - e.g. 20ms render time
  const { title, description } = slide;

  console.log('ExpensiveSlideContent rendered', slide.title);

  return (
    <div
      className="flex-1 flex flex-col items-center border rounded-2xl p-4 gap-4"
      onClick={onClick}
    >
      <h1 className="text-2xl font-bold">{title}</h1>
      <p className="text-sm">{description}</p>
      {openVariableWindow && (
        <Button onClick={openVariableWindow}>Open Variable Window</Button>
      )}
    </div>
  );
};
