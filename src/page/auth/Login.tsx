import { useState } from "react";
import { Link } from "react-router";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Lock } from "lucide-react";
import Logo from "@/components/utils/Logo";
import DarkModeToggle from "@/components/DarkModeToggle";
import Header from "@/components/Header";
import SubmitErrorComp from "@/components/SubmitErrorComp";
import InputController from "@/components/form-components/InputController";
import { useForm, type SubmitHandler } from "react-hook-form";
import { loginSchema, type loginSchemaInput } from "@/zod/loginSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import Btn from "@/components/utils/Btn";
import HorizontalDivider from "@/components/utils/HorizontalDivider";

export default function Login() {
  // const navigate = useNavigate();
  // const location = useLocation();
  // const { login } = useAuth();
  const [submitError, setSubmitError] = useState("");

  const {
    handleSubmit,
    formState: { isSubmitting },
    control,
  } = useForm<loginSchemaInput>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<loginSchemaInput> = async (data) => {
    setSubmitError("");
    try {
      console.log(data);
    } catch (err) {
      setSubmitError("An unexpected error occurred. Please try again.");
      console.error("Signup error:", err);
    }
  };

  const handleSocialLogin = (provider: string) => {
    // Implement social login logic
    console.log(`Login with ${provider}`);
    // window.location.href = `/api/auth/${provider.toLowerCase()}`;
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
      {/* Header */}
      <Header
        leftComponents={[
          <Link to="/">
            <Logo />
          </Link>,
        ]}
        rightComponents={[<DarkModeToggle />]}
      />

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16 flex items-center justify-center min-h-[calc(100vh-80px)]">
        <div className="w-full max-w-md">
          {/* Welcome Text */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-2 text-gray-900 dark:text-white">
              Welcome Back!
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              Sign in to continue your preparation journey
            </p>
          </div>

          {/* Login Card */}
          <Card className="border-2 border-gray-200 dark:border-gray-800 dark:bg-gray-800">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                {/* General Error Message */}
                {submitError && <SubmitErrorComp errorString={submitError} />}

                {/* Email Field */}
                <InputController
                  control={control}
                  inputId="email"
                  inputTitle="Email"
                  inputName="email"
                  placeholder="e.g example@gmail.com"
                  inputIcon={
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  }
                />

                {/* Password Field */}
                <InputController
                  control={control}
                  inputType="password"
                  inputId="password"
                  inputTitle="Password"
                  inputName="password"
                  placeholder="*************"
                  inputIcon={
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  }
                />
                {/* <div>
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium mb-2 text-gray-900 dark:text-white"
                  >
                    Password
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type={showPassword ? "text" : "password"}
                      id="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      className="w-full pl-10 pr-12 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500"
                      placeholder="••••••••"
                      required
                      disabled={loading}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                      disabled={loading}
                    >
                      {showPassword ? (
                        <EyeOff className="w-5 h-5" />
                      ) : (
                        <Eye className="w-5 h-5" />
                      )}
                    </button>
                  </div>
                </div> */}

                {/* Remember Me & Forgot Password */}
                <div className="flex items-center justify-between">
                  <Link
                    to="/forgot-password"
                    className="text-sm text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
                  >
                    Forgot password?
                  </Link>
                </div>

                {/* Submit Button */}
                <Btn
                  btnType="submit"
                  btnText="Login"
                  btnTextOnHandeling="Login..."
                  isHandeling={isSubmitting}
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white text-lg py-5"
                />

                {/* Divider */}
                <HorizontalDivider dividerText="Or Login with" />

                {/* Social Login Buttons */}
                <Btn
                  btnText="Signup with Google"
                  disabled={isSubmitting}
                  handleBtnClick={() => handleSocialLogin("Google")}
                  isHandeling={false}
                  icon={
                    <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                      <path
                        fill="currentColor"
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      />
                      <path
                        fill="currentColor"
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      />
                      <path
                        fill="currentColor"
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                      />
                      <path
                        fill="currentColor"
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                      />
                    </svg>
                  }
                  className="w-full border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600"
                />
              </form>
            </CardContent>
          </Card>

          {/* Sign Up Link */}
          <p className="text-center mt-6 text-gray-600 dark:text-gray-400">
            Don't have an account?{" "}
            <Link
              to="/signup"
              className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-semibold"
            >
              Sign up for free
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
