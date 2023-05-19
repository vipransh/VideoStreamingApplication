import React,{useState, useEffect} from 'react'
import { useDispatch,useSelector} from 'react-redux'
import {cacheResults, setSuggestions} from '../utils/searchSlice'
import { Youtube_Search_Api} from '../config/apiConfig'
import fetchJsonp from 'fetch-jsonp';

function SearchSection() {
    const dispatch=useDispatch()
    const searchCache=useSelector(state=>state.search.cache)
  const [searchQuery, setSearchQuery]=useState("")
//   const [suggestions,setSuggestions]=useState([])
//   const [suggestionsFlag, setSuggestionsFlag]=useState(false)


  useEffect(()=>{

    const searchSuggestionHandler=async()=>{
      fetchJsonp(Youtube_Search_Api+searchQuery)
      .then(function (response) {
        return response.json();
      })
      .then((json) => {
        const fetchedData = json[1];
        let suggestions = [];
        fetchedData.forEach((element) => {
          suggestions.push(element[0]);
        });
        setSuggestions(suggestions);
        // cache new search suggestion
        dispatch(cacheResults({
          [searchQuery] : suggestions
        }))
      })
      .catch((ex) => {
        console.log('parsing failed', ex);
      });
    }


    const timer=setTimeout(()=>{
      if(searchCache[searchQuery]){
        // setSuggestions(searchCache[searchQuery])
        dispatch(setSuggestions(searchCache[searchQuery]))

      }
      else{
        searchSuggestionHandler();
      }
    },400);

    return()=>{
      clearTimeout(timer)
    };
  },[searchQuery,searchCache,dispatch]);






  return (
    <input onChange={(e)=>setSearchQuery(e.target.value)} value={searchQuery} className='w-3/5 border border-gray-300 p-2 pl-4 rounded-l-full' type='text' placeholder='Search'
        />
  )
}

export default SearchSection