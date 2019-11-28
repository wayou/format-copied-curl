/** extend native html attributes */
export type ExtendedHTMLAttributes<
  /** native element type */
  T extends React.HtmlHTMLAttributes<HTMLElement>,
  /** custom props */
  P
> = P &
  React.DetailedHTMLProps<
    T,
    T extends React.HtmlHTMLAttributes<infer K> ? K : HTMLElement
  >;
