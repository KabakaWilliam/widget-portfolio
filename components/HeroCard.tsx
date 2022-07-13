const HeroCard = () => {
  return (
    <div className="bg-[#f5f5f8e2] w-[349px] h-[438px] absolute  left-0 right-0 bottom-0 top-0 m-auto rounded-xl shadow-lg  border-[#f5f4f7] text-[12px]">
      <div className="w-[100%] h-[30px] border-b flex justify-center items-center">
        Home/content
      </div>
      <div className="p-3 w-[317px] h-[317px] flex flex-col">
        <div className="w-[100%] h-[290px] "></div>
      </div>
      <div className="w-[100%] h-[80px] text-[10px] text-[#9d9d9d] font-regular flex items-center justify-center  border-black ">
        ©2000-2022 William Gitta. All rights reserved. <br />
        Last updated 20 days ago.🔖🌾✍🏾☮️
      </div>
    </div>
  );
};

export default HeroCard;
