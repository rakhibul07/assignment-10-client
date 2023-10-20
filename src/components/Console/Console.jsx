

const Console = () => {
    return (
        <div className="pt-10">
            <div className=" md:flex justify-between items-center dark:bg-gray-800 bg-base-100 p-8">
                <div className="flex-1 ">
                    <div className="flex text-center md:text-justify justify-start items-center gap-4">
                        <div className="bg-purple-500 h-48 w-2"></div>
                        <div className="space-y-3">
                        <h1 className="text-4xl font-bold dark:text-gray-300">PS4 V2 <br/> Dualshock 4</h1>
                    <h2 className="text-2xl text-gray-400 ">Wireless Controller for Playstation 4</h2>
                    <h3 className="text-2xl text-bold dark:text-gray-300">$230</h3>
                    <button className="bg-purple-500 text-white px-4 py-2 rounded-md">Buy Now</button>
                        </div>
                    </div>
                </div>
                <div className="flex-1 p-8">
                 
                   <img src="https://i.ibb.co/nLW5ZZM/game.png" />
    
                   
                </div>
                
            </div>

        </div>
    );
};

export default Console;