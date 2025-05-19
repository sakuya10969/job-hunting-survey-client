import React from 'react';
import { Paper, Text, Group, Stack, Grid, ActionIcon } from '@mantine/core';
import { Link } from 'react-router-dom';
import { IconEdit, IconTrash } from '@tabler/icons-react';

interface SurveyCardProps {
  id: number;
  name: string;
  email: string;
  grade: string;
  industry: string;
  jobType: string;
  submittedAt: string;
}

const SurveyCard: React.FC<SurveyCardProps> = ({
  id,
  name,
  email,
  grade,
  industry,
  jobType,
  submittedAt
}) => {
  return (
    <Paper shadow="xs" p="md" withBorder>
      <Grid>
        <Grid.Col span={8}>
          <Stack>
            <Group>
              <Text fw={700} size="lg">{name}</Text>
              <Text c="dimmed">({email})</Text>
            </Group>
            <Group>
              <Text>{grade}</Text>
              <Text>•</Text>
              <Text>{industry}</Text>
              <Text>•</Text>
              <Text>{jobType}</Text>
            </Group>
            <Text size="sm" c="dimmed">提出日: {submittedAt}</Text>
          </Stack>
        </Grid.Col>
        <Grid.Col span={4}>
          <Group justify="flex-end" align="center" h="100%">
            <ActionIcon variant="light" color="blue" component={Link} to={`/survey/${id}`}>
              <IconEdit size={18} />
            </ActionIcon>
            <ActionIcon variant="light" color="red">
              <IconTrash size={18} />
            </ActionIcon>
          </Group>
        </Grid.Col>
      </Grid>
    </Paper>
  );
};

export default SurveyCard;
