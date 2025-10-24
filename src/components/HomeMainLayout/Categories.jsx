import React from 'react';
import { use } from 'react';
import { NavLink } from 'react-router';

const categoryPromise = fetch("/categories.json").then(res => res.json());


const Categories = () => {

    const categories = use(categoryPromise);
    console.log(categories);

    return (
        <div>
            <h2 className='font-semibold text-[20px]'>All Category</h2>
            <div className='grid grid-cols-1 mt-5 gap-3'>
                {
                    categories.map(category => {
                        return <NavLink
                            key={category.id}
                            to={`/category/${category.id}`}
                            className="btn bg-base-100 border-0 text-left justify-start pl-12 text-[#9F9F9F] shadow-none outline-none hover:bg-base-200">
                            {category.name}
                        </NavLink>

                    })
                }
            </div>
        </div>
    );
};

export default Categories;