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
            <github-card user={user}></github-card>
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
    p {
        margin: 30px;
    }

    .profil {
        display: flex;
        justify-content: center;
        border-radius: 50%;
        margin-top: -150px;
        width: 30%;
        border: 2px solid goldenrod;

        /* margin-top: -150px;
    width: 20%;
    border-radius: 50%; */
    }
    .name {
        color: goldenrod;
        background: black;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: large;
        font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
            "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
    }
    .info {
        display: flex;
        align-items: center;
        justify-content: center;
    }
    ul {
    }
    li {
        border: 1px solid rgb(195, 195, 195);
        list-style: none;
        /* background: rgb(255, 255, 255); */
        /* box-shadow: 10px 10px 50px 1px rgb(13, 1, 24); */
    }
    p {
        color: black;
        font-size: larger;
        font-weight: 600;
        background: whitesmoke;
    }
    span {
        display: flex;
        justify-content: center;
        color: rgb(6, 6, 6);
        font-size: 30px;
        background: rgb(59, 96, 2);
        color: whitesmoke;
    }

    .all {
        background: black;
    }
`;
export const ShowInput = c(showInput);

customElements.define("show-input", ShowInput);
