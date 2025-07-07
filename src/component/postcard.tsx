import * as React from "react";
import {
  Box,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Avatar,
  Typography,
  IconButton,
  InputBase,
  Divider,
  Button,
} from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import PublicIcon from "@mui/icons-material/Public";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import FavoriteIcon from "@mui/icons-material/Favorite";
import SentimentVerySatisfiedIcon from "@mui/icons-material/SentimentVerySatisfied";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import GifBoxIcon from "@mui/icons-material/GifBox";
import AddReactionIcon from "@mui/icons-material/AddReaction";
import avatar from "../assets/avatar.png";
import ImageZoomDialog from "./imagezoomdialog";

function PostCard() {
  const postImageUrl =
    "https://res.cloudinary.com/tranvanphuongclound/image/upload/v1747067827/IMG_5429_m1lz2y.jpg"; // Ảnh bài viết

  const [open, setOpen] = React.useState(false);
  // State để lưu URL của hình ảnh sẽ hiển thị trong dialog phóng to
  const [selectedZoomImageUrl, setSelectedZoomImageUrl] = React.useState("");

  const handleClickOpenZoom = (imgSrc: any) => {
    setSelectedZoomImageUrl(imgSrc);
    setOpen(true);
  };

  const handleCloseZoom = () => {
    setOpen(false);
    setSelectedZoomImageUrl("");
  };

  const comments = [
    {
      id: 1,
      user: "Trần Văn Phương",
      avatar: postImageUrl, // Dùng tạm avatar người dùng hiện tại
      content: "❤️",
      time: "3 giờ",
    },
    // Thêm các bình luận khác ở đây
    {
      id: 2,
      user: "Một người bạn khác",
      avatar: postImageUrl, // Avatar khác
      content: "Ảnh đẹp lắm!",
      time: "2 giờ",
    },
  ];

  return (
    <Card
      sx={{
        pt: 2,
        pb: 2,
        textAlign: "center",
        borderRadius: "20px !important",
      }}
    >
      <CardHeader
        avatar={
          <Avatar
            sx={{ bgcolor: "grey.500" }}
            aria-label="avatar"
            src={avatar}
            onClick={() => handleClickOpenZoom(avatar)}
          />
        }
        action={
          <IconButton
            sx={{
              "&:focus": {
                outline: "none",
                boxShadow: "none",
              },
            }}
            aria-label="settings"
          >
            <MoreHorizIcon />
          </IconButton>
        }
        title={
          <Typography
            variant="subtitle1"
            fontWeight="bold"
            sx={{ textAlign: "left" }}
          >
            Trần Văn Phương
          </Typography>
        }
        subheader={
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              color: "text.secondary",
            }}
          >
            <Typography variant="body2" mr={0.5}>
              Vừa xong
            </Typography>
            <PublicIcon sx={{ fontSize: 14 }} /> {/* Icon công khai */}
          </Box>
        }
        sx={{ pb: 1 }} // Giảm padding bottom
      />
      {/* Card Content (Nội dung bài viết - nếu có chữ) */}
      <CardContent sx={{ py: 0 }}>
        <Typography
          variant="body1"
          color="text.primary"
          sx={{ textAlign: "left", marginBottom: 1 }}
        >
          Đây là nội dung bài viết.
        </Typography>
      </CardContent>
      {/* Card Media (Hình ảnh bài viết) */}
      <CardMedia
        component="img"
        image={postImageUrl}
        alt="Post Image"
        onClick={() => handleClickOpenZoom(postImageUrl)}
        sx={{
          maxHeight: 500, // Giới hạn chiều cao tối đa cho ảnh
          objectFit: "contain", // Đảm bảo toàn bộ ảnh hiển thị
          width: "100%",
        }}
      />
      {/* NEW: Phần Likes và Comments count */}
      <CardContent
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          py: 1,
          px: 2,
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          {/* Reaction Icons */}
          <Box sx={{ display: "flex", mr: 0.5 }}>
            {/* Icon Like (blue) */}
            <ThumbUpAltIcon
              sx={{
                fontSize: 16,
                color: "#1877F2",
                bgcolor: "white",
                borderRadius: "50%",
                border: "1px solid white",
              }}
            />
            {/* Icon Love (red) */}
            <FavoriteIcon
              sx={{
                fontSize: 16,
                color: "red",
                bgcolor: "white",
                borderRadius: "50%",
                border: "1px solid white",
                ml: -0.5,
              }}
            />{" "}
            {/* ml: -0.5 để icon hơi chồng lên nhau */}
            {/* Icon Haha (orange) */}
            <SentimentVerySatisfiedIcon
              sx={{
                fontSize: 16,
                color: "orange",
                bgcolor: "white",
                borderRadius: "50%",
                border: "1px solid white",
                ml: -0.5,
              }}
            />
          </Box>
          <Typography variant="body2" color="text.secondary">
            Bạn và 99 người khác
          </Typography>
        </Box>
        <Typography variant="body2" color="text.secondary">
          10 bình luận
        </Typography>
      </CardContent>
      <Divider sx={{ mx: 2 }} /> {/* Đường kẻ ngang */}
      {/* Card Actions (Nút Thích, Bình luận, Chia sẻ) */}
      <CardActions sx={{ px: 2, py: 1, justifyContent: "space-around" }}>
        <Button
          size="small"
          startIcon={<ThumbUpOutlinedIcon />}
          sx={{
            color: "text.secondary",
            textTransform: "none",
            flexGrow: 1, // Để nút chiếm đều không gian
            "&:hover": {
              bgcolor: "grey.100",
            },
            "&:focus": {
              outline: "none",
              boxShadow: "none",
            },
          }}
        >
          Thích
        </Button>
        <Button
          size="small"
          startIcon={<ChatBubbleOutlineOutlinedIcon />}
          sx={{
            color: "text.secondary",
            textTransform: "none",
            flexGrow: 1,
            "&:hover": {
              bgcolor: "grey.100",
            },
            "&:focus": {
              outline: "none",
              boxShadow: "none",
            },
          }}
        >
          Bình luận
        </Button>
        {/* Có thể thêm nút Share nếu muốn */}
        <Button
          size="small"
          startIcon={<ShareOutlinedIcon />}
          sx={{
            color: "text.secondary",
            textTransform: "none",
            flexGrow: 1,
            "&:hover": {
              bgcolor: "grey.100",
            },
            "&:focus": {
              outline: "none",
              boxShadow: "none",
            },
          }}
        >
          Chia sẻ
        </Button>
      </CardActions>
      <Divider sx={{ mx: 2 }} /> {/* Đường kẻ ngang */}
      {/* Hiển thị danh sách bình luận */}
      <Box sx={{ px: 2, pt: 1 }}>
        {comments.map((comment) => (
          <CommentItem
            key={comment.id}
            avatarUrl={comment.avatar}
            userName={comment.user}
            content={comment.content}
            time={comment.time}
          />
        ))}
      </Box>
      {/* Comment Section (Phần bình luận) */}
      <CardContent sx={{ pt: 1, pb: "0px !important" }}>
        {" "}
        {/* Giảm padding */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Avatar
            sx={{ width: 32, height: 32, mr: 1 }}
            src="/broken-image.jpg"
          />{" "}
          {/* Avatar nhỏ hơn */}
          <InputBase
            placeholder="Bình luận dưới tên Trần Văn Phương"
            fullWidth
            sx={{
              bgcolor: "#F0F2F5", // Nền xám nhạt cho ô nhập liệu
              borderRadius: "20px", // Bo tròn
              px: 1.5,
              py: 0.8,
              fontSize: "0.9rem",
              flexGrow: 1,
            }}
            endAdornment={
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <IconButton
                  sx={{
                    "&:focus": {
                      outline: "none",
                      boxShadow: "none",
                    },
                  }}
                  size="small"
                >
                  <SentimentSatisfiedAltIcon sx={{ fontSize: 20 }} />
                </IconButton>
                <IconButton
                  sx={{
                    "&:focus": {
                      outline: "none",
                      boxShadow: "none",
                    },
                  }}
                  size="small"
                >
                  <PhotoCameraIcon sx={{ fontSize: 20 }} />
                </IconButton>
                <IconButton
                  sx={{
                    "&:focus": {
                      outline: "none",
                      boxShadow: "none",
                    },
                  }}
                  size="small"
                >
                  <GifBoxIcon sx={{ fontSize: 20 }} />
                </IconButton>
                <IconButton
                  sx={{
                    "&:focus": {
                      outline: "none",
                      boxShadow: "none",
                    },
                  }}
                  size="small"
                >
                  <AddReactionIcon sx={{ fontSize: 20 }} />
                </IconButton>
              </Box>
            }
          />
        </Box>
      </CardContent>
      <ImageZoomDialog
        open={open}
        imageUrl={selectedZoomImageUrl}
        onClose={handleCloseZoom}
      />
    </Card>
  );
}

