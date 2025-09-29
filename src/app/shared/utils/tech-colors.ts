export function getTechnologiesClass(index: number): string {
  const colors = [
    'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
    'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
    'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200',
    'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200',
    'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200'
  ];
  return colors[index % colors.length];
}
