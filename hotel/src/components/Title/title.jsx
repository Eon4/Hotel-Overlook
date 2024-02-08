import style from "./title.module.scss";

export const Title = ({ title }) => {
  return <h2 className={style.titleStyle}>{title}</h2>;
};