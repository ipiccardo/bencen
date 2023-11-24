export const convertLinkString = (string: string): string => {
  return string
    .toLowerCase()
    .replace(/[^a-zA-Z0-9]+(.)/g, (match, chr) => chr.toUpperCase());
};

export const changeFolderPath = (string: string) => {
  switch (string) {
    case "Sobre Nosotros":
      return "aboutUs";
    case "Servicios":
      return "services";
    case "Noticias":
      return "news";
    case "Contacto":
      return "contact";
    case "Proyectos":
      return "projects";
    case "Política de Privacidad":
      return "polTicaDePrivacidad";
    case "Términos y Condiciones":
      return "termsAndConditions";
    default:
      return convertLinkString(string);
  }
};

export const languageRendering = (language: string, object: any) =>
  language === "english" ? object.english : object.spanish;

export const returnImageForServicePath = (stringTitle: string) => {
  switch (stringTitle) {
    case "Civil Works" || "Obras Civiles":
      return "/img/civil-works.jpg";
    case "Architecture" || "Arquitectura":
      return "/img/architecture.jpg";
    case "Environment" || "Medio ambiente":
      return "/img/environment.jpg";
    case "Special Projects" || "Proyectos especiales":
      return "/img/special-projects.jpg";
    default:
      return "";
  }
};
