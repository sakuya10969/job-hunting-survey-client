import React from 'react';
import { Container, Title, Button, Stack, TextInput, Select, Textarea, Paper } from '@mantine/core';
import { useForm, Controller } from 'react-hook-form';

interface SurveyFormData {
  name: string;
  email: string;
  grade: string;
  industry: string;
  jobType: string;
  motivation: string;
  selfPR: string;
}

const SurveyForm: React.FC = () => {
  const { register, handleSubmit, control, formState: { errors } } = useForm<SurveyFormData>();

  const onSubmit = (data: SurveyFormData) => {
    console.log(data);
    // ここでフォームデータの送信処理を実装
  };

  return (
    <Container size="sm" mt="xl">
      <Title order={2} mb="xl">就活アンケート</Title>
      <Paper p="md" withBorder>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack>
            <TextInput
              label="お名前"
              placeholder="山田 太郎"
              error={errors.name?.message}
              {...register('name', {
                required: '名前は必須です',
                maxLength: { value: 50, message: '50文字以内で入力してください' }
              })}
            />
            <TextInput
              label="メールアドレス" 
              placeholder="example@email.com"
              error={errors.email?.message}
              {...register('email', {
                required: 'メールアドレスは必須です',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: '有効なメールアドレスを入力してください'
                }
              })}
            />
            <Controller
              name="grade"
              control={control}
              rules={{ required: '学年は必須です' }}
              render={({ field }) => (
                <Select
                  label="学年"
                  placeholder="選択してください"
                  data={[
                    '学部1年生',
                    '学部2年生', 
                    '学部3年生',
                    '学部4年生',
                    '修士1年生',
                    '修士2年生'
                  ]}
                  error={errors.grade?.message}
                  {...field}
                />
              )}
            />
            <TextInput
              label="志望業界"
              placeholder="IT・通信"
              error={errors.industry?.message}
              {...register('industry', {
                required: '志望業界は必須です',
                maxLength: { value: 50, message: '50文字以内で入力してください' }
              })}
            />
            <TextInput 
              label="志望職種"
              placeholder="システムエンジニア"
              error={errors.jobType?.message}
              {...register('jobType', {
                required: '志望職種は必須です',
                maxLength: { value: 50, message: '50文字以内で入力してください' }
              })}
            />
            <Textarea
              label="志望動機"
              placeholder="志望動機を記入してください"
              minRows={4}
              error={errors.motivation?.message}
              {...register('motivation', {
                required: '志望動機は必須です',
                maxLength: { value: 1000, message: '1000文字以内で入力してください' }
              })}
            />
            <Textarea
              label="自己PR"
              placeholder="自己PRを記入してください"
              minRows={4}
              error={errors.selfPR?.message}
              {...register('selfPR', {
                required: '自己PRは必須です',
                maxLength: { value: 1000, message: '1000文字以内で入力してください' }
              })}
            />
            <Button type="submit" variant="filled" size="md" fullWidth>
              送信する
            </Button>
          </Stack>
        </form>
      </Paper>
    </Container>
  );
};

export default SurveyForm;
