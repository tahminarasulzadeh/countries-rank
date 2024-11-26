import Filter from "./filter";
import CountryList from "./countriesChart";
import Country from "./country";
import ChartData from "./chartData";
import MainChart from "./mainChart";


function MainPage() {

    
      
   
   
    return (
        <div className="container mx-auto p-3  rounded-lg shadow-md" >
            <div className="mt-3 px-1 max-[1400px]">
                <Filter />
                <div className="flex    justify-center gap-[10px]">
                    <CountryList />
                    <Country />
                    <ChartData />
                </div>
                <MainChart  />
                 
            </div>
        </div>

    )
}

export default MainPage;

