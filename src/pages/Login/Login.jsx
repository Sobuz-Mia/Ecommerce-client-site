import { useForm } from "react-hook-form";
import login from "../../assets/login.jpg";
import { Link } from "react-router-dom";
const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="flex gap-4 p-3">
      <div className="card shrink-0 w-full max-w-md mx-auto shadow-2xl bg-base-100 max-h-screen">
        <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
          <h2 className="text-xl font-bold text-center">Login</h2>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Your Email</span>
            </label>
            <input className="input input-bordered" placeholder="Your email" {...register("email",{required:true})} />
            {errors.email && <span>Email is required</span>}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Your Password</span>
              </label>
              <input className="input input-bordered" placeholder="Your password" {...register("password",{required:true})} />
              {errors.password && <span>Please enter password</span>}
            </div>
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-[#FFC801] text-xl font-bold text-white">Login</button>
          </div>
          <div className="text-center">
            <p className="mt-4">
              If you do not have an account. You can register here{" "}
              <Link to={"/sign-up"} className="text-blue-500 underline">
                SignUp
              </Link>
            </p>
            <p className="text-center my-4">Or Continue With</p>
            <button className="btn btn-ghost text-[#FFC801] btn-outline w-3/4">
              Login With Google
            </button>
          </div>
        </form>
      </div>
      <img
        src={login}
        className="object-cover w-1/2 mx-auto max-h-screen"
        alt=""
      />
    </div>
  );
};

export default Login;
