import * as React from "react";
import {
  Avatar,
  Box,
  Button,
  Card,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  IconButton,
  InputBase,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Stack,
  Typography,
} from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";
import HomeIcon from "@mui/icons-material/Home";
import PlaceIcon from "@mui/icons-material/Place";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CloseIcon from "@mui/icons-material/Close";
import avatar from "../assets/avatar.png";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import ImageIcon from "@mui/icons-material/Image";
import AssistantPhotoIcon from "@mui/icons-material/AssistantPhoto";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import LockIcon from "@mui/icons-material/Lock";
import PublicIcon from "@mui/icons-material/Public";
import GroupIcon from "@mui/icons-material/Group";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import PermMediaIcon from "@mui/icons-material/PermMedia";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import GifBoxIcon from "@mui/icons-material/GifBox";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import PostCard from "./postcard";
import ImageZoomDialog from "./imagezoomdialog";
import StandardImageList from "./standardimagelist";

export default function IntroduceYourself() {
  // State để quản lý việc mở/đóng dialog
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

  //
  const [openPostDialog, setOpenPostDialog] = React.useState(false);

  const handleOpenPostDialog = () => {
    setOpenPostDialog(true);
  };

  const handleClosePostDialog = () => {
    setOpenPostDialog(false);
  };

  return (
    <Container>
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, sm: 4, md: 4 }}>
          <Stack spacing={2}>
            <Card sx={{ padding: 2, textAlign: "center" }}>
              <Stack spacing={2}>
                <Typography
                  variant="h5"
                  sx={{ fontSize: "20px", fontWeight: 700, textAlign: "left" }}
                >
                  Giới Thiệu
                </Typography>
                <Button
                  sx={{
                    bgcolor: "#e2e5e9",
                    color: "black",
                    borderRadius: "5px",
                    fontSize: "15px",
                    fontWeight: 500,
                    border: "none",
                    "&:focus": {
                      outline: "none",
                      boxShadow: "none",
                    },
                  }}
                  variant="outlined"
                >
                  Thêm tiểu sử
                </Button>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <SchoolIcon sx={{ marginRight: "10px", color: "#8C939D" }} />
                  <Typography sx={{ fontSize: "15px", textAlign: "left" }}>
                    Học Information of Technology (IT) tại Trường Đại Học Mở TP.
                    HCM | Ho Chi Minh City Open University
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <HomeIcon sx={{ marginRight: "10px", color: "#8C939D" }} />
                  <Typography sx={{ fontSize: "15px", textAlign: "left" }}>
                    Sống tại <span style={{ fontWeight: 700 }}>Vũng Tàu</span>
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <PlaceIcon sx={{ marginRight: "10px", color: "#8C939D" }} />
                  <Typography sx={{ fontSize: "15px", textAlign: "left" }}>
                    Đến từ{" "}
                    <span style={{ fontWeight: 700 }}>
                      Thành phố Hồ Chí Minh
                    </span>
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <FavoriteIcon
                    sx={{ marginRight: "10px", color: "#8C939D" }}
                  />
                  <Typography sx={{ fontSize: "15px", textAlign: "left" }}>
                    Đang hẹn hò với{" "}
                    <span style={{ fontWeight: 700 }}>Dương Bội Oanh</span>
                  </Typography>
                </Box>
                <Button
                  sx={{
                    bgcolor: "#e2e5e9",
                    color: "black",
                    borderRadius: "5px",
                    fontSize: "15px",
                    fontWeight: 500,
                    border: "none",
                    "&:focus": {
                      outline: "none",
                      boxShadow: "none",
                    },
                  }}
                  variant="outlined"
                >
                  Chỉnh sửa chi tiết
                </Button>
                <Stack direction="row" spacing={1}>
                  <Grid container spacing={2}>
                    <Grid size={{ xs: 12, sm: 12, md: 6 }}>
                      <Box>
                        <img
                          src="https://scontent.fsgn2-6.fna.fbcdn.net/v/t39.30808-6/481446201_1357129118809780_878225118746759463_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=tOZn6JeYvGIQ7kNvwFtH4iE&_nc_oc=Adkhx9hCoq6xDSlQcafHf6OmBd-gi04ANpmi0k7uvY23R64sJ4Bfg25D-A_HqGYbbsPxCGbG3LCVNuv2erK5-DFP&_nc_zt=23&_nc_ht=scontent.fsgn2-6.fna&_nc_gid=ABjSojYwKz1A97x_5iKGxQ&oh=00_AfQTR2ze-8WGr-xjvt7xjCvR5CFOfvaXWX9K1z4ipNKMdg&oe=68713C49"
                          onClick={() =>
                            handleClickOpenZoom(
                              "https://scontent.fsgn2-6.fna.fbcdn.net/v/t39.30808-6/481446201_1357129118809780_878225118746759463_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=tOZn6JeYvGIQ7kNvwFtH4iE&_nc_oc=Adkhx9hCoq6xDSlQcafHf6OmBd-gi04ANpmi0k7uvY23R64sJ4Bfg25D-A_HqGYbbsPxCGbG3LCVNuv2erK5-DFP&_nc_zt=23&_nc_ht=scontent.fsgn2-6.fna&_nc_gid=ABjSojYwKz1A97x_5iKGxQ&oh=00_AfQTR2ze-8WGr-xjvt7xjCvR5CFOfvaXWX9K1z4ipNKMdg&oe=68713C49"
                            )
                          }
                          alt="logo"
                          className="logo"
                          style={{
                            width: "100%",
                            height: "90%",
                            objectFit: "cover",
                            borderRadius: "10px",
                          }}
                        />
                        <Typography sx={{ height: "10%" }} variant="h6">
                          Badminton
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid size={{ xs: 12, sm: 12, md: 6 }}>
                      <Box>
                        <img
                          src="https://res.cloudinary.com/tranvanphuongclound/image/upload/v1747067827/IMG_5429_m1lz2y.jpg"
                          onClick={() =>
                            handleClickOpenZoom(
                              "https://res.cloudinary.com/tranvanphuongclound/image/upload/v1747067827/IMG_5429_m1lz2y.jpg"
                            )
                          }
                          alt="logo"
                          className="logo"
                          style={{
                            width: "100%",
                            height: "90%",
                            objectFit: "cover",
                            borderRadius: "10px",
                          }}
                        />
                        <Typography sx={{ height: "10%" }} variant="h6">
                          Me
                        </Typography>
                      </Box>
                    </Grid>
                  </Grid>
                </Stack>
              </Stack>
            </Card>
            <Card>
              <StandardImageList />
            </Card>
          </Stack>
        </Grid>
        <Grid size={{ xs: 12, sm: 8, md: 8 }}>
          <Stack spacing={2}>
            <Card sx={{ padding: 2, textAlign: "center" }}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  // alignItems: "center",
                }}
              >
                <Avatar
                  sx={{
                    width: "10%",
                    height: "10%",
                    "& .MuiAvatar-img": {
                      objectFit: "cover",
                    },
                    marginRight: "10px",
                  }}
                  alt="avt"
                  src={avatar}
                  onClick={() => handleClickOpenZoom(avatar)}
                />
                <Button
                  onClick={handleOpenPostDialog}
                  sx={{
                    bgcolor: "#E4E6E9",
                    color: "#898B8E",
                    width: "90%",
                    borderRadius: "20px",
                    ":hover": {
                      backgroundColor: "#D8DADF",
                      border: "none",
                    },
                    "&:focus": {
                      outline: "none",
                      boxShadow: "none",
                    },
                  }}
                >
                  Bạn đang nghĩ gì?
                </Button>
              </Box>
              {/* <hr></hr> */}
              {/* <Stack
                direction="row"
                spacing={1}
                sx={{ display: "flex", justifyContent: "center" }}
              >
                <Button
                  sx={{
                    border: "none",
                    bgcolor: "white",
                    ":hover": {
                      backgroundColor: "#f0f0f0",
                      borderRadius: "10px",
                    },
                    fontWeight: "bold",
                    color: "#606366",
                    fontSize: "15px",
                  }}
                  variant="outlined"
                  startIcon={<LiveTvIcon sx={{ color: "red" }} />}
                >
                  Video trực tiếp
                </Button>
                <Button
                  sx={{
                    border: "none",
                    bgcolor: "white",
                    ":hover": {
                      backgroundColor: "#f0f0f0",
                      borderRadius: "10px",
                    },
                    fontWeight: "bold",
                    color: "#606366",
                  }}
                  variant="outlined"
                  startIcon={<ImageIcon sx={{ color: "#41B35D" }} />}
                >
                  Ảnh/video
                </Button>
                <Button
                  sx={{
                    border: "none",
                    bgcolor: "white",
                    ":hover": {
                      backgroundColor: "#f0f0f0",
                      borderRadius: "10px",
                    },
                    fontWeight: "bold",
                    color: "#606366",
                    display: { xs: "none", sm: "none", md: "block" },
                  }}
                  variant="outlined"
                  startIcon={<AssistantPhotoIcon sx={{ color: "#009DE8" }} />}
                >
                  Sự kiện trong đời
                </Button>
              </Stack> */}
            </Card>
            <PostCard />
            <PostCard />
          </Stack>
        </Grid>
      </Grid>
      {/* Gọi component ImageZoomDialog ở đây */}
      <ImageZoomDialog
        open={open}
        imageUrl={selectedZoomImageUrl}
        onClose={handleCloseZoom}
      />
      {/* Gọi component CreatePostDialog ở đây */}
      <CreatePostDialog open={openPostDialog} onClose={handleClosePostDialog} />
    </Container>
  );
}

