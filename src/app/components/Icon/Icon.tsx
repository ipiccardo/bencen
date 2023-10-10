"use client";

let Icons: any = {
  home: "/img/icons/home.svg",
  facebook: "/img/icons/facebook.svg",
  logo: "/img/icons/logo.svg",
  instagram: "/img/icons/instagram.svg",
  linkedin: "/img/icons/linkedin.svg",
};

/**
 * @param name Nombre del icono
 * @param size Tamaño del icono
 * @param color Color del icono
 * @param onClick Función a ejecutar al hacer click
 */

export type IconProps = {
  name: "home" | "facebook" | "logo" | "instagram" | "linkedin";
  size: number | string;
  onClick?: Function;
};

//Considerar agregar una prop color (ejemplo: para el hover)
export default function Icon({ name, size = "18px", onClick }: IconProps) {
  let src = Icons[name] ? Icons[name] : "/img/icons/home.svg";

  return (
    <span className="icon">
      <img
        src={src}
        title={name}
        alt={name}
        height={size}
        width={size}
        onClick={() => {
          onClick ? onClick() : null;
        }}
      />
    </span>
  );
}
