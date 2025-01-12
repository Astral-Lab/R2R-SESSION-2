import { IoMdAdd } from "react-icons/io";

export default function Header({ showDeck, setShowDeck }) {
    return (
        <header>
            <h1>React Flash</h1>
            <button onClick={() => setShowDeck(!showDeck)}>
                <IoMdAdd size={"32px"} color={"#FFFFFF"}/>
            </button>
        </header>
    )
}