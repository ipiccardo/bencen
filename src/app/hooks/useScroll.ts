import { useRouter } from 'next/router';
import { useEffect } from 'react';

export const useScroll = (id: string, offset: number) => {
  const router = useRouter();

  useEffect(() => {
    // Función para hacer scroll al elemento específico
    const scrollToElement = () => {
      const element = document.getElementById(id);
      if (element) {
        // Obtener la posición del elemento y hacer scroll 80px por encima
        const elementPosition = element.getBoundingClientRect().top;
        window.scrollTo({
          top: window.pageYOffset + elementPosition - offset,
          behavior: 'smooth',
        });
      }
    };

    // Verificar si la ruta actual contiene el fragmento "#elemento-especifico"
    if (router.asPath.includes(`#${id}`)) {
      // Si la ruta actual contiene el fragmento, hacer scroll al elemento después de un pequeño retraso
      setTimeout(scrollToElement, 100);
    }
  }, [router.asPath, id, offset]); // Ejecutar efecto cada vez que cambia la ruta
};
