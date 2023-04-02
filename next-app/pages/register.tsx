import { useRouter } from "next/router"
import { useForm, Validate } from "react-hook-form"
interface RegisterForm {
  username: string
  password: string
  fullname: string
  confirmPassword: string
}

const Register = () => {
  const router = useRouter()
  const {
    formState: { errors },
    watch,
    register,
    handleSubmit,
  } = useForm<RegisterForm>({
    defaultValues: {
      password: "",
      username: "",
      fullname: "",
      confirmPassword: "",
    },
  })
  const onSubmit = (data: RegisterForm) => {
    router.push("/")
  }
  function validateUsername(username: string) {
    const regex = /^[a-zA-Z0-9_-]{3,16}$/
    return regex.test(username)
  }

  const validatePassword = (password: string) => {
    if (password.length < 8) {
      return "Password must be at least 8 characters long"
    }
    if (!/\d/.test(password)) {
      return "Password must contain at least one number"
    }
    if (!/[A-Z]/.test(password)) {
      return "Password must contain at least one uppercase letter"
    }
    if (!/[a-z]/.test(password)) {
      return "Password must contain at least one lowercase letter"
    }
    return true
  }
  const validatePasswordMatch: Validate<string, RegisterForm> = (confirmPassword: string) => {
    return watch("password") === confirmPassword || "Passwords do not match"
  }
  return (
    <section>
      <div className="h-screen w-screen flex items-center justify-center">
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 w-96 max-w-xs">
          <input
            type="text"
            placeholder="Username"
            className={`input input-bordered w-full max-w-xs ${errors.username && "input-error"}`}
            {...register("username", {
              required: "Username is required",
              validate: validateUsername,
            })}
            data-cy="username"
          />
          <input
            type="text"
            placeholder="Fullname"
            className={`input input-bordered w-full max-w-xs ${errors.fullname && "input-error"}`}
            {...register("fullname", {
              required: "Fullname is required",
            })}
            data-cy="fullname"
          />
          <input
            type="text"
            placeholder="Password"
            className={`input input-bordered w-full max-w-xs ${errors.password && "input-error"}`}
            {...register("password", {
              required: "Password is required",
              validate: validatePassword,
            })}
            data-cy="password"
          />
          <input
            type="text"
            placeholder="Confirm Password"
            className={`input input-bordered w-full max-w-xs ${
              errors.confirmPassword && "input-error"
            }`}
            {...register("confirmPassword", {
              required: "Confirm Password is required",
              validate: validatePasswordMatch,
            })}
            data-cy="confirm-password"
          />
          <button data-cy="submit" className="btn btn-outline btn-primary">
            Register
          </button>
        </form>
      </div>
    </section>
  )
}
export default Register
