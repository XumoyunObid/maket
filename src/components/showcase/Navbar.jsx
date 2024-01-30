import showcase from "./showcase.module.scss";
const Navbar = () => {
  return (
    <div className={showcase.navwrapper}>
      <div className={`${showcase.navbar} container`}>
        <ul className={showcase.navList}>
          <li className={showcase.navlistitem}>О ресноте</li>
          <li className={showcase.navlistitem}>КАТАЛОГ</li>
          <li className={showcase.navlistitem}>НАШИ МАГАЗИНЫ</li>
          <li className={showcase.navlistitem}>КОНТАКТЫ</li>
        </ul>

        <div className={showcase.inputform}>
          <input type="text" placeholder="Поиск по сайту" className={showcase.input}/>
          <i className="fa-solid fa-magnifying-glass"></i>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
