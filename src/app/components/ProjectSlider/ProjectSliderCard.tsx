import Image from "next/image";
import classes from "./ProjectSliderCard.module.css";

interface ProjectSliderCardProps {
  imageSrc: string;
  projectName: string;
  projectYear: string;
  className?: string;
}

const ProjectSliderCard: React.FC<ProjectSliderCardProps> = ({
  imageSrc,
  projectName,
  projectYear,
  className,
}) => {
  return (
    <div className={`${classes.projectSliderCard} ${className}`}>
      <div className={classes.imageContainer}>
        <Image
          src={imageSrc}
          alt={projectName}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className={classes.cardContent}>
        <h2>{projectName}</h2>
        <span>{projectYear}</span>
      </div>
    </div>
  );
};

export default ProjectSliderCard;
