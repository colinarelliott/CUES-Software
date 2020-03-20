const Sidebar = (props) => (
    <div>
        <h1>{props.name}</h1>
        {props.children}

        <style jsx>{`
            div {
                height: 100%;
                background-color: #ccc;
                border-left: 1px solid #aaa;
                padding: 5px;
            }

            ul {
                list-style: none;
                margin: 0px;
                padding: 0px;
            }

            li {
                margin: 0px;
                padding: 0px;
                margin-bottom: 3px;
            }
        `}</style>

    </div>

    
);

export default Sidebar;