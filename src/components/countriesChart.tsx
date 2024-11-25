import React, { useEffect, useState } from 'react';



interface Country {
    name: {
        common: string;
    };
    flags: {
        png: string;
    };
}

const CountryList: React.FC = () => {
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




    return (
        <div className="max-w-[650px] border border-[#0D1F3D] rounded-md border-[2px]">
            <div className='h-[40px] w-full px-2 py-2 rounded-lg bg-[#0D1F3D]'>
                <h1 className='font-noto  text-[#40516C] font-medium text-[16px] '>Gross Domestic Product billions of U.S dollars in 2019 year</h1>
            </div>
            <div className="flex  h-[248px] overflow-y-scroll  px-5 mt-2 flex-col">
                <div className='flex justufy-between gap-[10rem]'>
                    <span className='font-noto font-bold text-[14px] text-white'>Rank</span>
                    <span className='font-noto  font-bold text-[14px] text-white'>Country</span>
                </div>
                {countries.map((country, index) => (
                    <div
                        key={index}
                        className="flex justify-between mt-2 gap-[10px] "
                    >
                        <span className='font-noto text-[14px] text-white'>{index + 1}</span>


                        <div className='flex w-[300px] ml-[6rem] gap-[10px]'>
                            <span className='font-noto text-start text-[14px] text-white'>{country.name.common}</span>
                            <img src={country.flags.png} alt="country-flag" className='w-[20px] mt-1.5 h-[10px]' />
                          </div>
                          
                        <div className="flex justify-center gap-5">
                            <div className="w-full bg-gray-200 mt-[5px] rounded-full h-1.5 dark:bg-gray-300">
                                <div className="bg-[#22385F] h-1.5 rounded-full w-[67%] dark:bg-blue-500" ></div>
                            </div>

                        </div>
                        <div className='flex'>
                            <div className="  w-[0150px] h-[15px] max-w-xs bg-gray-800 rounded-full overflow-hidden">
                                <div className="h-4 bg-[#345178] rounded-full" style={{ width: `${ Math.floor(Math.random() * 100) + 1}%` }}></div>
                            </div>
                        </div>


                    </div>
                ))}
            </div>
        </div>
    );
};

export default CountryList;
