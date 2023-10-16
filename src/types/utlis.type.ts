export type SuccessResponse<T> = {
  count: number
  next: string | null
  results: T[]
}
