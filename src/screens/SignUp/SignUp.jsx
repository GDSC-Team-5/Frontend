import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

const SignUp = () => {
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
        const response = await axios.post("baseURL/members/signup", {
          email: signupData.email,
          password: signupData.password,
          nickName: signupData.nickName,
        });
        console.log("response 응답값", response);
        // 응답으로 accessToken이 반환됨. 바로 홈으로 보냄
        navigate("/");

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
    }
  };

  return (
    <div className="wrapper">
      <div className="input-h1">
        <h1>
          <Link to="/">
            <span>ATASTE</span>
          </Link>
        </h1>
      </div>
      <div className="input">
        <input
          className="input-email"
          type="text"
          placeholder="이메일"
          value={signupData.email}
          onChange={(e) =>
            setSignupData({ ...signupData, email: e.target.value })
          }
        />
      </div>
      <div className="input">
        <input
          className="input-password"
          type="password"
          placeholder="비밀번호"
          value={signupData.password}
          onChange={(e) =>
            setSignupData({ ...signupData, password: e.target.value })
          }
        />
      </div>
      <div className="input">
        <input
          className="input-passwordConfirm"
          type="password"
          placeholder="비밀번호 확인"
          value={signupData.passwordConfirm}
          onChange={(e) =>
            setSignupData({ ...signupData, passwordConfirm: e.target.value })
          }
        />
        {passwordMatch && (
          <p className="alert" style={{ color: "red" }}>
            * 비밀번호가 일치하지 않습니다.
          </p>
        )}
      </div>
      <div className="input">
        <input
          className="input-name"
          type="text"
          placeholder="이름"
          value={signupData.name}
          onChange={(e) =>
            setSignupData({ ...signupData, name: e.target.value })
          }
        />
      </div>
      <div className="button">
        <button className="button-submit" onClick={handleSubmit}>
          가입하기
        </button>
      </div>
    </div>
  );
};

export default SignUp;
