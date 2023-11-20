import { IconSVGProps } from "@/app/types";
import classes from "./icon.module.css";

const LinkedinIconBlue = ({ size }: IconSVGProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={classes.fillColorVariant}
    >
      <path 
        d="M21.7222 0H1.27778C0.93889 0 0.613882 0.134623 0.374252 0.374252C0.134623 0.613882 0 0.93889 0 1.27778V21.7222C0 22.0611 0.134623 22.3861 0.374252 22.6257C0.613882 22.8654 0.93889 23 1.27778 23H21.7222C22.0611 23 22.3861 22.8654 22.6257 22.6257C22.8654 22.3861 23 22.0611 23 21.7222V1.27778C23 0.93889 22.8654 0.613882 22.6257 0.374252C22.3861 0.134623 22.0611 0 21.7222 0ZM6.82206 19.5973H3.40783V8.62117H6.82206V19.5973ZM5.11494 7.12233C4.59035 7.12233 4.08723 6.91394 3.71629 6.54299C3.34534 6.17204 3.13694 5.66893 3.13694 5.14433C3.13694 4.61974 3.34534 4.11662 3.71629 3.74568C4.08723 3.37473 4.59035 3.16633 5.11494 3.16633C5.63954 3.16633 6.14265 3.37473 6.5136 3.74568C6.88455 4.11662 7.09294 4.61974 7.09294 5.14433C7.09294 5.66893 6.88455 6.17204 6.5136 6.54299C6.14265 6.91394 5.63954 7.12233 5.11494 7.12233ZM19.5986 19.5973H16.1882V14.26C16.1882 12.9873 16.1652 11.3505 14.4146 11.3505C12.6385 11.3505 12.3689 12.7382 12.3689 14.1706V19.5986H8.96105V8.62245H12.2322V10.1226H12.2794C12.7331 9.26006 13.8473 8.35028 15.5046 8.35028C18.9597 8.35028 19.5973 10.6222 19.5973 13.5789L19.5986 19.5973Z"
        fill="inherit"
      />
    </svg>
  );
};

export default LinkedinIconBlue;