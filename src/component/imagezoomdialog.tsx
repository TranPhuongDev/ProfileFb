import * as React from "react";
import { Dialog, DialogContent, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

interface ImageZoomDialogProps {
  open: boolean;
  imageUrl: string;
  onClose: () => void;
}

function ImageZoomDialog({ open, imageUrl, onClose }: ImageZoomDialogProps) {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullScreen // Cho phép dialog chiếm toàn bộ màn hình
      sx={{
        "& .MuiDialog-paper": {
          backgroundColor: "rgba(0, 0, 0, 0.9)", // Nền tối trong suốt
          boxShadow: "none", // Bỏ bóng đổ
          overflow: "hidden", // Đảm bảo không có scrollbar không mong muốn
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        },
      }}
    >
      <DialogContent
        sx={{
          p: 0, // Loại bỏ padding mặc định của DialogContent
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%", // DialogContent chiếm toàn bộ chiều rộng của Dialog
          height: "100%", // DialogContent chiếm toàn bộ chiều cao của Dialog
        }}
      >
        {/* Nút đóng ở góc trên bên phải */}
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: { xs: 8, sm: 20 },
            top: { xs: 8, sm: 20 },
            color: "white",
            zIndex: 1000,
            bgcolor: "rgba(255, 255, 255, 0.2)",
            "&:hover": {
              bgcolor: "rgba(255, 255, 255, 0.3)",
            },
          }}
        >
          <CloseIcon fontSize="large" />
        </IconButton>

        {imageUrl && (
          <img
            src={imageUrl}
            alt="Ảnh phóng to"
            style={{
              maxWidth: "100%",
              maxHeight: "100%",
              width: "auto",
              height: "auto",
              objectFit: "contain", // Vẫn nên dùng 'contain' để xem toàn bộ ảnh
              display: "block",
            }}
          />
        )}
      </DialogContent>
    </Dialog>
  );
}

export default ImageZoomDialog;
