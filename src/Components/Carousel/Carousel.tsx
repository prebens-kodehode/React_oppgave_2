import style from "./Carousel.module.css";

interface CarouselProps {
  children: React.ReactNode;
}

const Carousel = ({ children }: CarouselProps) => {
  return <div className={style.carousel}>{children}</div>;
};

export default Carousel;