interface CreatePostDialogProps {
  open: boolean;
  onClose: () => void;
}

function CreatePostDialog({ open, onClose }: CreatePostDialogProps) {
  const [privacyAnchorEl, setPrivacyAnchorEl] = React.useState(null);
  const [privacySetting, setPrivacySetting] = React.useState("Chỉ mình tôi");
  const [privacyIcon, setPrivacyIcon] = React.useState(
    <LockIcon sx={{ fontSize: 16 }} />
  );

  // Xử lý mở menu riêng tư
  const handlePrivacyClick = (event: any) => {
    setPrivacyAnchorEl(event.currentTarget);
  };

  // Xử lý chọn tùy chọn riêng tư
  const handlePrivacyMenuItemClick = (setting: any, iconComponent: any) => {
    setPrivacySetting(setting);
    setPrivacyIcon(iconComponent);
    setPrivacyAnchorEl(null);
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle
        sx={{ m: 0, p: 2, textAlign: "center", position: "relative" }}
      >
        <Typography variant="h6" component="div">
          Tạo bài viết
        </Typography>
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
            bgcolor: (theme) => theme.palette.grey[200],
            "&:hover": {
              bgcolor: (theme) => theme.palette.grey[300],
            },
            borderRadius: "50%",
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent dividers sx={{ p: 2 }}>
        {/* Thông tin người dùng */}
        <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
          <Avatar
            src="/broken-image.jpg"
            sx={{ width: 40, height: 40, mr: 1 }}
          />
          <Box>
            <Typography variant="body1" fontWeight="bold">
              Trần Văn Phương
            </Typography>
            <Button
              variant="contained"
              size="small"
              onClick={handlePrivacyClick}
              sx={{
                bgcolor: "#E4E6EB",
                color: "#65676B",
                textTransform: "none",
                borderRadius: "6px",
                py: 0.2,
                px: 1,
                fontSize: "0.8rem",
                "&:hover": {
                  bgcolor: "#D8DADF",
                },
              }}
              startIcon={privacyIcon}
              endIcon={<ArrowDropDownIcon />}
            >
              {privacySetting}
            </Button>
            {/* Menu cho cài đặt riêng tư */}
            <Menu
              anchorEl={privacyAnchorEl}
              open={Boolean(privacyAnchorEl)}
              onClose={() => setPrivacyAnchorEl(null)}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
            >
              <MenuItem
                onClick={() =>
                  handlePrivacyMenuItemClick(
                    "Công khai",
                    <PublicIcon sx={{ fontSize: 16 }} />
                  )
                }
              >
                <ListItemIcon>
                  <PublicIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText>Công khai</ListItemText>
              </MenuItem>
              <MenuItem
                onClick={() =>
                  handlePrivacyMenuItemClick(
                    "Bạn bè",
                    <GroupIcon sx={{ fontSize: 16 }} />
                  )
                }
              >
                <ListItemIcon>
                  <GroupIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText>Bạn bè</ListItemText>
              </MenuItem>
              <MenuItem
                onClick={() =>
                  handlePrivacyMenuItemClick(
                    "Chỉ mình tôi",
                    <LockIcon sx={{ fontSize: 16 }} />
                  )
                }
              >
                <ListItemIcon>
                  <LockIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText>Chỉ mình tôi</ListItemText>
              </MenuItem>
            </Menu>
          </Box>
        </Box>

        {/* Trường nhập liệu "Bạn đang nghĩ gì?" */}
        <InputBase
          placeholder="Bạn đang nghĩ gì?"
          multiline
          rows={4}
          fullWidth
          sx={{
            fontSize: "24px",
            fontWeight: "normal",
            color: "#333",
            py: 1,
            "& .MuiInputBase-input": {
              "&::placeholder": {
                color: "#65676B",
                opacity: 1,
              },
            },
          }}
        />

        {/* Icon Aa và mặt cười */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mt: 1,
          }}
        >
          <IconButton sx={{ bgcolor: "#E4E6EB", borderRadius: "50%" }}>
            <Typography variant="h6" sx={{ p: 0.5 }}>
              Aa
            </Typography>
          </IconButton>
          <IconButton>
            <EmojiEmotionsIcon sx={{ color: "#65676B" }} />
          </IconButton>
        </Box>

        {/* Thêm vào bài viết của bạn */}
        <Box
          sx={{
            border: "1px solid #E4E6EB",
            borderRadius: "8px",
            p: 1,
            mt: 2,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="body2" fontWeight="bold">
            Thêm vào bài viết của bạn
          </Typography>
          <Box>
            <IconButton>
              <PermMediaIcon sx={{ color: "green" }} />
            </IconButton>
            <IconButton>
              <PersonAddIcon sx={{ color: "blue" }} />
            </IconButton>
            <IconButton>
              <EmojiEmotionsIcon sx={{ color: "orange" }} />
            </IconButton>
            <IconButton>
              <LocationOnIcon sx={{ color: "red" }} />
            </IconButton>
            <IconButton>
              <GifBoxIcon sx={{ color: "purple" }} />
            </IconButton>
            <IconButton>
              <MoreHorizIcon sx={{ color: "#65676B" }} />
            </IconButton>
          </Box>
        </Box>
      </DialogContent>
      <DialogActions sx={{ p: 2, borderTop: "1px solid #E4E6EB" }}>
        <Button
          variant="contained"
          fullWidth
          sx={{
            bgcolor: "#1877F2",
            color: "white",
            borderRadius: "8px",
            py: 1,
            fontWeight: "bold",
            textTransform: "none",
            "&:hover": {
              bgcolor: "#166FE5",
            },
            "&.Mui-disabled": {
              bgcolor: "#E4E6EB",
              color: "#B0B3B8",
            },
          }}
          disabled
        >
          Đăng
        </Button>
      </DialogActions>
    </Dialog>
  );
}
