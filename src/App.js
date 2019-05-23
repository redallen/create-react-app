import React from 'react';
import '@patternfly/react-core/dist/styles/base.css';
import Select from './Select';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.options = [];
    this.fillOptions = () => {
      this.options = [1, 2, 3, 4];
      this.forceUpdate();
    }
  }

  render() {
    return (
      <>
        <button onClick={this.fillOptions}>fill options</button>
        <p>{JSON.stringify(this.options)}</p>
        <Select options={this.options} />
      </>
    )
  }
}

export default App;
