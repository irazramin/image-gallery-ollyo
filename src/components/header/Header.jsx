import React from 'react'
import DefaultCard from '../shared/cards/DefaultCard'
import Logo from './_partials/Logo'
import SearchBar from './_partials/SearchBar'
import ProfileMenu from './_partials/ProfileMenu'
import CollectionList from './_partials/CollectionList'

const Header = () => {

    return (
        <DefaultCard>
            <div className='container mx-auto'>
                <div className='grid grid-cols-12 w-full gap-3 lg:gap-5'>
                    <div className='md:col-span-2 col-span-6 md:order-1'>
                        <Logo />
                    </div>
                    <div className='w-full md:col-span-8 col-span-12 flex items-center md:order-2 order-3 md:mt-0'>
                        <SearchBar />
                    </div>
                    <div className='md:col-span-2 col-span-6 relative md:order-3 order-2 z-50 flex items-center justify-end'>
                        <ProfileMenu />
                    </div>
                </div>
                <div className='grid grid-cols-12'>
                    <div className='col-span-12 relative md:order-3 order-2 z-50 mt-3 md:block hidden z-0'>
                        <CollectionList />
                    </div>
                </div>
            </div>
        </DefaultCard>
    )
}

export default Header