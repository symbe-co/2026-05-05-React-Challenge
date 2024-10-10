import { Slide } from './FilmStrip';

type Props = {
  slide: Slide;
  onClick: () => void;
};

export const ExpensiveThumbnail = (props: Props) => {
  // As you can see, this component is extremely expensive and you certainly wouldn't want it
  // re-rendering much unless you had a quantum computer
  return <div onClick={props.onClick}>{props.slide.title}</div>;
};
