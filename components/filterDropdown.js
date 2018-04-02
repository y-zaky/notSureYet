import React, {Component} from 'react'

import Select from 'react-select'
import 'react-select/dist/react-select.css'

export default class FilterDropdown extends Component {

  constructor(props) {
    super(props)
    this.state = {
      selectedOption: '',
    }
  }
  
  handleChange = (selectedOption) => {
    this.setState({ selectedOption });
    console.log(`Selected: ${selectedOption.label}`);
  }

  extractLanguages = (repoData) => {
    const allRepoLanguages = repoData.map(repo => repo.language);
    const reducedRepoLanguages = allRepoLanguages.reduce(
    (allLanguages, currentLanguage ) => {
      if (allLanguages.indexOf(currentLanguage) < 0 && currentLanguage !== null) allLanguages.push(currentLanguage) 
      return allLanguages
    } 
  , [] )
  return reducedRepoLanguages
  console.log("reducedRepoLanguages", reducedRepoLanguages)
  }
  
  render() {
    console.log('filterdropdowndata',this.props.data)

    console.log('extract function', this.extractLanguages(this.props.data) )

    const { selectedOption } = this.state;
    const value = selectedOption && selectedOption.value;

    return (
      <Select
        name="form-field-name"
        value={value}
        placeholder={'Programming Language'}
        onChange={this.handleChange}
        options={[
          { value: 'one', label: 'One' },
          { value: 'two', label: 'Two' },
        ]}
      />
    );
  }
  
}
