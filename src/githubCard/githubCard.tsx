import {
    c,
    css,
    Props,
    useRef,
    useState,
    useEffect,
    useProp,
} from "atomico/core";
import { Status, usePromise } from "@atomico/hooks/use-promise";

function githubCard({ user }) {
    // }, []);

    const [result, status] = usePromise(
        async () =>
            await fetch("https://api.github.com/users/" + user).then((res) =>
                res.json()
            ),
        true,
        [user]
    );
    useEffect(() => {
        console.log(result);
    }, []);

    return (
        <host shadowDom>
            <div class="de">
                <img src={result?.avatar_url} alt="image"></img>
                <h1 class="namo">{result?.name}</h1>
                <h1>followers: {result?.followers}</h1>
            </div>

            {/* <input class="in" oninput={({ target }) => setMessage(target.value)} /> */}
        </host>
    );
}

githubCard.props = {
    result: Object,
    user: String,
};
githubCard.styles = css`
    :host {
        display: flex;
        justify-content: center;
        flex-direction: column;
    }
`;
export const GithubCard = c(githubCard);

customElements.define("github-card", GithubCard);
