import { useSearchParams } from "react-router-dom";
import { yt_html } from "../assests/assets";

const YtPreview = () => {
  const [searchParams] = useSearchParams();

  const thumbnail_url = searchParams.get("thumbnail_url");
  const title = searchParams.get("title");

  const new_html = yt_html
    .replace("%%THUMBNAIL_URL%%", thumbnail_url!)
    .replace("%%TITLE%%", title!);

  return (
    <div className="fixed inset-0 z-[100] bg-black">
      <iframe
        srcDoc={new_html}
        width="100%"
        height="100%"
        allowFullScreen
        title="YouTube Thumbnail Preview"
      />
    </div>
  );
};

export default YtPreview;