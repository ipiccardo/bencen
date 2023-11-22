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
