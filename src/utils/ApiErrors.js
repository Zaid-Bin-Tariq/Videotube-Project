class ApiErrors extends Error {
  constructor(
    statusCode,
    message = "Something went wrong",
    errors = [],
    stack = ""
  ) {
    super(message),
      (this.data = null),
      (this.statusCode = statusCode),
      (this.success = false),
      (this.message = message),
      (this.errors = errors);

    if (stack) {
      this.stack = stack;
    } else {
      Error.CaptureStackTrace(this, this.constructor);
    }
  }
}

export { ApiErrors };
