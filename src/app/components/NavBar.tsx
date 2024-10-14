'use client'

const NavBar = () => {

    const handleClick = ()=> {
        window.open('/')
    }
    return (
        <div className="w-full flex text-lg px-2 pt-2 justify-between items-center">
            <span className="text-4xl pStrike" onClick={handleClick}>Zipper</span>
            <div>
                <span className="pStrike">other features</span>
            </div>
        </div>
      );
}
 
export default NavBar;