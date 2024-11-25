import Filter from "./filter";
import CountryList from "./countriesChart";
import Country from "./country";

function MainPage() {
    return (
        <div className="mt-3">
            <Filter />
                 <div className="flex justify-center gap-[10px]">
                <CountryList />
                <Country />
               </div>
        </div>
    )
}

export default MainPage;

