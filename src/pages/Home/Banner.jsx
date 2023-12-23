import bannerImg from "../../assets/banner.jpg";
const Banner = () => {
  return (
    <div className="flex justify-between bg-[#DADADA] h-screen">
      <div className="justify-center flex flex-col text-center w-fit mx-auto">
        <h2 className="text-5xl font-bold">Enjoy This <br/> Winter Trend</h2>
        <p className="my-5 text-xl">Discover now latest collection</p>
        <button className="text-xl btn btn-ghost btn-outline">Shop Now</button>
      </div>
      <img className="object-cover w-1/2" src={bannerImg} alt="" />
    </div>
  );
};

export default Banner;
