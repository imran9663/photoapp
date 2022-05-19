import logo from './logo.svg';
import './App.css';
import { Images } from './Images';

function App() {
  let img = Object.values(Images)
  console.log();
  return (
    <div className="App">
      <div className="head-wrapper">
        <h3 className="local-img-head">Local Images</h3>
      </div>
      <div className="local-images">
        {img.map(item => {
          return (
            <div className="image_wrapper">
              <img className="local-image" src={item} alt="image001" />
            </div>
          )
        })}

      </div>
      <div className="head-wrapper">
        <h3 className="local-img-head">Server Images</h3>
      </div>
      <div className="local-images">
        <div className="image_wrapper">
          <img className="local-image" src={"https://random.imagecdn.app/501/150"} alt="image001" />
        </div>
        <div className="image_wrapper">
          <img className="local-image" src={"https://random.imagecdn.app/500/151"} alt="image001" />
        </div>
        <div className="image_wrapper">
          <img className="local-image" src={"https://random.imagecdn.app/2000/150"} alt="image001" />
        </div>
        <div className="image_wrapper">
          <img className="local-image" src={"https://random.imagecdn.app/2500/1150"} alt="image001" />
        </div>
        <div className="image_wrapper">
          <img className="local-image" src={"https://random.imagecdn.app/5100/1250"} alt="image001" />
        </div>
      </div>
      {/* <img className="local-image" src={"https://random.imagecdn.app/500/150"} alt="image001" /> */}
    </div>
  );
}

export default App;
