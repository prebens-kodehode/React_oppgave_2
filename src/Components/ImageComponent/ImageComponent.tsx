import { useState } from "react";
import style from "./ImageComponent.module.css";
import likeIcon from "../../assets/SVG/heart_light.svg";
import likedIcon from "../../assets/SVG/heart_red.svg";

interface ImageComponentProps {
  src: string;
  alt: string;
  fact: string;
}

const ImageComponent = ({ src, alt, fact }: ImageComponentProps) => {
  // state to hold the number of likes
  const [likes, setLikes] = useState(0);

  // state to hold whether the image is liked or not
  const [isliked, setIsLiked] = useState(false);

  // function to handle like button click
  const handleLike = () => {
    setIsLiked(!isliked);
    setLikes(isliked ? likes - 1 : likes + 1);
  };

  return (
    <div className={style.imageComponent}>
      <img className={style.image} src={src} alt={alt} />
      <div className={style.imageComponentBottom}>
        <div className={style.description}>
          <h3 className={style.descriptionName}>{alt}</h3>
          <p>{fact}</p>
        </div>
        <div className={style.likeSection}>
          <p>{likes} likes</p>
          <button className={style.likeButton} onClick={handleLike}>
            <img src={isliked ? likedIcon : likeIcon} alt="like icon" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageComponent;
