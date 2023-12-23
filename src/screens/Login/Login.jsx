import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [loginConfirm, setLoginConfirm] = useState(false);
  const imageUrl = process.env.PUBLIC_URL + "/어-맛! 로고.png";

  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        "http://taste.suitestudy.com:8082/members/login",
        loginData
      );
      // response 확인용 출력(확인 후 삭제)

      if (response.data) {
        console.log(`response.data:`, response.data);
        console.log("로그인 성공!");
        const { accessToken, refreshToken } = response.data;
        Cookies.set("accessToken", accessToken, { expires: 7 });
        Cookies.set("refreshToken", refreshToken, { expires: 7 });

        navigate("/"); // 로그인 성공 시 메인 페이지로
      }
    } catch (error) {
      console.error("로그인 실패:", error);
      setLoginConfirm(true);
      // navigate("/login");
      // window.alert(`"로그인에 실패했습니다. 다시 시도해 주세요."`);
    }
    setLoginData({ email: "", password: "" });
  };
  return (
    <div className="wrapper" style={{ minWidth: "600px" }}>
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
          <h2>로그인</h2>
          <div className="input-container-parent">
            <div
              className="onlyInput
            "
              style={{ position: "relative" }}
            >
              <div className="input-container">
                <div className="image-div">
                  <img src="/at-sign 2.png" alt="@" />
                </div>
                <input
                  className="log-input"
                  type="text"
                  placeholder="이메일"
                  value={loginData.email}
                  onChange={(e) =>
                    setLoginData({ ...loginData, email: e.target.value })
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
                  placeholder="비밀번호"
                  value={loginData.password}
                  onChange={(e) =>
                    setLoginData({ ...loginData, password: e.target.value })
                  }
                />
              </div>
              {loginConfirm && (
                <p
                  style={{
                    color: "#F23C3C",
                    fontSize: "18px",
                    position: "absolute",
                    left: "7px",
                  }}
                >
                  * 이메일 또는 비밀번호를 다시 확인하세요
                </p>
              )}
            </div>

            <div>
              <button className="button-submit" onClick={handleSubmit}>
                로그인
              </button>
            </div>
          </div>

          <div>
            <span>계정이 없으신가요? </span>&nbsp;
            <Link to="/signup" style={{ textDecoration: "none" }}>
              <span className="goSignUp">회원가입</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
