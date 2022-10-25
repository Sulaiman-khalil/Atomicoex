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
        console.log(status);
    });

    return (
        <host shadowDom>
            <div class="all">
                <div>
                    <img
                        class="back"
                        src="https://source.unsplash.com/random"
                    ></img>
                </div>

                <div class="user">
                    <div class="myimage">
                        <img class="profil" src={result?.avatar_url}></img>
                    </div>
                    <div class="name">
                        <h1> {result?.name}</h1>
                    </div>
                    <div class="secound">
                        <ul class="info">
                            <li>
                                <p>Followers </p>
                                <span>{result?.followers}</span>
                            </li>
                            <li>
                                <p>Following</p>
                                <span>{result?.following} </span>
                            </li>
                            <li>
                                <p>Gists </p>
                                <span>{result?.public_gists}</span>
                            </li>
                            <li>
                                <p>Repos </p>
                                <span>{result?.public_repos}</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <h1>{result}</h1>
        </host>
    );
}

githubCard.props = {
    result: Object,
    user: String,
    setSend: Boolean,
};
githubCard.styles = css`
    .myimage {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .back {
        display: flex;
        margin: auto;
        margin-top: 0.3px;
        width: 100%;
        height: 400px;
        object-fit: cover;
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
    .back {
        display: flex;
        margin: auto;
        margin-top: 0.3px;
        width: 100%;
        height: 400px;
        object-fit: cover;
    }
`;
export const GithubCard = c(githubCard);

customElements.define("github-card", GithubCard);
