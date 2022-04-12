import { Transition } from 'react-transition-group';

export const duration = 300;

export const defaultStyle = {
  transition: `right ${duration}ms ease-in-out`,
  right: '-100%',
};

export const transitionStyles = {
  entering: { right: '-100%' },
  entered: { right: 0 },
  exiting: { right: 0 },
  exited: { right: '-100%' },
};

//mobile search
export const searchDefaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
  position: 'absolute',
  top: '75px',
  left: 0,
  background: '#e9e9e9',
  zIndex: 100,
  width: '100vw',
  height: '500px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'flex-start',
  padding: '2rem',
};

export const searchTransitionStyles = {
  entering: { opacity: '0' },
  entered: { opacity: 1 },
  exiting: { opacity: 1 },
  exited: { opacity: '0' },
};
