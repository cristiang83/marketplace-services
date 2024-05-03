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
  const returnTo = router.query.return_to;

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
      if (returnTo) {
        router.push(returnTo);
      } else {
        if (data.user.user_metadata.tipo === "proveedor") {
          router.push("/edit"); // Redirige a la página de edición
        } else {
          router.push("/service_types");
        }
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
      if (returnTo) {
        router.push(returnTo);
      } else {
        if (data.user.user_metadata.tipo === "proveedor") {
          router.push("/edit"); // Redirige a la página de edición
        } else {
          router.push("/service_types");
        }
      }
    }
  };

  return (
    <div className="container vh-75" style={{ paddingTop: "10%" }}>
      <div className="row align-items-center justify-content-center h-20">
        <div className="col-md-6 py-5" style={{ paddingTop: "10%" }}>
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
                  className="btn btn-outline-dark mb-3"
                  onClick={handleLogin}
                >
                  Login
                </button>
              ) : (
                <button
                  type="button"
                  className="btn btn-light"
                  onClick={handleSignup}
                >
                  Sign up
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
      {isLogin && (
        <div className="d-flex justify-content-center align-items-end">
          <div className="">
            <Link
              href={
                "/register-provider" +
                (returnTo ? "?return_to=" + returnTo : "")
              }
              className="btn btn-outline-dark"
            >
              Register as Provider
            </Link>
          </div>
          <div className="mx-2">
            <Link
              href={
                "/register-client" + (returnTo ? "?return_to=" + returnTo : "")
              }
              className="btn btn-outline-dark"
            >
              Register as Client
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
