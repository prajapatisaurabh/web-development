import { Link } from "react-router-dom";
import * as z from "zod";

import { Button } from "@/components/Elements";
import { Form, InputField } from "@/components/Form";
import { useLogin } from "@/lib/auth";

const schema = z.object({
  username: z.string().min(1, "Required"),
  password: z.string().min(1, "Required"),
});

type LoginValues = {
  username: string;
  password: string;
};

type LoginFormProps = {
  onSuccess: () => void;
};

export const LoginForm = ({ onSuccess }: LoginFormProps) => {
  const login = useLogin();

  return (
    <div>
      <Form<LoginValues>
        onSubmit={async (values) => {
          await login.mutateAsync(values);
          onSuccess();
        }}
        schema={schema}
      >
        {({ register, formState }) => (
          <>
            <InputField
              type="text"
              label="Username"
              error={formState.errors["username"]}
              registration={register("username")}
            />
            <InputField
              type="password"
              label="Password"
              error={formState.errors["password"]}
              registration={register("password")}
            />
            <div>
              <Button
                isLoading={login.isLoading}
                type="submit"
                className="w-full"
              >
                Log in
              </Button>
            </div>
          </>
        )}
      </Form>
      <div className="flex items-center justify-end mt-2">
        <div className="text-sm">
          <Link
            to="../register"
            className="font-medium text-blue-600 hover:text-blue-500"
          >
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};
