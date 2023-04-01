import { useRouter } from "next/router"
import { useForm } from "react-hook-form"
interface LoginForm {
  username: string
  password: string
}
const Login = () => {
  const router = useRouter()
  const {
    formState: { errors },
    setValue,
    register,
    handleSubmit,
  } = useForm<LoginForm>({
    defaultValues: {
      password: "",
      username: "",
    },
  })
  const onSubmit = (data: LoginForm) => {
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
            placeholder="Password"
            className={`input input-bordered w-full max-w-xs ${errors.password && "input-error"}`}
            {...register("password", {
              required: "Password is required",
              validate: validatePassword,
            })}
            data-cy="password"
          />
          <button data-cy="submit" className="btn btn-outline btn-primary">
            Login
          </button>
        </form>
      </div>
    </section>
  )
}
export default Login
