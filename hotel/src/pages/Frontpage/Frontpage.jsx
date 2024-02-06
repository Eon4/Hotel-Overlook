import { useEffect, useState } from "react";
import style from "./Frontpage.module.scss";
import { LatestNews } from "../../components/LatestNews/latestNews";

export const Frontpage = () => {
  const [news, setNews] = useState([]);

  // Effect to fetch all news on component mount
  useEffect(() => {
    let url = `http://localhost:4000/news`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setNews(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <div className={style.newsCardWrapper}>
        {news?.map((item) => (
          <LatestNews
            key={item.id}
            title={item.title}
            teaser={item.teaser}
            image={item.image}
          />
        ))}
      </div>
    </>
  );
};
