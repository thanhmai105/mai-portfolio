export const useScreen = () => {
  const { width, height } = window.screen;
  return {
    width,
    height,
  };
};
