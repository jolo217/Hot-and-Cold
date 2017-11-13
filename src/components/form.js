import React from 'react';

import './form.css';

export default class GuessForm extends React.Component {
    onGuess(event) {
        event.preventDefault();

        if (this.props.onGuess) {
            const value = this.input.value;
            this.props.onGuess(value);
        }
        this.input.value = '';
    }

    render() {
        return (
        	<div className="container">
	            <form onSubmit={e => this.onGuess(e)}>
	                <label htmlFor="userGuess"></label>
	                <input type="text" name="userGuess" id="userGuess"
	                    className="text" maxLength="3" autoComplete="off"
	                    placeholder="Enter Your Guess" required
	                    ref={input => this.input = input} />
	                <input type="submit" id="guessButton" className="button" name="submit" value="Guess"/>
	            </form>
            </div>
        );
    }
};