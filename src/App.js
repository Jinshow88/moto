import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <div className="mein">
        <h1>당근</h1>
        <div className = "title ">아이디 </div>        
          <div>
          <span className="box int_id">
            <input type="text" id="id" className="int" maxLength="20" />

          </span>
          <button className = "but">중복 확인</button>
        </div>
        <div className = "title ">비밀번호 </div>        
        <div>
          <span className="box int_id">
            <input type="text" id="id" className="int" maxLength="20" />
          </span>
        </div>
        <div className = "title ">비밀번호 확인 </div>        
        <div>
          <span className="box int_id">
            <input type="text" id="id" className="int" maxLength="20" />
          </span>
        </div>
        <div className = "title ">이름 </div>        
        <div>
          <span className="box int_id">
            <input type="text" id="id" className="int" maxLength="20" />
          </span>
        </div>
        <div className = "title ">휴대폰 </div>        
        <div>
          <span className="box int_id">
            <input type="text" id="id" className="int" maxLength="20" />
          </span>
          <button className = "but">인증하기</button>
        </div>
        <button className = "sign">가입하기</button>
      </div>
    </div>
  );
}

export default App;
