import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Main from "./Main/Main";
import style from "./App.module.scss";
const App = () => {
  return (
    <div className={style.wrap}>
      {/* <Header /> */}
      <Main />
      <Footer />
    </div>
  );
};

export default App;
