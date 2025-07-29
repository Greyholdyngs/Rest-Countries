import { Link } from "react-router-dom";
import Data from './data.json';
import { useParams } from "react-router-dom";
import Header from './Header.jsx';
import back from '../src/assets/back.png';

function CountryDetails() {
    const { countryCode } = useParams();
    const country = Data.find(c => c.alpha3Code === countryCode);

    if (!country) {
        return <div>Country not found</div>;
    }

    return (
        <div className="">
            <Header />
            <div className="md:flex sm:col  items-center justify-between px-20 py-15">
                <div className="py-10 px-5">
                    <div className="relative md:left-0 left-32">
                        <button className="flex items-center w-40 text-left 
                                            gap-2 shadow-lg rounded-md pl-15 pr-4 py-2">
                            <img className="w-5" src={back} alt="Back" />
                            <Link to="/">Back</Link>
                        </button>
                    </div>
                    <div className="my-10 rounded-xl shadow-md
                              inline-block transition-transform
                              duration-500 ease-in-out hover:scale-110
                              hover:shadow-lg hover:shadow-lg">
                        <img className="w-110" src={country.flags.png} alt="" />
                    </div>
                </div>
                <div>
                    <h1 className="text-3xl font-bold my-5 transition-transform
                              duration-500 ease-in-out hover:-translate-y-4
                              "><strong>{country.name}</strong></h1>
                    <div className="flex gap-15">
                        <div>
                            <p className="transition-transform duration-500 ease-in-out hover:translate-x-2 text-base">
                                <strong className="font-semibold">Native Name:</strong>{" "}
                                {country.nativeName}
                            </p>
                            <p className="transition-transform duration-500 ease-in-out hover:translate-x-2 text-base">
                                <strong className="font-semibold">Population:</strong>{" "}
                                {country.population}
                            </p>
                            <p className="transition-transform duration-500 ease-in-out hover:translate-x-2 text-base">
                                <strong className="font-semibold">Region:</strong>{" "}
                                {country.region}
                            </p>
                            <p className="transition-transform duration-500 ease-in-out hover:translate-x-2 text-base">
                                <strong className="font-semibold">Sub Region:</strong>{" "}
                                {country.subregion}
                            </p>
                            <p className="transition-transform duration-500 ease-in-out hover:translate-x-2 text-base">
                                <strong className="font-semibold">Capital:</strong>{" "}
                                {country.capital}
                            </p>
                        </div>
                        <div>
                            <p className="transition-transform duration-500 ease-in-out hover:-translate-x-2 text-base">
                                <strong className="font-semibold">Top Level Domain:</strong>{" "}
                                {Array.isArray(country.tld) ? country.tld.join("","") : ".af"}
                            </p>
                            <p className="transition-transform duration-500 ease-in-out hover:-translate-x-2 text-base">
                                <strong className="font-semibold">Currencies:</strong>{" "}
                                {Array.isArray(country.currencies) ? country.currencies.map(c => c.name).join(', ') : "currency"}
                            </p>
                            <p className="transition-transform duration-500 ease-in-out hover:-translate-x-2 text-base">
                                <strong className="font-semibold">Languages:</strong>{" "}
                                {Array.isArray(country.languages) ? Object.values(country.languages).join(', ') : "N/A"}
                                </p>
                        </div>
                    </div>
                    <div className="transition-transform duration-500 ease-in-out hover:scale-90 my-3">
                        <strong  className="font-semibold">Border Countries:</strong>
                        <div>
                            {
                                country.borders ? country.borders.map(border => (
                                <Link key={border} to={`/CountryInfo/${border}`}>{border}</Link>
                                )) : 'No border countries'
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CountryDetails