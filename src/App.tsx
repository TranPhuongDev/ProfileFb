import * as React from "react";
import {
  Avatar,
  Box,
  Button,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import "./App.css";
import coverphoto from "./assets/anhbia.jpg";
import avatar from "./assets/avatar.png";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

function App() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <>
      <Container>
        <Grid sx={{ height: { md: "400px" }, position: "relative" }} size={8}>
          <img
            src="https://scontent.fsgn2-6.fna.fbcdn.net/v/t39.30808-6/481446201_1357129118809780_878225118746759463_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=tOZn6JeYvGIQ7kNvwFtH4iE&_nc_oc=Adkhx9hCoq6xDSlQcafHf6OmBd-gi04ANpmi0k7uvY23R64sJ4Bfg25D-A_HqGYbbsPxCGbG3LCVNuv2erK5-DFP&_nc_zt=23&_nc_ht=scontent.fsgn2-6.fna&_nc_gid=ABjSojYwKz1A97x_5iKGxQ&oh=00_AfQTR2ze-8WGr-xjvt7xjCvR5CFOfvaXWX9K1z4ipNKMdg&oe=68713C49"
            alt="logo"
            className="logo"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderEndEndRadius: "10px",
              borderEndStartRadius: "10px",
            }}
          />
          <Button
            sx={{
              position: "absolute",
              bottom: "10px",
              right: "10px",
              bgcolor: "white",
              color: "black",
              borderRadius: "10px",
              "& .MuiButton-startIcon": {
                marginRight: { xs: 0 },
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              },
            }}
            variant="outlined"
            startIcon={<CameraAltIcon />}
          >
            <Box
              component="span"
              sx={{ display: { xs: "none", sm: "inline" } }}
            >
              Chỉnh sửa ảnh bìa
            </Box>
          </Button>
        </Grid>
        <Grid container spacing={2}>
          <Grid
            size={{ xs: 12, sm: 4, md: 4 }}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                position: "relative", // Quan trọng: Để định vị icon camera tuyệt đối bên trong Box này
                width: 174, // Kích thước cố định của Box bọc ngoài, điều chỉnh nếu cần
                height: 174,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Avatar
                sx={{
                  width: "100%", // Avatar chiếm 100% chiều rộng của Box cha
                  height: "100%",
                  border: "3px solid blue",
                  boxSizing: "border-box",
                  "& .MuiAvatar-img": {
                    objectFit: "cover", // Đảm bảo ảnh không bị méo khi co giãn
                  },
                  position: "absolute",
                  top: "-47px",
                }}
                alt="avt"
                src={avatar}
              />
            </Box>
          </Grid>
          <Grid
            size={{ xs: 12, sm: 8, md: 4 }}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box>
              <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                Trần Văn Phương (Xĩn)
              </Typography>
              <Typography sx={{ textAlign: { xs: "center", sm: "left" } }}>
                322 người bạn
              </Typography>
            </Box>
          </Grid>
          <Grid
            size={{ xs: 12, sm: 12, md: 4 }}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box sx={{ paddingBottom: { xs: "10px", sm: "10px", md: "0px" } }}>
              <Button
                sx={{
                  bgcolor: "#0866ff",
                  color: "white",
                  borderRadius: "5px",
                  fontWeight: 500,
                  fontSize: "15px",
                  border: "none",
                  marginBottom: { xs: "10px", sm: "0px", md: "10px" },
                  marginRight: { xs: "10px", md: "0px" },
                }}
                variant="outlined"
                startIcon={<AddIcon />}
              >
                Thêm vào tin
              </Button>
              <Button
                sx={{
                  bgcolor: "#e2e5e9",
                  color: "black",
                  borderRadius: "5px",
                  fontSize: "15px",
                  fontWeight: 500,
                  border: "none",
                }}
                variant="outlined"
                startIcon={<EditIcon />}
              >
                Chỉnh sữa trang cá nhân
              </Button>
            </Box>
          </Grid>
        </Grid>
        <hr style={{ margin: 0 }} />
        <Box sx={{ width: "100%", typography: "body1" }}>
          <TabContext value={value}>
            <Box
              sx={{
                borderBottom: 1,
                borderColor: "divider",
                fontWeight: "bold",
              }}
            >
              <TabList
                onChange={handleChange}
                aria-label="lab API tabs example"
                sx={{ marginTop: 1 }}
              >
                <Tab
                  sx={{
                    "&:focus": {
                      outline: "none",
                    },
                    ":hover": {
                      backgroundColor: "#f0f0f0",
                      borderRadius: "10px",
                    },
                  }}
                  label="Bài viết"
                  value="1"
                />
                <Tab
                  sx={{
                    "&:focus": {
                      outline: "none",
                    },
                    ":hover": {
                      backgroundColor: "#f0f0f0",
                      borderRadius: "10px",
                    },
                  }}
                  label="Giới Thiệu"
                  value="2"
                />
                <Tab
                  sx={{
                    "&:focus": {
                      outline: "none",
                    },
                    ":hover": {
                      backgroundColor: "#f0f0f0",
                      borderRadius: "10px",
                    },
                  }}
                  label="Bạn bè"
                  value="3"
                />
                <Tab
                  sx={{
                    "&:focus": {
                      outline: "none",
                    },
                    ":hover": {
                      backgroundColor: "#f0f0f0",
                      borderRadius: "10px",
                    },
                  }}
                  label="Ảnh"
                  value="4"
                />
                <Tab
                  sx={{
                    "&:focus": {
                      outline: "none",
                    },
                    ":hover": {
                      backgroundColor: "#f0f0f0",
                      borderRadius: "10px",
                    },
                  }}
                  label="Video"
                  value="5"
                />
                <Tab
                  sx={{
                    "&:focus": {
                      outline: "none",
                    },
                    ":hover": {
                      backgroundColor: "#f0f0f0",
                      borderRadius: "10px",
                    },
                  }}
                  label="Check in"
                  value="6"
                />
                <Tab
                  sx={{
                    "&:focus": {
                      outline: "none",
                    },
                    ":hover": {
                      backgroundColor: "#f0f0f0",
                      borderRadius: "10px",
                    },
                  }}
                  label="Xem thêm"
                  value="7"
                />
              </TabList>
            </Box>
            <TabPanel value="1">Bài viết</TabPanel>
            <TabPanel value="2">Giới Thiệu</TabPanel>
            <TabPanel value="3">Bạn bè</TabPanel>
            <TabPanel value="4">Ảnh</TabPanel>
            <TabPanel value="5">Video</TabPanel>
            <TabPanel value="6">Check in</TabPanel>
            <TabPanel value="7">Xem thêm</TabPanel>
          </TabContext>
        </Box>
      </Container>
    </>
  );
}

export default App;
