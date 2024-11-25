import RankFilter from "./rankFilter";
import React, { useEffect, useState } from 'react'


function Country() {
    const years = [
        { id: 1, info: "1980" },
        { id: 2, info: "1981" },
        { id: 3, info: "1982" },
        { id: 4, info: "1983" },
        { id: 5, info: "1984" },
        { id: 6, info: "1985" },
        { id: 7, info: "1986" },
        { id: 8, info: "1987" },
        { id: 9, info: "1988" },
        { id: 10, info: "1989" },
        { id: 11, info: "1990" },
        { id: 12, info: "1991" },
        { id: 13, info: "1992" },
        { id: 14, info: "1993" },
        { id: 15, info: "1994" },
        { id: 16, info: "1995" },
        { id: 17, info: "1996" },
        { id: 18, info: "1997" },
        { id: 19, info: "1998" },
        { id: 20, info: "1999" },
        { id: 21, info: "2000" },
        { id: 22, info: "2001" },
        { id: 23, info: "2002" },
        { id: 24, info: "2003" },
        { id: 25, info: "2004" },
        { id: 26, info: "2005" },
        { id: 27, info: "2006" },
        { id: 28, info: "2007" },
        { id: 29, info: "2008" },
        { id: 30, info: "2009" },
        { id: 31, info: "2010" },
        { id: 32, info: "2011" },
        { id: 33, info: "2012" },
        { id: 34, info: "2013" },
        { id: 35, info: "2014" },
        { id: 36, info: "2015" },
        { id: 37, info: "2016" },
        { id: 38, info: "2017" },
        { id: 39, info: "2018" },
        { id: 40, info: "2019" },
        { id: 41, info: "2020" },
        { id: 42, info: "2021" },
        { id: 44, info: "2023" },
        { id: 45, info: "2024" },
        { id: 46, info: "2025" },
    ]


    interface Country {
        name: {
            common: string;
        };
        flags: {
            png: string;
        };
    }

    const [countries, setCountries] = useState<Country[]>([]);

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then((response) => response.json())
            .then((data) => {
                setCountries(data);

            })
            .catch((error) => {
                console.error("Error fetching country data:", error);

            });
    }, []);


    const ranNumber = Math.floor(Math.random() * 101) - 50;


    type DataItem = {
        id: number;
        num: number;
    };
    const dataArray:DataItem[] = Array.from({ length: 28950 }, (_, i) => ({
        id: i + 1,   // id will range from 1 to 250
        num: ranNumber,  // Same random number for each item (can also generate different random numbers per item)
      }));


    return <div>
        <div className="max-w-[500px] border border-[#0D1F3D] rounded-md border-[2px]">
            <div className='h-[40px] w-full px-2 py-2 rounded-lg bg-[#0D1F3D]'>
                <h1 className='font-noto  text-[#40516C] font-medium text-[14px] '>Difference in rank between years</h1>
            </div>
            <div className="flex  h-[248px] overflow-y-scroll  px-5 mt-2 flex-col">
                <div className="flex justify-center py-0">
                    <RankFilter items={years} />
                    <RankFilter items={years} />
                </div>

                <div className="flex justify-center mr-[20px] gap-[10px]">
                    <div>
                        {countries.map((country, index) => (

                            <div
                                key={index}
                                className="flex justify-end mr-[20px] mt-2 gap-[10px] "
                            >



                                <div className='flex  w-[250px] ml-[6rem] gap-[10px]'>
                                    <span className='font-noto text-start text-[14px] text-white'>{country.name.common}</span>
                                    <img src={country.flags.png} alt="country-flag" className='w-[20px] mt-1.5 h-[10px]' />
                                </div>

                                <div  className="flex w-[200px] gap-[10px] ">
                                    <div className="flex gap-[10px]">
                                        {ranNumber> 0 ? <svg xmlns="http://www.w3.org/2000/svg" className=" stroke-current text-[#32de84] " viewBox="0 0 24 24" width="24" height="24">
                                            <path d="M7 17L17 7M17 7H7m10 0v10" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>

                                            : ranNumber === 0 ? <span>=</span> :
                                                <svg xmlns="http://www.w3.org/2000/svg" className=" stroke-current text-[#ef233c] " viewBox="0 0 24 24" width="24" height="24">
                                                    <path d="M17 7L7 17M7 17H17M7 17V7" className="stroke-current text-red " stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>}
                                    </div>


                                    <span className="text-white">{ranNumber}</span>
                                    {ranNumber > 0 ? <span className="font-noto font-medium text-[14px] text-[#32de84]">Positions up</span> : ranNumber === 0 ? <span  className="font-noto font-medium text-[14px] text-[#6c757d]">No changes here</span> :  <span className="font-noto font-medium text-[14px] text-[#ef233c]">Positions down</span>} 
                                </div>

                            </div>
                        ))}
                    </div>

                    <div >
                        
                   
                    </div>


                </div>


            </div>
        </div>
    </div>
}

export default Country;