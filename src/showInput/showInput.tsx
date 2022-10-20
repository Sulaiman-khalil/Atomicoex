import { c, css, Props, useRef, useState, useEffect } from "atomico/core";
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
            <form>
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
                <div class="de">
                    <img src={result?.avatar_url} alt="image"></img>
                    <h1 class="namo">{result?.name}</h1>
                    <h1>followers: {result.followers}</h1>
                    <h1>status: {status} </h1>
                </div>
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
    :host {
        display: flex;
        justify-content: center;
        flex-direction: column;
    }
    input {
        width: 400px;
        height: 50px;
    }
    button {
        margin: 5px;
        color: white;
        background: black;
        width: 150px;
        height: 40px;
    }
    button:hover {
        background: red;
        color: black;
        box-shadow: 3px 3px 3px 3px black;
    }
    img {
        width: 600px;
        height: 350px;
        margin-top: 10px;
    }
`;
export const ShowInput = c(showInput);

customElements.define("show-input", ShowInput);
