import React, { Suspense } from 'react';
import { Container, Title, Button, Group, Stack, Paper, Loader, Center } from '@mantine/core';
import { Link } from 'react-router-dom';
import { IconPlus } from '@tabler/icons-react';

import SurveyCard from '@/components/SurveyCard';
import { useGetSurveyList } from '@/api/useGetSurveyList';

const SurveyListContent: React.FC = () => {
  const { data } = useGetSurveyList();

  return (
    <Stack>
      {data.surveys.map((survey) => (
        <SurveyCard key={survey.id} {...survey} />
      ))}
    </Stack>
  );
};

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

      <Suspense fallback={
        <Center h={200}>
          <Loader size="lg" />
        </Center>
      }>
        <SurveyListContent />
      </Suspense>
    </Container>
  );
};

export default SurveyList;