export default PostCard;

type CommentItemProps = {
  avatarUrl: string;
  userName: string;
  content: string;
  time: string;
};

const CommentItem = ({
  avatarUrl,
  userName,
  content,
  time,
}: CommentItemProps) => (
  <Box sx={{ display: "flex", mb: 1.5 }}>
    <Avatar src={avatarUrl} sx={{ width: 32, height: 32, mr: 1 }} />
    <Box>
      <Box
        sx={{
          bgcolor: "#F0F2F5", // Nền xám nhạt cho bình luận
          borderRadius: "12px",
          p: 1,
          px: 1.5,
          maxWidth: "fit-content", // Chiều rộng vừa với nội dung
        }}
      >
        <Typography variant="body2" fontWeight="bold">
          {userName}
        </Typography>
        <Typography sx={{ textAlign: "left" }} variant="body2">
          {content}
        </Typography>
      </Box>
      {/* Phần thời gian và tương tác bình luận (Thích, Trả lời) */}
      <Box sx={{ display: "flex", ml: 1, mt: 0.5, alignItems: "center" }}>
        <Typography variant="caption" color="text.secondary" mr={1}>
          {time}
        </Typography>
        <Typography
          variant="caption"
          color="text.secondary"
          fontWeight="bold"
          sx={{ cursor: "pointer", "&:hover": { textDecoration: "underline" } }}
          mr={1}
        >
          Thích
        </Typography>
        <Typography
          variant="caption"
          color="text.secondary"
          fontWeight="bold"
          sx={{ cursor: "pointer", "&:hover": { textDecoration: "underline" } }}
        >
          Trả lời
        </Typography>
      </Box>
    </Box>
  </Box>
);
