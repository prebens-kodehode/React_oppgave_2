import { useState } from "react";
import style from "./ImageComponent.module.css";
import likeIcon from "../../assets/SVG/heart_dark.svg";
import likedIcon from "../../assets/SVG/heart_red.svg";

interface ImageComponentProps {
  src: string;
  alt: string;
}

const ImageComponent = ({ src, alt }: ImageComponentProps) => {
  const [likes, setLikes] = useState(0);
  const [isliked, setIsLiked] = useState(false);

  const handleLike = () => {
    setIsLiked(!isliked);
    setLikes(isliked ? likes - 1 : likes + 1);
  };

  return (
    <div className={style.imageComponent}>
      <img src={src} alt={alt} />
      <div className={style.likeSection}>
        <span>{likes}</span>
        <button onClick={handleLike}>
          <img src={isliked ? likedIcon : likeIcon} alt="like icon" />
        </button>
      </div>
    </div>
  );
};

export default ImageComponent;
