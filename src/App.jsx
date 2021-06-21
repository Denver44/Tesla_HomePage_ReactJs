import "./styles/App.css";
import Header from "./components/Header/Header";
import Item from "./components/Item/Item";
import data from "./data/data.js";

const App = () => {
  return (
    <div className="App">
      <Header />
      <div className="app__itemContainer">
        {data.map(
          ({
            title,
            desc,
            descLink,
            backgroundImg,
            leftBtnLink,
            leftBtnTxt,
            rightBtnLink,
            rightBtnTxt,
            first,
            twoButton,
          }) => {
            return (
              <Item
                {...{
                  title,
                  desc,
                  descLink,
                  backgroundImg,
                  leftBtnTxt,
                  leftBtnLink,
                  rightBtnTxt,
                  rightBtnLink,
                  first,
                  twoButton,
                }}
              />
            );
          }
        )}
      </div>
    </div>
  );
};

export default App;
