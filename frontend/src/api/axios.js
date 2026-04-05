import axios from "axios";

// ১. ব্যাকএন্ডের লাইভ URL টি এখানে সেট করা হয়েছে
// যদি আপনি Vite ব্যবহার করেন তবে .env থেকে নিবে, নাহলে সরাসরি Vercel URL ব্যবহার করবে
const API_BASE_URL =
  import.meta.env?.VITE_API_BASE_URL ||
  "https://campus-backend-silk.vercel.app/api";

const api = axios.create({
  baseURL: API_BASE_URL,
});

// ২. ইন্টারসেপ্টর এর মাধ্যমে অটোমেটিক টোকেন পাঠানো
api.interceptors.request.use(
  (config) => {
    try {
      const userData = localStorage.getItem("user");
      if (userData) {
        const user = JSON.parse(userData);
        if (user?.token) {
          config.headers.Authorization = `Bearer ${user.token}`;
        }
      }
    } catch (error) {
      console.error("Auth Token Error:", error);
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export default api;
