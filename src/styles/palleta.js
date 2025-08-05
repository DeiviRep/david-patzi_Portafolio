
const useThema = () => {

  const GREY = {
    0: "#FFFFFF",
    100: "#F9FAFB",
    200: "#F4F6F8",
    300: "#DFE3E8",
    400: "#C4CDD5",
    500: "#919EAB",
    600: "#637381",
    700: "#454F5B",
    800: "#212B36",
    900: "#161C24",
  };
  const PALETE = {
    lighter: "#23d5ab",
    light: "#23a6d5",
    hover: "#00ffff",
    descripcion: "#aeaeae",
    main: "#8e6de7",
    dark: "#ee7752",
    darker: "#131212",
    contrastText: "#fff",
    paper: "#272727",
    bagckground: "#334d50",
  };

  const SECONDARY = {
    lighter: "#a1a7bc",
    light: "#777d91",
    main: "#111827",
    dark: "#44495b",
    darker: "#222838",
    contrastText: "#fff",
  };

  const INFO = {
    lighter: "#e4f0ff",
    light: "#98c1ff",
    main: "#6596f7",
    dark: "#5b76e1",
    darker: "#493296",
    contrastText: "#fff",
  };

  const SUCCESS = {
    lighter: "#b5ead4",
    light: "#55d099",
    main: "#00C584",
    dark: "#009855",
    darker: "#095433",
    contrastText: "#fff",
  };

  const WARNING = {
    lighter: "#ffe2bc",
    light: "#ffbc68",
    main: "#FFA141",
    dark: "#eb7837",
    darker: "#c2542c",
    contrastText: GREY[800],
  };

  const ERROR = {
    lighter: "#ffccd7",
    light: "#f896a1",
    main: "#FF4159",
    dark: "#f70b40",
    darker: "#c90025",
    contrastText: "#fff",
  };
  const thema = {
    palete: PALETE,
    secundari: SECONDARY,
    info: INFO,
    success: SUCCESS,
    warning: WARNING,
    error: ERROR,
  };
  return { thema };
};

export default useThema;
