import { useState, useRef } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import "./SignUp.css";

const SignUp = () => {
  const confirmRef = useRef();
  const navigate = useNavigate();
  const [signupData, setSignupData] = useState({
    email: "",
    password: "",
    passwordConfirm: "",
    name: "",
  });

  const [passwordMatch, setPasswordMatch] = useState(false);

  const handleSubmit = async () => {
    if (signupData.password === signupData.passwordConfirm) {
      try {
        const response = await axios.post(
          "http://semtle.catholic.ac.kr:8082/members/signup",
          {
            name: signupData.name,
            email: signupData.email,
            password: signupData.password,
          }
        );
        console.log("response 응답값", response);
        // 응답으로 accessToken이 반환됨. 바로 홈으로 보냄
        navigate("/login");

        setSignupData({
          email: "",
          password: "",
          passwordConfirm: "",
          name: "",
        });
      } catch (error) {
        console.error("회원가입 실패", error);
      }
    } else {
      setPasswordMatch(true);
      setSignupData({
        ...signupData,
        password: "",
        passwordConfirm: "",
      });
      confirmRef.current.focus();
    }
  };

  const imageUrl = process.env.PUBLIC_URL + "/어-맛! 로고.png";

  return (
    <div className="wrapper">
      <div className="content">
        <div className="icon">
          <Link to="/">
            <img
              width={"140px"}
              height={"140px"}
              src={imageUrl}
              alt="어맛!로고"
            />
          </Link>
        </div>
        <div className="logcontent">
          <h2>회원가입</h2>

          <div className="input-container">
            <div className="image-div">
              <img src="/user 1.png" alt="이름" />
            </div>
            <input
              className="log-input"
              type="text"
              placeholder="이름"
              value={signupData.name}
              onChange={(e) =>
                setSignupData({ ...signupData, name: e.target.value })
              }
            />
          </div>

          <div className="input-container">
            <div className="image-div">
              <img src="/at-sign 2.png" alt="mail" />
            </div>
            <input
              className="log-input"
              type="text"
              placeholder="이메일"
              value={signupData.email}
              onChange={(e) =>
                setSignupData({ ...signupData, email: e.target.value })
              }
            />
          </div>
          <div className="input-container">
            <div className="image-div">
              <img src="/lock 1.png" alt="lock" />
            </div>
            <input
              ref={confirmRef}
              style={{ outlineColor: "red" }}
              className="log-input"
              type="password"
              placeholder="비밀번호"
              value={signupData.password}
              onChange={(e) =>
                setSignupData({ ...signupData, password: e.target.value })
              }
            />
          </div>
          <div className="input-container">
            <div className="image-div">
              <img src="/lock 1.png" alt="lock" />
            </div>
            <input
              className="log-input"
              type="password"
              placeholder="비밀번호 확인"
              value={signupData.passwordConfirm}
              onChange={(e) =>
                setSignupData({
                  ...signupData,
                  passwordConfirm: e.target.value,
                })
              }
            />
          </div>
          {passwordMatch && (
            <p className="alert" style={{ color: "red" }}>
              * 비밀번호가 일치하지 않습니다.
            </p>
          )}
          <div>
            <button className="button-submit" onClick={handleSubmit}>
              가입하기
            </button>
          </div>

          <div>
            <span>이미 계정이 있으신가요? </span>&nbsp;
            <Link to="/login" style={{ textDecoration: "none" }}>
              <span className="goSignUp">로그인</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
