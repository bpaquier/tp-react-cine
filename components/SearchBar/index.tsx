import React, {useState} from 'react';
import classNames from 'classNames/bind';
import css from './styles.module.scss';


import searchBarFetch from "../../services/searchBarFetch.js";
const cx = classNames.bind(css);

export interface SearchBar {
  placeholder?: string;
}

const SearchBar = ( props: SearchBar) => {
   const { placeholder} = props;
   const [isEmpty, setIsEmpty] = useState(true);
   const [userInput, setUserInput] = useState("");

   const handleChangeInput = (e) => { 
     if(e.target.value){
       setIsEmpty(false)
     }
     else {
       setIsEmpty(true)
     }
    setUserInput(e.target.value)
    searchBarFetch(e.target.value);
    console.log(searchBarFetch(e.target.value));
    
   }
   
   const clearUserInput = () => {
    setUserInput("");
    setIsEmpty(true)
   }

  return (
    <div className={css.search}>


    <svg className={css.scope} width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fillRule="evenodd" clipRule="evenodd" d="M14.0124 8.40742C14.0124 11.5029 11.5029 14.0124 8.40742 14.0124C5.31189 14.0124 2.80247 11.5029 2.80247 8.40742C2.80247 5.31189 5.31189 2.80247 8.40742 2.80247C11.5029 2.80247 14.0124 5.31189 14.0124 8.40742ZM13.2788 15.2605C11.9045 16.2392 10.2232 16.8148 8.40742 16.8148C3.76413 16.8148 0 13.0507 0 8.40742C0 3.76413 3.76413 0 8.40742 0C13.0507 0 16.8148 3.76413 16.8148 8.40742C16.8148 10.2232 16.2392 11.9045 15.2605 13.2789L15.5836 13.602L21.5896 19.608C22.1368 20.1552 22.1368 21.0424 21.5896 21.5896C21.0424 22.1368 20.1552 22.1368 19.6079 21.5896L13.6019 15.5836L13.2788 15.2605Z" fill="#5CB7C3"/>
  </svg>

    {!isEmpty && 
     <svg className={css.cross} width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={clearUserInput}>
     <path d="M6.65472 0.464293C6.39828 0.207848 5.98258 0.207848 5.72614 0.464293L0.464235 5.7262C0.207789 5.98264 0.207789 6.39834 0.464234 6.65478C0.72068 6.91123 1.13638 6.91123 1.39282 6.65478L6.65472 1.39288C6.91117 1.13643 6.91117 0.720738 6.65472 0.464293Z" fill="#969696"/>
     <path d="M6.65466 5.7262L1.39276 0.464293C1.13631 0.207848 0.720619 0.207848 0.464174 0.464293C0.207729 0.720738 0.207728 1.13643 0.464174 1.39288L5.72608 6.65478C5.98252 6.91123 6.39822 6.91123 6.65466 6.65478C6.91111 6.39834 6.91111 5.98264 6.65466 5.7262Z" fill="#969696"/>
     </svg>
    }
   

    <input type="text" placeholder={placeholder} onChange={handleChangeInput} value={userInput}/>
    </div>
  );
};

export default SearchBar;
