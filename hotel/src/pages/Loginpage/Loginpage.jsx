import { useContext, useState } from "react";
import { Title } from "../../components/Title/title";
import style from "./Loginpage.module.scss";
import { UserContext } from "../../context/UserContext";

export const Loginpage = () => {
  const [message, setMessage] = useState("Indtast login oplysninger");
  const { setUserData, userData } = useContext(UserContext);

  async function handleLogin(event) {
    event.preventDefault();
  
    const url = "http://localhost:4000/login";
  
    if (event.target.username.value === "") {
      setMessage("Venligst indtast dit brugernavn");
      return;
    }

    if (event.target.password.value === "") {
      setMessage("Venligst indtast dit password");
      return;
    }

    let body = new URLSearchParams();

    body.append("username", event.target.username.value);
    body.append("password", event.target.password.value);

    let options = {
      method: "POST",
      body: body,
    };

    try {
      let res = await fetch(url, options);
      let data = await res.json();
      console.log(data);
    
      if (data?.access_token) {
        // Assuming the presence of access_token indicates success
        setUserData(data);
        setMessage(`Velkommen. Du er nu logget ind som ${data.user.firstname.lastname}`);
      } else {
        setMessage("Der opstod en fejl - prøv igen");
      }
    } catch (err) {
      console.error(err);
    }
    }
    

  return (
    <>
      <Title title={"Login"} />

      <form
        className={style.loginFormStyle}
        onSubmit={(event) => handleLogin(event)}
      >
        {message && <b>{message}</b>}

        <label>
          Username:
          <input type="text" name="username" />
        </label>
        <label>
          Password:
          <input type="password" name="password" />
        </label>
        <input type="submit" value="Log ind" />
      </form>
    </>
  );
};
