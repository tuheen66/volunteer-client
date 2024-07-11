/* eslint-disable react/prop-types */



const WeServeCard = ({ service }) => {
  const { category, description } = service;
  return (
    
      <div className=" flex flex-col border-2 border-gray-300 rounded-lg p-4 text-justified shadow-xl shadow-gray-400 flex-grow">
        <h2 className="font-bold text-xl mb-2 flex-grow">{category} :</h2>
        <p  className="text-justify flex-grow">{description}</p>
      </div>
   
  );
};

export default WeServeCard;
