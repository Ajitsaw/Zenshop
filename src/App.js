// Style scss
import "./App.scss";

// Components
import Cart from "./features/cart/Cart";
import Header from "./components/header/Header";

// BrowserRouter Component
import Router from "./routes/Router";

function App() {
    return (
        <>
            <Header />
            <main>
                <Router />
            </main>
            <Cart />
        </>
    );
}

export default App;
