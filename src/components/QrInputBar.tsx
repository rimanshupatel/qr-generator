import { ChangeEvent, Dispatch, FormEvent, SetStateAction } from "react";
import { MagnifyingGlass } from "phosphor-react";
interface QrInputBarProps {
  setUrl: Dispatch<SetStateAction<string>>;
  url: string;
  handleSubmit: () => void;
}
export const QrInputBar = ({ url, setUrl, handleSubmit }: QrInputBarProps) => {
  return (
    <form
      onSubmit={(e: FormEvent) => e.preventDefault()}
      className="pt-2 w-full"
    >
      <div>
        <div className=" py-5 ">
          <h2 className="text-3xl font-bold">
            Qr <span className="text-green-500">generator</span>
          </h2>
        </div>
        <div className="flex justify-between  h-[70px] w-full gap-3 MainShadow p-1">
          <div className="flex items-center ml-4">
            <span className="text-xl">
              <MagnifyingGlass />
            </span>
            <input
              type="text"
              value={url}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setUrl(e.target.value)
              }
              placeholder="Enter your url here..."
              className="p-3 w-96 text-lg bg-transparent outline-none transition delay-150"
            />
          </div>
          <button
            type="button"
            onClick={handleSubmit}
            className=" py-1 px-5 m-1 tracking-[.05em] rounded-lg bg-indigo-950 text-white font-semibold"
          >
            generate
          </button>
        </div>
      </div>
    </form>
  );
};
