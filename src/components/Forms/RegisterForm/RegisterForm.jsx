import SubmitButton from "../../SubmitButton/SubmitButton";

import { RegisterFormStyled } from "./RegisterFormStyled.styled";

const RegisterForm = () => {
  return (
    // <RegForm method="post" action="https://register-demo.camp.org">
    <RegisterFormStyled>
      <label>
        Name :
        <input
          placeholder="First"
          id="first"
          // aria-label="First name"
          type="text"
          name="first"
          autoComplete="username"
          required
          // defaultValue={contact.first}
        />
        <input
          placeholder="Last  (optional)"
          id="last"
          // aria-label="Last name"
          type="text"
          name="last"
          autoComplete="username"

          // defaultValue={contact.last}
        />
      </label>

      <label htmlFor="not-matter">
        <span id="gender-text">Enter your gender :</span>
        <span className="gender-buttons">
          <div className="gender">
            <input id="not-matter" type="radio" name="gender" value="1" />
            <label htmlFor="not-matter">Doesn't matter</label>
          </div>
          <div className="gender">
            <input id="male" type="radio" name="gender" value="2" />
            <label htmlFor="male">Male</label>
          </div>
          <div className="gender">
            <input id="female" type="radio" name="gender" value="3" />
            <label htmlFor="female">Female</label>
          </div>
        </span>
      </label>

      <label>
        Avatar URL :
        <input
          placeholder="https://example.com/avatar.jpg  (optional)"
          // aria-label="Avatar URL"
          // type="file"
          // name="file"
          id="avatar"
          type="text"
          // defaultValue={contact.avatar}
        />
      </label>

      <label>
        E-mail :
        <input
          type="email"
          name="email"
          placeholder="******@ukr.net"
          autoComplete="username"
          required
        />
      </label>

      <label>
        Your age :
        <input
          id="age"
          type="number"
          name="age"
          min="10"
          max="100"
          placeholder="age"
          required
        />
      </label>

      <label>
        Your Zodiac Sign :
        <select id="drop-down" name="dropdown" defaultValue="0" required>
          <option disabled value="0"></option>
          <option value="1">♈Aries (March 21–April 19)</option>
          <option value="2">♉Taurus (April 20–May 20)</option>
          <option value="3">♊Gemini (May 21–June 21)</option>
          <option value="4">♋Cancer (June 22–July 22)</option>
          <option value="5">♌Leo (July 23–August 22)</option>
          <option value="6">♍Virgo (August 23–September 22)</option>
          <option value="7">♎Libra (September 23–October 23)</option>
          <option value="8">♏Scorpio (October 24–November 21)</option>
          <option value="9">♐Sagittarius (November 22–December 21)</option>
          <option value="10">♑Capricorn (December 22–January 19)</option>
          <option value="11">♒Aquarius (January 20–February 18)</option>
          <option value="12">♓Pisces (February 19–March 20)</option>
        </select>
      </label>

      <label>
        Notes :
        {/* <textarea name="notes" defaultValue={contact.notes} rows={3} /> */}
        <textarea
          name="notes"
          placeholder="Something about you...  (optional)"
          defaultValue=""
          rows={2}
        />
      </label>
      <label>
        Create a Password:
        <input
          id="new-password"
          name="new-password"
          type="password"
          autoComplete="new-password"
          pattern="[a-z0-5]{3,}"
          // pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
          title="Пароль не може бути меншим за вісім символів і має містити хоча б одну цифру, одну маленьку та одну велику латинську літеру."
          required
        />
      </label>
      {/* <SubmitButton id="submit-button">SAVE</SubmitButton> */}

      <SubmitButton  id="submit-button" disabled={false}>
        SAVE
      </SubmitButton>
      {/* <p>
        <button type="submit">Save</button>
        <button
          // type="button">, хотя и кажется избыточным,
          // представляет собой HTML-способ предотвращения отправки формы кнопкой.
          type="button"
          onClick={() => {
            // navigate(-1);
          }}
        >
          Cancel
        </button>
      </p> */}
    </RegisterFormStyled>
  );
};

export default RegisterForm;
