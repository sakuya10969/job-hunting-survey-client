import React from 'react';
import { Container, Title, Button, Group, Stack, Paper } from '@mantine/core';
import { Link } from 'react-router-dom';
import { IconPlus } from '@tabler/icons-react';

import type { Grade } from '@/constants';
import SurveyCard from '@/components/SurveyCard';

const mockSurveys = [
  {
    id: 1,
    name: "山田 太郎",
    email: "yamada@example.com", 
    grade: "3" as Grade,
    industry: "IT・通信",
    jobType: "システムエンジニア",
    submittedAt: "2023-12-01"
  },
  {
    id: 2, 
    name: "鈴木 花子",
    email: "suzuki@example.com",
    grade: "5" as Grade,
    industry: "コンサルティング",
    jobType: "ITコンサルタント",
    submittedAt: "2023-12-02"
  }
];

const SurveyList: React.FC = () => {
  return (
    <Container size="lg" py="xl">
      <Paper shadow="xs" p="md" withBorder mb="xl">
        <Group justify="space-between" align="center">
          <Title order={2}>就活アンケート一覧</Title>
          <Button 
            component={Link} 
            to="/create" 
            leftSection={<IconPlus size={16} />}
            variant="filled"
            color="blue"
          >
            新規アンケート作成
          </Button>
        </Group>
      </Paper>

      <Stack>
        {mockSurveys.map((survey) => (
          <SurveyCard key={survey.id} {...survey} />
        ))}
      </Stack>
    </Container>
  );
};

export default SurveyList;
