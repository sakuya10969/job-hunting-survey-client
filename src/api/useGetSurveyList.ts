import { useSuspenseQuery } from '@tanstack/react-query';
import apiClient from './apiClient';
import type { Grade } from '@/constants';

interface SurveyList {
  id: number;
  name: string;
  email: string;
  grade: Grade;
  industry: string;
  jobType: string;
  submittedAt: string;
}

interface SurveyListResponse {
  surveys: SurveyList[];
  total: number;
}

const getSurveyList = async (): Promise<SurveyListResponse> => {
  const response = await apiClient.get<SurveyListResponse>('/survey');
  return response.data;
};

export const useGetSurveyList = () => {
  return useSuspenseQuery({
    queryKey: ['surveys'],
    queryFn: getSurveyList,
  });
}; 