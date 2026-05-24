import { Component, createSignal } from "solid-js";

const SearchForm: Component<{ onSearch: (search: string) => void }> = (props) => {
    const [search, setSearch] = createSignal<string>("")
    const handleSubmit = async (e: SubmitEvent) => {
        e.preventDefault()
        props.onSearch(search())
    }
    return (
        <form onSubmit={handleSubmit} class="text-black">
            <label class="input">
                <svg class="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <g
                        stroke-linejoin="round"
                        stroke-linecap="round"
                        stroke-width="2.5"
                        fill="none"
                        stroke="currentColor"
                    >
                        <circle cx="11" cy="11" r="8"></circle>
                        <path d="m21 21-4.3-4.3"></path>
                    </g>
                </svg>
                <input
                    value={search()}
                    onInput={(e) => setSearch(e.currentTarget.value)}
                    type="search"
                    required
                    placeholder="Search" />
            </label>
        </form>
    );
};

export default SearchForm;