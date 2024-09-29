import { useState, useEffect } from 'react';
import { BsSearch } from 'react-icons/bs';
import { FcHome, FcAutomotive, FcSettings } from "react-icons/fc";
import AsyncSelect from 'react-select/async';
import axios from 'axios';
import {components} from 'react-select'
const optionsArray = [
    
    {value: 'Automobile', label: 'Automobile', icon:<FcAutomotive />},
    {value:'RealEstate', label: 'RealEstate', icon: <FcHome /> },
    {value: 'Automobile Parts', label: 'Automobile Parts', icon: <FcSettings />
    }
]
const Search = () => {
    
    const filterItems = (inputValue: string) => {
        return optionsArray.filter((i) =>
          i.label.toLowerCase().includes(inputValue.toLowerCase())
        );
      };
      
      const loadOptions = (
        inputValue: string,
        callback: (options: optionsArray[]) => void
      ) => {
        setTimeout(() => {
          callback(filterItems(inputValue));
        }, 1000);
      };
    const [options, setOptions] = useState([]);
    const [selectedOption, setSelectedOption] = useState(null);
    const [isLoading, setIsLoading] = useState(false)
    
      useEffect(() => {
        // Fetch data from API
        const fetchData = async () => {
            setIsLoading(true); 
          try {
            const response = await axios.get('https://api.example.com/options');
            // Assuming response.data is an array of objects with { value, label }
            setOptions(response.data);
          } catch (error) {
            console.error('Error fetching options:', error);
          } 
          finally {
            setIsLoading(false)
          }
        };
    
        fetchData();
      }, []);
      
      
      const handleChange = (selected) => {
        setSelectedOption(selected);
        // Perform additional actions if needed
      };
      
      const customPlaceholder =(props) =>{
        return(
        <components.Placeholder {...props}>
        <div style={{ display: 'flex', alignItems: 'center', fontSize:20, fontWeight: 500 }}>
        <BsSearch style={{ marginRight: 8 }}/>
      {props.children}
        </div>
            </components.Placeholder>
        );
      };
      const CustomOption = (props) => {
        return (
          <components.Option {...props}>
                    <div style={{ display: 'flex', alignItems: 'center', alignContent:'center', fontWeight: 100, zIndex: 3000 }}>
          <div style={{fontSize:25}}>{props.data.icon}</div>   <div className='p-2' style={{fontSize: 20}}>{props.data.label}</div>
            </div>
          </components.Option>
        );
      };
      
      const CustomSingleValue = (props) => {
        return (
            
          <components.SingleValue {...props}>
            {props.data.icon} {props.data.label}
          </components.SingleValue>
        );
      };
    return(
        <>
          <AsyncSelect className="w-100 rounded-lg" 
          
              isLoading = {isLoading}
              placeholder = 'General Search'
              isSearchable
              value={selectedOption}
              onChange={handleChange}
              cacheOptions 
              loadOptions={loadOptions} 
              defaultOptions 
              components={{ Option: CustomOption, SingleValue: CustomSingleValue, Placeholder: customPlaceholder}}
              />
        </>
    )
}
export default Search;