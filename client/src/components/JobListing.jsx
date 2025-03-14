import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import { assets } from '../assets/assets'

const JobListing = () => {
    const {IsSearched,searchFilter,setSearchFilter}=useContext(AppContext)


  return (
    <div>
        {/* <!-- Job Listing --> */}
        <div>
            {/* Search filter from hero component*/}
            {
                IsSearched && (searchFilter.title !== "" || searchFilter.location !== "") && (
                    <>
                    <h3>Current Search</h3>
                    <div>
                       {searchFilter.title && (
                        <span>
                            {searchFilter.title}
                            <img onClick={e=>setSearchFilter(prev =>({...prev,title:""}))} className='cursor-pointer' src={assets.cross_icon} alt="" />
                        </span>
                       )} 
                       {searchFilter.location && (
                        <span>
                            {searchFilter.location}
                            <img onClick={e=>setSearchFilter(prev =>({...prev,location:""}))} className='cursor-pointer' src={assets.cross_icon} alt="" />
                        </span>
                       )} 
                    </div>
                    </>
                )
            }
        </div>
    </div>
  )
}

export default JobListing