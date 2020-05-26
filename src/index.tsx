export const useIntl = () => {
  const intls = {
    greeting: 'Hello, World!',
  };

  return (key: string): string => intls[key];
};
