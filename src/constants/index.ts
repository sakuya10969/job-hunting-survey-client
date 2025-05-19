export const GRADES = [
  { value: '1', label: '学部1年生' },
  { value: '2', label: '学部2年生' },
  { value: '3', label: '学部3年生' },
  { value: '4', label: '学部4年生' },
  { value: '5', label: '修士1年生' },
  { value: '6', label: '修士2年生' }
] as const;

export type Grade = typeof GRADES[number]['value'];
