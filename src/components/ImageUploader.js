import { Button } from "@mui/material";
import React from "react";
import ImageLogo from "../images/image.svg";
import "./ImageUpload.css";

const ImageUploader = () => {
  return (
    <div className="outerBox">
      <div className="title">
        <h2>画像アップローダー</h2>
        <p>JpegかPngの画像ファイル</p>
      </div>
      <div className="imageUplodeBox">
        <div className="imageLogoAndText">
          <img src={ImageLogo} />
          <p>ここにドラッグ＆ドロップしてね</p>
        </div>
      </div>
      <p>または</p>
      <Button variant="contained">
        ファイルを選択
        <input type="file" className="imageUploadInput" />
      </Button>
    </div>
  );
};

export default ImageUploader;
