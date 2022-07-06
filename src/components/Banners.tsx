import React, { useEffect, useState } from "react";
interface Banner {
  image: string;
  title: string;
  subtitle: string;
}
const Banners = () => {
  const [activeBanner, setActiveBanner] = useState<number>(0);
  const [banners, setBanners] = useState<Banner[]>([
    {
      image:
        "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
      title: "Lorem  1",
      subtitle: "Lorem ipsum dolor sit amet, consectetur 1",
    },
    {
      image:
        "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
      title: "Lorem  2",
      subtitle: "Lorem ipsum dolor sit amet, consectetur 2",
    },
  ]);

  const fetchFromUnsplash = async () => {
    const url =
      "https://api.unsplash.com/photos/random/?client_id=Mga-ffVBLesCFjMRyCgRDaj3PqqEJ0AQHVeskA-LntQ&?orientation=landscape&count=5";
    const response = await fetch(url);
    const data = await response.json();
    const bannersResp = data.map(
      (banner: { urls: { regular: string } }, i: number) => ({
        image: banner.urls.regular,
        title: "Lorem ipsum dolor sit amet" + i,
        subtitle: "Lorem ipsum dolor sit amet, consectetur " + i,
      })
    );
    setBanners(bannersResp);
  };
  useEffect(() => {
    fetchFromUnsplash();
    // first
    // return () => {
    //   second
    // }
  }, []);

  return (
    <div className="banner">
      {/* "https://img.freepik.com/free-photo/technological-background-purple-with-code-elements-lights-lines_272306-164.jpg?w=2000" */}
      <img className="banner-image" src={banners[activeBanner].image} />
      <div className="banner-content">
        <h1 className="banner-title">{banners[activeBanner].title}</h1>
        <div className="banner-subtitle-container">
          <div className="banner-subtitle-icon"></div>
          <p className="banner-subtitle">{banners[activeBanner].subtitle}</p>
        </div>
        <div className="banner-indicator-container">
          {banners.map((_banner, i) => (
            <div
              onClick={() => setActiveBanner(i)}
              className={`banner-indicator ${
                i === activeBanner ? "active" : null
              }`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Banners;
