import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Điều này sẽ tự động phát hiện địa chỉ IP của bạn
    // Hoặc bạn có thể chỉ định một địa chỉ IP cụ thể nếu muốn:
    // host: '192.168.1.xxx', // Thay thế bằng địa chỉ IP của máy bạn
  },
});
