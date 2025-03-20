import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import { assets, JobCategories, JobLocations } from '../assets/assets'
import JobCard from './JobCard'

const JobListing = () => {
    const {IsSearched,searchFilter,setSearchFilter,jobs}=useContext(AppContext)


  return (
    <div className='container 2xl:px-20 mx-auto flex flex-col lg:flex-row max-lg:space-y-8 p-5 '>
        {/* <!-- Job Listing --> */}
        <div className='w-full lg:w-1/4 bg-white px-4 '>
            {/* Search filter from hero component*/}
            {
                IsSearched && (searchFilter.title !== "" || searchFilter.location !== "") && (
                    <>
                    <h3 className='font-medium text-lg mb-4'>Current Search</h3>
                    <div className='mb-4 text-gray-600'>
                       {searchFilter.title && (
                        <span className='inline-flex item-center gap-2.5 bg-blue-50 border border-blue-200 px-4 py-1.5 rounded'>
                            {searchFilter.title}
                            <img onClick={e=>setSearchFilter(prev =>({...prev,title:""}))} className='cursor-pointer' src={assets.cross_icon} alt="" />
                        </span>
                       )} 
                       {searchFilter.location && (
                        <span className='m-2 inline-flex item-center gap-2.5 bg-red-50 border border-red-200 px-4 py-1.5 rounded'>
                            {searchFilter.location}
                            <img onClick={e=>setSearchFilter(prev =>({...prev,location:""}))} className='cursor-pointer' src={assets.cross_icon} alt="" />
                        </span>
                       )} 
                    </div>
                    </>
                )
            }
            {/* cetegery section */}
            <div className='max-lg:hidden'>
                <h4 className='font-medium text-lg py-4'>Search by catergory </h4>
                <ul className='space-y-4 text-gray-600'>
                    {
                        JobCategories.map((catergory,index)=>(
                            <li className='flex gap-3 items-center' key={index}>
                                <input className='scale-124' type='checkbox' name='' id='' />
                                {catergory }
                            </li>

                        ))
                    }
                </ul>
            </div>

            {/* location section */}
            <div className='max-lg:hidden'>
                <h4  className=' pt-14 font-medium text-lg py-4'>Search by Location </h4>
                <ul className='space-y-4 text-gray-600'>
                    {
                        JobLocations.map((location,index)=>(
                            <li className='flex gap-3 items-center' key={index}>
                                <input className='scale-124' type='checkbox' name='' id='' />
                                {location }
                            </li>

                        ))
                    }
                </ul>
            </div>
        </div>
        {/* <!-- Job Listing --> */}
        <section className='w-full lg:w-3/4 text-gray-800 max-lg:px-4'> 
            <h3 className='font-medium text-3xl py-2' id='job-list'>Latest Jobs</h3>
            <p className='mb-8'>GEt your desirre Job from companies</p>
            <div className='grid grid-cols-1 sm:grid-cols-2 xl:
            grid-cols-3 gap-4'>
                {jobs.map((job,index)=>(
                    <JobCard key={index} job={job}/>
               ) )}
            </div>
        </section>
    </div>
  )
}

export default JobListing