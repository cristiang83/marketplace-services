import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import Link from "next/link";

export function Login({ tipo, isLogin }) {
  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const supabase = useSupabaseClient();
  const router = useRouter();

  const handleLogin = async () => {
    const values = form.getValues();
    const { data, error: signInError } = await supabase.auth.signInWithPassword(
      {
        email: values.email,
        password: values.password,
      }
    );

    if (signInError) {
      return;
    }

    if (!signInError && data && data.session) {
      await supabase.auth.setSession({
        access_token: data.session.access_token,
        refresh_token: data.session.refresh_token,
      });
      if (data.user.user_metadata.tipo === "proveedor") {
        router.push("/edit"); // Redirige a la página de edición
      } else {
        router.push("/service_types");
      }
    }
  };

  const handleSignup = async () => {
    const values = form.getValues();
    const { data, error: signInError } = await supabase.auth.signUp({
      email: values.email,
      password: values.password,
      options: {
        data: {
          tipo: tipo,
        },
      },
    });

    if (signInError) {
      return;
    }

    if (!signInError && data && data.session) {
      await supabase.auth.setSession({
        access_token: data.session.access_token,
        refresh_token: data.session.refresh_token,
      });
      if (data.user.user_metadata.tipo === "proveedor") {
        router.push("/edit"); // Redirige a la página de edición
      } else {
        router.push("/service_types");
      }
    }
  };

  return (
    <div className="container">
      <h2 className="text-center mb-4">{isLogin ? "Login" : "Register"}</h2>
      <form>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            {...form.register("email")}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            {...form.register("password")}
          />
        </div>
        <div className="d-grid gap-2">
          {isLogin ? (
            <button
              type="button"
              className="btn btn-primary mb-3"
              onClick={handleLogin}
            >
              Login
            </button>
          ) : (
            <button
              type="button"
              className="btn btn-outline-primary"
              onClick={handleSignup}
            >
              Sign up
            </button>
          )}
        </div>
      </form>
      {isLogin && (
        <div>
          <Link href="/register-provider" className="btn btn-outline-info">
            Register as Provider
          </Link>
          <Link href="/register-client" className="btn btn-outline-info">
            Register as Client
          </Link>
        </div>
      )}
    </div>
  );
}
