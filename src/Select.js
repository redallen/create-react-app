import React from 'react';
import { Select, SelectOption, SelectVariant } from '@patternfly/react-core';

class SingleSelectInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isExpanded: false,
      selected: null
    };

    this.onToggle = isExpanded => {
      this.setState({
        isExpanded
      });
    };

    this.onSelect = (event, selection, isPlaceholder) => {
      if (isPlaceholder) this.clearSelection();
      else {
        this.setState({
          selected: selection,
          isExpanded: false
        });
        console.log('selected:', selection);
      }
    };

    this.clearSelection = () => {
      this.setState({
        selected: null,
        isExpanded: false
      });
    };
  }

  render() {
    const { isExpanded, selected } = this.state;
    const titleId = 'title-id';
    const options = this.props.options.map((option, index) => (
      <SelectOption
        key={index}
        value={option.toString()}
      />
    ))
    console.log('render', this.props, options);
    return (
      <>
        <p>{JSON.stringify(this.props.options)}</p>
        {options}
        <Select
          variant={SelectVariant.typeahead}
          aria-label={this.props.text}
          onToggle={this.onToggle}
          onSelect={this.onSelect}
          onClear={this.clearSelection}
          selections={selected}
          isExpanded={isExpanded}
          ariaLabelledBy={titleId}
          placeholderText="select something"
        >
          {options}
        </Select>
      </>
      
    );
  }
}

export default SingleSelectInput;
