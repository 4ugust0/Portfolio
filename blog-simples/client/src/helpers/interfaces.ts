export interface WrapperElements {
  children?: JSX.Element | JSX.Element[] | React.ReactNode;
}

export interface CardNewsInterface {
  date: string;
  title: string;
  text: string;
}

export interface filterInterface {
  filtering: (isMessage: string) => void;
  responseFilter: {}[];
  load: boolean;
  setCountFunc: () => void;
}

export const defaultValue: filterInterface = {
  filtering: () => {},
  responseFilter: [{}],
  load: false,
  setCountFunc: () => {},
};