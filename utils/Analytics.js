import ReactGA from 'react-ga';

export const initGA = () => {
  ReactGA.initialize('G-BDRE17X6PJ');
};

export const logPageView = () => {
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
};
