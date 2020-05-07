export class AppError extends Error {
  public code: number
  public error: Error | undefined

  public constructor(code: number, message: string, error?: Error) {
    super(message)

    this.code = code
    this.error = error
  }

  public toModel() {
    return {
      code: this.code,
      message: this.message
    }
  }
}

export class ValidationError extends AppError {
  public constructor(message: string, error?: Error) {
    super(30000, message, error)
  }
}
