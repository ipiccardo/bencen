export const convertLinkString = (string: string): string => {
  return string
    .toLowerCase()
    .replace(/[^a-zA-Z0-9]+(.)/g, (match, chr) => chr.toUpperCase());
};


export const changeFolderPath = (string: string) => {
  console.log(string)
  switch (string) {
    case 'Acerca de nosotros':
      return 'aboutUs'

    //       //Declaraciones ejecutadas cuando el resultado de expresión coincide con el valor1
    //       [break;]
    //     case valor2:
    //       //Declaraciones ejecutadas cuando el resultado de expresión coincide con el valor2
    //       [break;]
    //     ...
    //     case valorN:
    // //Declaraciones ejecutadas cuando el resultado de expresión coincide con valorN
    // [break;]
    //     default:
    // //Declaraciones ejecutadas cuando ninguno de los valores coincide con el valor de la expresión
    // [break;]
  }
}