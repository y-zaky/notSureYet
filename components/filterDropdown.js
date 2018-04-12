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
    this.props.filterLanguage(selectedOption);
  }

  extractLanguages = (repoData) => {
      const allRepoLanguages = repoData.map(repo => repo.language);
      const reducedRepoLanguages = allRepoLanguages.reduce(
        (allLanguages, currentLanguage ) => {
          if (allLanguages.indexOf(currentLanguage) < 0 && currentLanguage !== null) allLanguages.push(currentLanguage) 
          return allLanguages
        } 
        , []
      )
      //Place languages in correctly formatted object for options property binding in Select Component and add Select All.
      const languageDropdownObj = reducedRepoLanguages.reduce(
        (allLanguages, currentLanguage)  => {
          allLanguages.push({
            value: currentLanguage,
            label: currentLanguage
          })
          return allLanguages
        }, []
      )
    languageDropdownObj.unshift({
      value: "Select All",
      label: "Select All"
    })
    return languageDropdownObj
  }
  
  render() {

    console.log('filterDropdown Props', this.props )

    const { selectedOption } = this.state;
    const value = selectedOption && selectedOption.value;

    return (
      <Select
        name="form-field-name"
        value={value}
        placeholder={'Programming Language'}
        onChange={this.handleChange}
        options={this.extractLanguages(this.props.data)}
      />
    );
  }
  
}
