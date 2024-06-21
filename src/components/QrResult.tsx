interface QrResultProps {
  url: string;
}
export const QrResult = ({ url }: QrResultProps) => {
  console.log(url);
  return (
    <>
      {url ? (
        <div className=" py-10 w-full">
          <div className="text-white font-semibold capitalize pl-3 border-l-8  border-black absolute top-[320px] left-[-300px]">
            <h1 className="font-medium text-3xl ">scan this</h1>
            <p className="text-7xl">qr code </p>
          </div>
          <div className="absolute right-[32px] top-[321px]  bg-white border border-gray-200 rounded-lg shadow-xl">
            <img
              src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${url}`}
              className="h-52 w-52"
              alt=""
            />
          </div>
        </div>
      ) : (
        <h5>not found</h5>
      )}
    </>
  );
};
