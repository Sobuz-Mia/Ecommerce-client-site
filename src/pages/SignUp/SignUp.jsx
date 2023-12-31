import { Link, useNavigate } from "react-router-dom";
import image from "../../assets/login.jpg";
import { useForm } from "react-hook-form";
import useAuth from "./../../hooks/useAuth";
import toast from "react-hot-toast";
import axios from "axios";
const SignUp = () => {
  const { createUser, handleUpdateProfile, loggedOut } = useAuth();

  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    createUser(data.email, data.password).then((result) => {
      if (result.user) {
        handleUpdateProfile(data.name, data.photo).then(() => {
          const userInfo = {
            email: data.email,
            password: data.password,
          };
          axios.post("https://e-commerce-server-site-orpin.vercel.app/user", userInfo).then((res) => {
            if (res.data.insertedId) {
              reset();
              loggedOut().then(() => {
                toast.success("User Create Successfully");
                navigate("/login");
              });
            }
          });
        });
      }
    });
  };

  return (
    <div className="flex gap-4 p-3">
      <div className="card shrink-0 w-full max-w-md mx-auto shadow-2xl bg-base-100">
        <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
          <h2 className="text-lg font-bold">Sign Up Our Platform</h2>
          <p>
            If you already have an account. You can Login here{" "}
            <Link to={"/login"} className="text-blue-500 underline">
              Login
            </Link>
          </p>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Your Name</span>
            </label>
            <input
              className="input input-bordered"
              placeholder="Your name"
              {...register("name", { required: true })}
            />
            {errors.name && <span>Please enter your name</span>}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Your Email</span>
            </label>
            <input
              className="input input-bordered"
              placeholder="Your email"
              {...register("email", { required: true })}
            />
            {errors.email && <span>Email is required</span>}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Your Password</span>
              </label>
              <input
                className="input input-bordered"
                placeholder="Your password"
                type="password"
                {...register("password", { required: true })}
              />
              {errors.password && <span>Please enter password</span>}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Your Photo URL</span>
              </label>
              <input
                className="input input-bordered"
                placeholder="Your photo url"
                {...register("photo", { required: true })}
              />
              {errors.photo && <span>Pasted your photo url</span>}
            </div>
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-[#FFC801] text-xl font-bold text-white">
              SignUp
            </button>
          </div>
        </form>
      </div>
      <img
        className="object-cover w-1/2 mx-auto max-h-screen"
        src={image}
        alt=""
      />
    </div>
  );
};

export default SignUp;
