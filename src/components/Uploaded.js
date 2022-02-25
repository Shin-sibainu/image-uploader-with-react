import React from "react";
import { Button } from "@mui/material";
import "./ImageUpload.css";
import "./Uploaded.css";

const Uploaded = ({ downLoadURL, setIsUploaded }) => {
  return (
    <div className="outerBox">
      <div className="title">
        <p>Logo</p>
        <p>アップロード成功！</p>
      </div>
      <div className="imageUplodedBox">
        <div className="imageLogoAndText">
          <img
            src={downLoadURL}
            alt="uploadedImage"
            className="uploadedImage"
          />
        </div>
      </div>

      {/* コピーリンクの追加 */}

      <Button variant="contained" onClick={() => setIsUploaded(false)}>
        新規アップロード
      </Button>
    </div>
  );
};

export default Uploaded;
