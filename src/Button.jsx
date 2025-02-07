import './App.css'


export default function CalcButton({icon, size, onClick}) {
    let buttonSize = size === "l" ? "40%" : "20%"
    return (<button className="c-button" 
        onClick={onClick}
        style={ {
        width: `${buttonSize || "50%"} `,

    }
    }>
    {icon}
    </button>
    )
}