export const getOrder = (name: string): number => {
  switch (name) {
    case 'General':
      return 1;
    default:
      return 2;
  }
};
