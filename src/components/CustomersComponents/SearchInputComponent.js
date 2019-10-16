import React from 'react'
import { Button, Select, Input } from 'semantic-ui-react'

const options = [
  { key: 'name', text: 'Name', value: 'name' },
  { key: 'contactNum', text: 'Contact Number', value: 'articles' }
]

const SearchInputComponent = () => (
	  <Input type='text' placeholder='Search using...' action>
	    <input />
	    <Select compact options={options} defaultValue='articles' />
	    <Button type='submit'>Search</Button>
	  </Input>
)

export default SearchInputComponent