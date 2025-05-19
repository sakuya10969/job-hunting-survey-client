import { useMutation } from '@tanstack/react-query';
import type { Grade } from '@/constants';
import apiClient from './apiClient';

interface SurveyFormData {
  name: string;
  email: string;
  grade: Grade;
  industry: string;
  jobType: string;
  motivation: string;
  selfPR: string;
}

interface SurveyFormDataResponse {
  id: number;
  name: string;
  email: string;
  grade: Grade;
  industry: string;
  jobType: string;
  motivation: string;
  selfPR: string;
  submittedAt: string;
}

const storeSurveyForm = async (data: SurveyFormData): Promise<SurveyFormDataResponse> => {
  const response = await apiClient.post<SurveyFormDataResponse>('/survey', data);
  return response.data;
};

export const useStoreSurveyForm = () => {
  return useMutation({
    mutationFn: storeSurveyForm,
    onSuccess: () => {
      // 成功時の処理（例：トースト通知など）
      console.log('アンケートが送信されました');
    },
    onError: (error: Error) => {
      // エラー時の処理（例：エラーメッセージの表示など）
      console.error('エラーが発生しました:', error.message);
    },
  });
};
