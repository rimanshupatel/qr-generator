import { useState, useEffect } from "react";
import { QrInputBar } from "../components/QrInputBar";
import { QrResult } from "../components/QrResult";

export default function Home() {
  const [url, setUrl] = useState<string>("https://github.com/rimanshupatel");
  const [urlVal, setUrlVal] = useState<string>("");
  const handleSubmit = () => {
    setUrlVal(url);
  };
  useEffect(() => {
    handleSubmit();
  }, []);

  return (
    <>
      <QrInputBar url={url} setUrl={setUrl} handleSubmit={handleSubmit} />
      <QrResult url={urlVal} />
    </>
  );
}
