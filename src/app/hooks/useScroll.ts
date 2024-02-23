import { useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';

export const useScroll = (id: string, offset: number) => {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const scrollToElement = () => {
      const element = document.getElementById(id);
      if (element) {
        const elementPosition = element.getBoundingClientRect().top;
        window.scrollTo({
          top: window.pageYOffset + elementPosition - offset,
          behavior: 'smooth',
        });
      }
    };

    if (pathname.includes(`#${id}`)) {
      setTimeout(scrollToElement, 100);
    }
  }, [pathname, id, offset]);

  return () => {
    const href = `${pathname}#${id}`;
    router.push(href, undefined);
  };
};
