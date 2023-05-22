import React, { useEffect } from 'react';
import { useState } from 'react'
import { Tab } from '@headlessui/react'
import ToyCard from './ToyCard';
import Loading from '../../../../Utils/Loading';

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const ToyCategory = () => {
    const [toys, setToys] = useState([]);
    const [loadedCat, loadTabData] = useState('rubiks');
    const [loading,setLoading]=useState(true);
    useEffect(() => {
        setLoading(true);
        fetch(`http://localhost:5000/allToysByCategory/${loadedCat}`)
        .then(res => res.json()
        .then(data => {
        setToys(data)
        setLoading(false);
    }))
        
    }, [loadedCat])



    return (
        <div className='bg-[#ECF4FA] mb-14 py-12'>
            <div className='flex flex-col items-center '>
                <h2 className='font-mont md:text-3xl text-2xl font-bold'>Best Toy Game Collections</h2>
                <p className='pt-3 pb-4'>Exclusive collection of gaming toys you must buy</p>
                <hr className='border border-[#26A8DF] w-24' />
            </div>
            <div className='boxed-container py-8'>
                <Tab.Group>
                    <Tab.List className="flex space-x-2 rounded-xl bg-white p-2">

                        <Tab onClick={() => loadTabData('rubiks')} className={({ selected }) =>
                            classNames(
                                'w-full rounded-lg py-2 text-sm font-medium leading-5 text-[#26A8DF]',
                                'ring-opacity-60  focus:outline-none',
                                selected
                                    ? 'bg-[#ECF4FA]'
                                    : 'text-black hover:bg-white/[0.12] hover:text-[#209cfa]'
                            )
                        }
                        >
                            Rubiks
                        </Tab>
                        <Tab onClick={() => loadTabData('puzzle')} className={({ selected }) =>
                            classNames(
                                'w-full rounded-lg py-2 text-sm font-medium leading-5 text-[#26A8DF]',
                                'ring-opacity-60  focus:outline-none',
                                selected
                                    ? 'bg-[#ECF4FA]'
                                    : 'text-black hover:bg-white/[0.12] hover:text-[#209cfa]'
                            )
                        }
                        >
                            Puzzles
                        </Tab>
                        <Tab onClick={() => loadTabData('board')} className={({ selected }) =>
                            classNames(
                                'w-full rounded-lg py-2 text-sm font-medium leading-5 text-[#26A8DF]',
                                'ring-opacity-60  focus:outline-none',
                                selected
                                    ? 'bg-[#ECF4FA]'
                                    : 'text-black hover:bg-white/[0.12] hover:text-[#209cfa]'
                            )
                        }
                        >
                            Board
                        </Tab>

                    </Tab.List>
                    <Tab.Panels className="mt-2">
                        <Tab.Panel
                            className={classNames(
                                'rounded-xl  py-4',
                                'focus:outline-none '
                            )}
                        >
                            {loading? <>
                            <Loading></Loading>
                            </>:<div className='sm:grid sm:grid-cols-2 lg:grid-cols-3 lg:gap-8 gap-5'>
                                {toys?.map(toy => <ToyCard key={toy._id} toy={toy}></ToyCard>)}
                            </div>}
                            

                        </Tab.Panel>
                        <Tab.Panel
                            className={classNames(
                                'rounded-xl  py-4',
                                'focus:outline-none '
                            )}
                        >
                           {loading? <>
                            <Loading></Loading>
                            </>:<div className='sm:grid sm:grid-cols-2 lg:grid-cols-3 lg:gap-8 gap-5'>
                                {toys?.map(toy => <ToyCard key={toy._id} toy={toy}></ToyCard>)}
                            </div>}
                        </Tab.Panel>
                        <Tab.Panel
                            className={classNames(
                                'rounded-xl  py-4',
                                'focus:outline-none '
                            )}
                        >
                            {loading? <>
                            <Loading></Loading>
                            </>:<div className='sm:grid sm:grid-cols-2 lg:grid-cols-3 lg:gap-8 gap-5'>
                                {toys?.map(toy => <ToyCard key={toy._id} toy={toy}></ToyCard>)}
                            </div>}
                        </Tab.Panel>
                    </Tab.Panels>
                </Tab.Group>
            </div>




        </div>
    );
};

export default ToyCategory;