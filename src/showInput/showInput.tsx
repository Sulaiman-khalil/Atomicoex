import { c, css, Props, useRef, useState, useEffect } from "atomico/core";
import { Status, usePromise } from "@atomico/hooks/use-promise";

function showInput({ message, placeholder, buttontext }) {
    // const [message, setMessage] = useProp("message");
    // const [placeholder, setPlaceholder] = useProp("placeholder");
    // const [buttontext, setbuttontext] = useProp("buttontext");
    const [inputValue, setInputValue] = useState("");

    const [user, setUser] = useState();
    const [data, setData] = useState();
    const [check, setCheck] = useState();

    const ref = useRef();
    return (
        <host shadowDom>
            <form>
                <input ref={ref} placeholder={placeholder}></input>
                <button
                    onclick={(e) => {
                        e.preventDefault();
                        console.log(ref.current.value);
                        setUser(ref.current.value);
                    }}
                >
                    {buttontext}
                </button>
            </form>
            <github-card user={user}></github-card>
        </host>
    );
}

showInput.props = {
    result: Object,
    user: String,
    checked: Boolean,
    message: {
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
`;
export const ShowInput = c(showInput);

customElements.define("show-input", ShowInput);
