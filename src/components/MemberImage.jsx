const MemberImage = ({ source, alt, url }) => {
  return (
    <a href={url}>
      <div className="relative">
        <img
          src={source}
          alt={alt}
          className="border-emerald-500 border-2 rounded-full h-64 w-64 aspect-square lg:h-48 lg:w-48"
        />
        <span className="absolute top-0 left-0 text-white opacity-0  hover:opacity-100 h-full w-full flex justify-center items-end duration-200">
          <span className="text-xl py-2 px-4 bg-black bg-opacity-75 rounded-2xl w-full text-center">
            {alt}
          </span>
        </span>
      </div>
    </a>
  );
};

export default MemberImage;
