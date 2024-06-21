interface QrResultProps {
  url: string;
}
export const QrResult = ({ url }: QrResultProps) => {
  console.log(url);
  return (
    <>
      {url ? (
        <div className="flex justify-center items-center py-10 w-full">
          <div className="font-semibold capitalize">
            <h1 className="font-medium text-3xl">scan this</h1>
            <p className="text-5xl">qr code </p>
          </div>
          <div className="flex justify-center items-center  bg-white border border-gray-200 rounded-lg shadow-xl">
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
