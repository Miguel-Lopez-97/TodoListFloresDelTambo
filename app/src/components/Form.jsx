import React from "react";

export default function  Form() {
    return (
        <form className="ui form" onSubmit={handleFormSubmit}>
            <div className="ui grid center aligned">
                <div className="row">
                    <div className="column five wide">
                        <input
                            value={inputValue}
                            onChange={handleInputChange}
                            type="text"
                            placeholder="Enter something to do..."
                        />
                    </div>
                    <div className="column one wide">
                        <button type="submit" className="ui button circular icon green"><i
                            className="white plus icon"></i></button>
                    </div>
                </div>
            </div>
        </form>
    );
};
