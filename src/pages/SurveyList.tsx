import React, { Suspense } from 'react';
import { Container, Title, Button, Group, Stack, Paper, Loader, Center, Text } from '@mantine/core';
import { Link } from 'react-router-dom';
import { IconPlus } from '@tabler/icons-react';

import SurveyCard from '@/components/SurveyCard';
import { useGetSurveyList } from '@/api/useGetSurveyList';

const SurveyListContent: React.FC = () => {
  const { data } = useGetSurveyList();

  if (!data || !data.surveys || data.surveys.length === 0) {
    return (
      <Center h={200}>
        <Text>アンケートがありません</Text>
      </Center>
    );
  }

  return (
    <Stack>
      {data.surveys.map((survey) => (
        <SurveyCard key={survey.id} {...survey} />
      ))}
    </Stack>
  );
};

const LoadingFallback: React.FC = () => (
  <Center h={200}>
    <Loader size="lg" />
  </Center>
);

const ErrorBoundary: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  try {
    return <>{children}</>;
  } catch (error) {
    return (
      <Center h={200}>
        <Text c="red">エラーが発生しました。再度お試しください。</Text>
      </Center>
    );
  }
};

const SurveyList: React.FC = () => {
  return (
    <Container size="lg" py="xl">
      <Paper shadow="xs" p="xl" withBorder mb="xl">
        <Group justify="space-between" align="center" py="md">
          <Title order={2}>就活アンケート一覧</Title>
          <Button 
            component={Link} 
            to="/create" 
            leftSection={<IconPlus size={16} />}
            variant="filled"
            color="blue"
            size="md"
            px="xl"
          >
            新規アンケート作成
          </Button>
        </Group>
      </Paper>

      <ErrorBoundary>
        <Suspense fallback={<LoadingFallback />}>
          <SurveyListContent />
        </Suspense>
      </ErrorBoundary>
    </Container>
  );
};

export default SurveyList;
