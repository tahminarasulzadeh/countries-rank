import Filter from "./filter";
import CountryList from "./countriesChart";
import Country from "./country";
import ChartData from "./chartData";
import MainChart from "./mainChart";


function MainPage() {

    interface DataPoint {
        x: string;  // The X axis value (e.g., year)
        y: number;  // The Y axis value (e.g., ranking or score)
      }
    interface SeriesData {
        id: string;  // The series name (e.g., 'Serie 1')
        data: DataPoint[];  // An array of DataPoint objects
        [key: string]: any;  // Add index signature to allow any additional properties (required by Nivo)
      }
      
    const data: SeriesData[] = [
        {
          id: "Serie 1",
          data: [
            { x: "2000", y: 1 },
            { x: "2001", y: 11 },
            { x: "2002", y: 4 },
            { x: "2003", y: 3 },
            { x: "2004", y: 6 },
          ],
        },
        {
          id: "Serie 2",
          data: [
            { x: "2000", y: 2 },
            { x: "2001", y: 12 },
            { x: "2002", y: 6 },
            { x: "2003", y: 1 },
            { x: "2004", y: 1 },
          ],
        },
        // Add more series as needed
      ]; 
   
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

