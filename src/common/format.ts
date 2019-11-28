/**
 * parse and format the input curl command
 * @param input original curl content
 */
export const format = (input: string) => {
  return input.replace(
    /(\s-[A-Z]|--\b\w*\b)(\s\'(.*?)\')?/gm,
    match => match + " \\\n"
  );
};
