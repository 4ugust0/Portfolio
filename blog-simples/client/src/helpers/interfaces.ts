export interface WrapperElements {
  children?: JSX.Element | JSX.Element[] | React.ReactNode;
}

export interface CardNewsInterface {
  date: string;
  title: string;
  text: string;
}

export interface SearchInterface {
  onChange: (e: any) => void;
  onSubmit: (e: any) => void;
}
