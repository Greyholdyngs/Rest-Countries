  
function Header({ darkMode, setDarkMode }) {

    const handleDarkMode = () => {
        setDarkMode(!darkMode);
    }
    
  return (
    <header className="flex justify-between items-center md:px-20 sm:px-10 px-5 py-4 rounded-lg shadow-lg ">
        <h2 className="text-2xl text-[#111517ff] font-semibold  ">Where in the world?</h2>
        <button className="cursor-pointer font-semibold text-sm text-[#2b3945ff] " onClick={handleDarkMode}>Dark Mode</button>
    </header>
  )
}
export default Header;
    