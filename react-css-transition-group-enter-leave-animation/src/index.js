import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';

import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      items: ['Item 1...', 'Item 2...', 'Item 3...', 'Item 4...']
    }
    this.handleAdd = this.handleAdd.bind(this);
  };

  handleAdd() {
    var newItems = this.state.items.concat([prompt('Create New Item')]);
    this.setState({ items: newItems });
  }

  handleRemove(i) {
    var newItems = this.state.items.slice();
    newItems.splice(i, 1);
    this.setState({ items: newItems });
  }

  render() {
    var items = this.state.items.map((item, i) => {
      return (
        <div key={item} onClick={this.handleRemove.bind(this, i)}>
          {item}
        </div>
      );
    });

    return (
      <div>
        <button onClick={this.handleAdd}>Add Item</button>

        <ReactCSSTransitionGroup transitionName="example"
          transitionEnterTimeout={500} transitionLeaveTimeout={500}>
          {items}
        </ReactCSSTransitionGroup>
      </div>
    );
  }

}

render(<App />, document.getElementById('root'));
