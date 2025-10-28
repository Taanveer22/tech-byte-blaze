import { ScaleLoader } from "react-spinners";
const Spinner = () => {
  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-124px)]">
      <ScaleLoader color="#a91e7b" height={100} width={16} />
    </div>
  );
};

export default Spinner;
