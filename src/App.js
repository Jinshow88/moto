import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <div className="mein">
        <h1>당근</h1>
        <div id = "title ">아이디
          <span className="box int_id">
            <input type="text" id="id" className="int" maxLength="20" />
            <button id = "but">중복 확인</button>
          </span>
        </div>
        <div className = "title ">비밀번호
          <span className="box int_id">
            <input type="text" id="id" className="int" maxLength="20" />
          </span>
        </div>
        <div className = "title ">비밀번호 확인
          <span className="box int_id">
            <input type="text" id="id" className="int" maxLength="20" />
          </span>
        </div>
        <div className = "title ">이름
          <span className="box int_id">
            <input type="text" id="id" className="int" maxLength="20" />
          </span>
        </div>
        <div className = "title ">휴대폰
          <span className="box int_id">
            <input type="text" id="id" className="int" maxLength="20" />
          </span>
        </div>
        <div>
          <button className = "button">가입하기</button>
        </div>
      </div>
    </div>
  );
}

export default App;
