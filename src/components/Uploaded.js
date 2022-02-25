import React from "react";
import { Button, TextField } from "@mui/material";
import "./ImageUpload.css";
import "./Uploaded.css";
import { CopyToClipboard } from "react-copy-to-clipboard";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

const Uploaded = ({ downLoadURL, setIsUploaded }) => {
  return (
    <div className="outerBox">
      <div className="title">
        <CheckCircleOutlineIcon />
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
      <div className="copyLinkArea">
        <TextField value={downLoadURL} className="copyLinkInput" />
        <CopyToClipboard
          text={downLoadURL}
          onCopy={() => this.setState({ copied: true })}
        >
          <Button variant="contained">コピー</Button>
        </CopyToClipboard>
      </div>

      <Button
        variant="contained"
        onClick={() => setIsUploaded(false)}
        style={{ marginTop: 20 }}
      >
        新規アップロード
      </Button>
    </div>
  );
};

export default Uploaded;
