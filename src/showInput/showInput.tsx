import {
  c,
  css,
  useProp,
  Props,
  useRef,
  useState,
  useEffect,
} from "atomico/core";
import { Status, usePromise } from "@atomico/hooks/use-promise";

function showInput(props: Props<typeof showInput>) {
  // const [message, setMessage] = useProp("message");
  // const [placeholder, setPlaceholder] = useProp("placeholder");
  // const [buttontext, setbuttontext] = useProp("buttontext");
  const [inputValue, setInputValue] = useState("");
  const ref = useRef();
  // const [messages, setMessages] = useState();
  // useEffect(() => {
  //   const { current } = ref;
  //   console.log(ref);
  //   current.addEventListener("input", () => {
  //     if (current.validity.typeMismatch) {
  //       setMessages("Invalid!");
  //     }
  //     current.setCustomValidity("");
  //   });
  // }, []);

  const [send, setSend] = useState(false);
  const [user, setUser] = useState();
  const [data, setData] = useState();
  const [check, setCheck] = useState(false);

  useEffect(() => {
    console.log(props.checked);
  }, []);

  const [result, status] = usePromise(
    async () =>
      await fetch("https://api.github.com/users/" + user).then((res) =>
        res.json()
      ),
    send,
    [user]
  );
  console.log(result);
  return (
    <host shadowDom>
      <input type="checkbox" checked={check}></input>
      {/* <input type="email" ref={ref} />
      {messages && <h1>{messages}</h1>} */}
      <div class="sbahn"> Hello {props.message}</div>
      <form
      // onsubmit={
      //   (e: Event) => {
      //     e.preventDefault();
      //     // setInputValue(e.target.value);
      //     console.log(e.currentTarget.);
      //   }
      //   // setInputValue(e.target.value);
      // }
      >
        <input
          placeholder={props.placeholder}
          oninput={({ target }) => {
            setUser(target.value);
          }}
        ></input>
        <button
          onclick={(e) => {
            e.preventDefault();
            setSend(true);
            setData(result);
            setCheck(true);

            console.log(send);
          }}
        >
          {props.buttontext}
        </button>
      </form>
      {result && (
        <>
          <img src={result?.avatar_url} alt="image"></img>
          <h1>{result?.name}</h1>
          <h1>status: {status} </h1>
        </>
      )}

      {/* <input class="in" oninput={({ target }) => setMessage(target.value)} /> */}
    </host>
  );
}

showInput.props = {
  checked: Boolean,
  message: {
    // value from index.html
    type: String,
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
