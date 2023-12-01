//Element Rendering:
function App() {
    return <h1>Hello React!</h1>
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);


//Dynamic Content:
function Home() {
    const Name = "Mohsen";
    return (
        <p>Hello {Name}</p>
    )
}

ReactDOM.createRoot(document.getElementById("root")).render(<Home />);



//Conditional Rendering:
function Room() {
    if (true) {
        return <Header />
    } else {
        return <Footer />
    }
}

 function Header() {
    return (
        <h1>Welcome to React!</h1>
    )
 }

 function Footer() {
    return (
        <h1>Bye Bye!</h1>
    )
 }

ReactDOM.createRoot(document.getElementById("root")).render(<Room />);

//Handling Events:
function Handl() {
    const Click = () => alert("Open the site now");
    return (
        <button onClick={Click}>Button</button>
    )
}

ReactDOM.createRoot(document.getElementById("root")).render(<Handl />);


//Fragment Usage:
function List() {
    return (
        <React.Fragment>
            <h1>My Info.</h1>
            <p>My name is: Mohsen Abdelelah</p>
            <p>Live in: Cairo</p>
            <p>Work as: Pharmaciest</p>
        </React.Fragment>
    )
}

ReactDOM.createRoot(document.getElementById("root")).render(<List />);
