import React from 'react'
import { Input, Button } from '@chakra-ui/react'
import '../Library.css'
import { AiOutlineSearch } from 'react-icons/ai'



const SearchBar = (props) => (
    <div className = "libSearchBar">
        <form onSubmit = {props.searchBook} action = "">
            <Input onChange={props.handleSearch} 
                m = {1}
                htmlSize={60} 
                width = "auto" 
                type="text" 
                variant= "filled" 
                placeholder = "Search for Novellas"
                marginTop={2}
                />         
            <Button colorScheme='blue' 
            onClick = {props.searchBook}
            leftIcon={<AiOutlineSearch/>}
            align = "center"
            marginTop = {-1.5} 
            >Submit</Button>
        </form>

    </div>
);

export default SearchBar;