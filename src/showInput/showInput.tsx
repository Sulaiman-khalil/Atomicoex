import { c, css, Props, useRef, useState, useEffect } from "atomico/core";
import { Status, usePromise } from "@atomico/hooks/use-promise";

function showInput({ message, placeholder, buttontext }) {
    // const [message, setMessage] = useProp("message");
    // const [placeholder, setPlaceholder] = useProp("placeholder");
    // const [buttontext, setbuttontext] = useProp("buttontext");
    const [inputValue, setInputValue] = useState("");

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

    const [user, setUser] = useState();
    const [data, setData] = useState();
    const [check, setCheck] = useState(false);

    const [unsplash, status] = usePromise(
        async () =>
            await fetch(
                `https://api.unsplash.com/photos/random?client_id=nIN9of7odLV7T3z7JRmoAx4SJpKHJYOoPXZ4LwRAlJE`
            ).then((res) => res.json()),
        true,
        []
    );

    return (
        <host shadowDom>
            <form>
                <input
                    placeholder={placeholder}
                    oninput={({ target }) => {
                        setUser(target.value);
                    }}
                ></input>
                <button
                    onclick={(e) => {
                        e.preventDefault();

                        setCheck(true);
                    }}
                >
                    {buttontext}
                </button>
            </form>
            {user && (
                <div>
                    <img class="back" src={unsplash.urls.regular}></img>
                    <github-card user={user}></github-card>
                </div>
            )}
            {/* {result && (
                <div class="de">
                    <img src={result?.avatar_url} alt="image"></img>
                    <h1 class="namo">{result?.name}</h1>
                    <h1>followers: {result.followers}</h1>
                    <h1>status: {status} </h1>
                </div>
            )} */}

            {/* <input class="in" oninput={({ target }) => setMessage(target.value)} /> */}
        </host>
    );
}

showInput.props = {
    result: Object,
    user: String,
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
    form {
        display: flex;
        justify-content: center;
        align-items: center;
        background: black;
    }
    input {
        margin-left: 10px;
        padding: 10px;
        width: 900%;
    }
    input:hover {
        background: whitesmoke;
    }
    input:active {
        background: salmon;
    }
    input:focus {
        background: salmon;
    }
    button {
        width: 100%;
        padding: 10px;
        margin: 20px;
        background: yellowgreen;
        color: black;
        border: solid 2px salmon;
    }
    button:hover {
        color: white;
        border: solid 3px salmon;
        background: black;
    }
    .back {
        display: flex;
        margin: auto;
        margin-top: 0.3px;
        width: 100%;
        height: 400px;
        object-fit: cover;
    }
`;
export const ShowInput = c(showInput);

customElements.define("show-input", ShowInput);
