export interface ITask {
  title: string
  description: string
  priority: string
  date: string
}

export function getDefaultValues(task?: ITask) {
  return {
    title: task?.title || '',
    description: task?.description || '',
    priority: task?.priority || '0',
    date: task?.date || '',
  }
}
