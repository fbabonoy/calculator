import "./App.css"

function ButtonList(params){
    return <div className="buttonList">
        {params.children}
    </div>
}

export default ButtonList
