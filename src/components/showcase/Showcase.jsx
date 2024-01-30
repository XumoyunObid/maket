import showcase from "./showcase.module.scss";

const Showcase = () => {
  return (
    <div className={showcase.showcase}>
      <div className={showcase.wrapper}>
      <div className="container">
      <div className={showcase.leftside}>
        <h1 className={showcase.title}>Истина в качестве</h1>
        <p className={showcase.text}>
          КОМПАНИЯ «РЕСНОТА» ПРОИЗВОДИТ <br /> БОЛЕЕ 100 ВИДОВ ПРОДУКТОВ
          ПИТАНИЯ: <br />
          КОЛБАСНЫЕ И МЯСНЫЕ ИЗДЕЛИЯ, <br />
          ХЛЕБНАЯ И МОЛОЧНАЯ ПРОДУКЦИЯ
        </p>

        <button className={showcase.btn}>Купить</button>
      </div>
      </div>
      </div>
    </div>
  );
};

export default Showcase;
