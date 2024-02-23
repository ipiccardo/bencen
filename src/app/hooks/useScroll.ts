import { useRouter } from 'next/navigation';

export const useScroll = (id: string, offset: number, desiredPath: string) => {
  const router = useRouter();

  const scrollToElement = () => {
    const element = document.getElementById(`${id}`);
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return () => {
    router.replace(desiredPath, {
      scroll: true,
    });
    setTimeout(() => scrollToElement(), 1300);
  };
};
