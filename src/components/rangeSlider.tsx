import  { useState } from 'react';
import { Range, getTrackBackground } from 'react-range';

const RangeSlider = () => {
  const [values, setValues] = useState([20, 250]); // Initial range values


  return (
    <div className='mt-3'>
      <h1 className="font-noto font-medium text-[14px]  text-[#A6B4CA]">Rank</h1>


      <div className='flex mt-1  gap-[10px]'>
        <div className='border py-1 mt-2 px-1 rounded-md border-[1px] border-[#A6B4CA] w-[70px] h-[40px]' >
          <span className='text-white ml-[5px] text-[16px] font-noto  '> {values[0]}</span>
        </div>



        <div className="flex flex-col items-center w-full max-w-md mx-auto mt-6">

          <Range
            step={1}
            min={0}
            max={250}
            values={values}
            onChange={(newValues) => setValues(newValues)}
            renderTrack={({ props, children }) => (


              <div
                {...props}
                className="h-3 w-[250px]  rounded-lg"
                style={{
                  ...props.style,
                  background: getTrackBackground({
                    values,
                    colors: ['#293E64', '#293E64', '#293E64'], // Track colors: light gray, blue, light gray
                    min: 1,
                    max: 250,
                  }),
                }}
              >
                {children}
              </div>
            )}
            renderThumb={({ props, index }) => (
              <div
                {...props}
                key={index}
                className="w-3 h-7 bg-[#D9D9D9] rounded-full flex items-center justify-center cursor-pointer focus:outline-none"
                style={{ ...props.style }}
              >

              </div>

            )}

          />





        </div>
        <div className='border py-1 mt-2 px-1 rounded-md border-[1px] border-[#A6B4CA] w-[70px] h-[40px]' >
          <span className='text-white ml-[5px] text-[16px] font-noto  '> {values[1]}</span>
        </div>


      </div>
    </div>
  );
};

export default RangeSlider;

