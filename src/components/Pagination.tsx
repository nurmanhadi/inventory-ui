import { Component } from "solid-js";

const Pagination: Component<{ page: number, totalPages: number, onPageChange: (page: number) => void }> = (props) => {

    return (
        <div class="join">
            {props.page === 1 ? (
                <button class="join-item btn" disabled>«</button>
            ) : (
                <button class="join-item btn" onClick={() => props.onPageChange(props.page - 1)}>«</button>
            )}
            <button class="join-item btn">{props.page}</button>
            {props.page === props.totalPages ? (
                <button class="join-item btn" disabled>»</button>
            ) : (
                <button class="join-item btn" onClick={() => props.onPageChange(props.page + 1)}>»</button>
            )}
        </div>
    );
};

export default Pagination;