export const GRADES = [
  { value: '1', label: '学士1年' },
  { value: '2', label: '学士2年' },
  { value: '3', label: '学士3年' },
  { value: '4', label: '学士4年' },
  { value: '5', label: '修士1年' },
  { value: '6', label: '修士2年' }
] as const;

export type Grade = typeof GRADES[number]['value'];
