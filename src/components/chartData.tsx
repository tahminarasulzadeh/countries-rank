 import CustomLineChart from "./chart";

function ChartData () {
    return (
        <div className="w-[550px] border border-[#0D1F3D] rounded-md border-[2px]">
        <div className='h-[40px] w-full px-2 py-2 rounded-lg bg-[#0D1F3D]'>
            <h1 className='font-noto  text-[#40516C] font-medium text-[14px] '>Gross Domestic Product billions of U.S dollars over years</h1>
        </div>
        <div className="flex w-[550px]  h-[248px] overflow-y-scroll  px-2 mt-2 flex-col">
          <CustomLineChart />


        </div>
    </div>
    )
}

export default ChartData;