import axios from 'axios';

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// レスポンスインターセプター
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    // エラーレスポンスの処理
    const message = error.response?.data?.message || '予期せぬエラーが発生しました';
    return Promise.reject(new Error(message));
  }
);

export default apiClient;
