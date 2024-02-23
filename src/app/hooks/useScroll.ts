import { useRouter, usePathname } from 'next/navigation';

export const useScroll = (id: string, offset: number) => {
  const router = useRouter();
  const pathname = usePathname();

  const scrollToElement = () => {
    const element = document.getElementById(`${id}`);
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return () => {
    router.replace(`/dashboard/projects`, {
      scroll: true,
    });
    setTimeout(() => scrollToElement(), 1300);
  };
};
