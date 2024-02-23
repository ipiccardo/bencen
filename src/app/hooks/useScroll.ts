import { useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';

export const useScroll = (id: string, offset: number) => {
  const router = useRouter();
  const pathname = usePathname();

  // useEffect(() => {
    

  //   if (pathname.includes(`#${id}`)) {
  //     setTimeout(scrollToElement, 100);
  //   }
  // }, [pathname, id, offset]);

  const scrollToElement = () => {
    const element = document.getElementById(`${id}`);
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return () => {
    // const href = `${pathname}#${id}`;
    // console.log("pasa por scrollear")
    // console.log(href)
    router.replace(`/dashboard/projects#${id}`, {
      scroll: false,
       // Hacer scroll a la parte superior de la página después de la navegación
    });
    setTimeout(scrollToElement, 100);
    console.log("hola")
  };
};
