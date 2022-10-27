import { Props, c } from "atomico";

function iconHome({ color, width, height, data }: Props<typeof iconHome>) {
    return (
        <host>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width={width}
                height={height}
                viewBox="0 0 24 24"
            >
                <path d={data} fill={color} />
            </svg>
        </host>
    );
}

iconHome.props = {
    color: {
        type: String,
    },
    width: {
        type: String,
        value: "1.5rem",
    },
    height: {
        type: String,
        value: "1.5rem",
    },
    data: {
        type: String,
    },
};

export const IconHome = c(iconHome);

customElements.define("icon-home", IconHome);
