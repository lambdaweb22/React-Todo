import React from 'react';

class TodoForm extends React.Component {
    // Constructor with state

    handleChanges = e => {
        // update state with each keystroke
    };

    // class property to submit form

    render() {
        console.log('rendering form');
        return (
            <form>
                {/* This is an uncontrolled component 😬 We want it to be controlled by state */}
                <input type="text" name="task" />
                <button>Add Todo</button>
            </form>
        );
    }
}

export default TodoForm;