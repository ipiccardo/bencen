"use client";

import { IconProps } from "@/app/types";
import FacebookIcon from "./Icons/FacebookIcon";
import HomeIcon from "./Icons/HomeIcon";
import InstagramIcon from "./Icons/InstagramIcon";
import LinkedinIcon from "./Icons/LinkedinIcon";
import LogoIcon from "./Icons/LogoIcon";
import HamburguerIcon from "./Icons/HamburguerIcon";

const Icons = (name: string, size: number) => {
  switch (name) {
    case "home":
      return <HomeIcon size={size} />;
    case "facebook":
      return <FacebookIcon size={size} />;
    case "instagram":
      return <InstagramIcon size={size} />;
    case "linkedin":
      return <LinkedinIcon size={size} />;
    case "logo":
      return <LogoIcon size={size} />;
    case "hamburguer":
      return <HamburguerIcon size={size} />;
    default:
      return <HomeIcon size={size} />;
  }
};

/**
 * @param name Nombre del icono
 * @param size Tamaño del icono
 * @param onClick Función a ejecutar al hacer click
 */

export default function Icon({ name, size = 20, onClick }: IconProps) {

  return Icons(name, size);
}
