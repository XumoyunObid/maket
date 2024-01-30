import React from "react";
import { Banner } from "./banner";
import { banners } from "../data/banners";

let num = 0;

export const BannerContainer = () => {
  const result = banners.map((item) => {
    num += 1;
    console.log(num);
    if (num <= 3) {
      return <Banner area={"small"} img={item.url} title={item.title} />;
    } else if (num > 3 && num <= 5) {
      if (num == 5) {
        num = 0;
      }
      return <Banner area={"full"} img={item.url} title={item.title} />;
    }
  });
  return result;
};
