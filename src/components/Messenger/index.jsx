import React from "react";

class Messenger extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isReading: false,
    };
  }

  click = () => {
    this.setState({
      isReading: !this.state.isReading,
    });
  };

  render() {
    const { user: {name, message}, } = this.props;
    const {isReading} = this.state;
    
    return (
      <article>
        <h1>My messenger</h1>
        <p>User name: {name}</p>
        <p>Message: {message}</p>
        <p>{isReading && 'Message has been read'} </p>
        <button disabled={isReading} onClick={this.click}>
          {isReading ? 'Message has been read' : 'Read'}</button>
      </article>
    );
  }
}

export default Messenger;