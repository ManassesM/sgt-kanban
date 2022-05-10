import { ITask } from './types'

export function getDefaultValues(task?: ITask) {
  return {
    title: task?.title || '',
    description: task?.description || '',
    priority: task?.priority || 0,
    date: task?.date || '',
  }
}
