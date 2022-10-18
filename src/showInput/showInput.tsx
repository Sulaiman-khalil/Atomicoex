import { c, css, useProp, Props } from "atomico/core";

function showInput({
  message,
  placeholder,
  buttontext,
}: Props<typeof showInput>) {
  // const [message, setMessage] = useProp("message");
  // const [placeholder, setPlaceholder] = useProp("placeholder");
  // const [buttontext, setbuttontext] = useProp("buttontext");
  return (
    <host>
      <div class="sbahn"> Hello {message}</div>
      <form>
        <input placeholder={placeholder}></input>
        <button>{buttontext}</button>
      </form>
      {/* <input class="in" oninput={({ target }) => setMessage(target.value)} /> */}
    </host>
  );
}

showInput.props = {
  message: {
    type: String,
    value: "world",
  },
  placeholder: {
    type: String,
    value: "Enter a text",
  },
  buttontext: {
    type: String,
    value: "Serach",
  },
};
showInput.styles = css`
  .this {
    position: absloute;
  }
  .sbahn {
    color: white;
    background: black;
    font-weight: bold;
  }
`;
export const ShowInput = c(showInput);

customElements.define("show-input", ShowInput);
