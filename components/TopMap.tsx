const TopMap = () => {
  return (
    <div className="absolute top-0 left-0 w-[350px] h-[300px] flex justify-center items-center z-50">
      <div className="w-[324px] h-[250px] bg-[#f5f5f8d1] rounded-lg text-[#34332f] shadow-xl">
        <div className="w-[324px] h-[40px] border-b  text-[#949493] flex items-center justify-center">
          <div className="w-[20%] h-[100%] text-sm flex items-center justify-start pl-2">
            up
          </div>
          <div className="w-[60%] h-[100%]">
            <span className="text-[20px]">content/</span>
            <span className="text-[25px] text-[#393834]">Home</span>
          </div>
          <div className="w-[20%] h-[100%] flex justify-between px-2 items-center">
            <span className="cursor-pointer text-sm">{"<"}</span>
            <span className="cursor-pointer text-sm">{">"}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopMap;
