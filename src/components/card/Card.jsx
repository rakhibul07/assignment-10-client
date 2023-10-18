

const Card = ({card}) => {
    const {id,name,image,available} = card;
    return (
        <div>
           
           <div className=" p-6 rounded-md shadow-md dark:bg-gray-900 dark:text-gray-50">
	<img src={image} alt="" className="object-cover object-center w-full rounded-md h-72 bg-gray-400 dark:bg-gray-500" />
	<div className="mt-6 mb-2">
		
		<h2 className="text-xl font-semibold">{name}</h2>
	</div>
	
</div>
        </div>
    );
};

export default Card;