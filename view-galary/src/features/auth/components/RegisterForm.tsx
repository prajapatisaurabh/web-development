import { Link } from "react-router-dom";
import * as z from "zod";

import { Button } from "@/components/Elements";
import { Form, InputField, SelectField } from "@/components/Form";
import { useRegister } from "@/lib/auth";

const schema = z.object({
  username: z.string().min(1, "Required"),
  email: z.string().min(1, "Required"),
  firstname: z.string().min(1, "Required"),
  lastname: z.string().min(1, "Required"),
  password: z.string().min(1, "Required"),
  role: z.string().min(1, "Required"),
});

type RegisterValues = {
  username: string;
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  role: string;
};

type RegisterFormProps = {
  onSuccess: () => void;
};

export const RegisterForm = ({ onSuccess }: RegisterFormProps) => {
  const registerMutation = useRegister();

  const option = [
    {
      label: "user",
      value: "user",
    },

    {
      label: "moderate",
      value: "moderate",
    },
    {
      label: "admin",
      value: "admin",
    },
  ];

  return (
    <div>
      <Form<RegisterValues, typeof schema>
        onSubmit={async (values) => {
          await registerMutation.mutate(values);
          console.log("fail");
          onSuccess();
        }}
        schema={schema}
        options={{
          shouldUnregister: true,
        }}
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
              type="text"
              label="First Name"
              error={formState.errors["firstname"]}
              registration={register("firstname")}
            />
            <InputField
              type="text"
              label="Last Name"
              error={formState.errors["lastname"]}
              registration={register("lastname")}
            />
            <InputField
              type="email"
              label="Email Address"
              error={formState.errors["email"]}
              registration={register("email")}
            />
            <InputField
              type="password"
              label="Password"
              error={formState.errors["password"]}
              registration={register("password")}
            />

            {/* <InputField
              type="text"
              label="role"
              error={formState.errors["role"]}
              registration={register("role")}
            /> */}

            <SelectField
              label="Role"
              placeholder="Select role"
              error={formState.errors["role"]}
              registration={register("role")}
              options={option}
            ></SelectField>

            <div>
              <Button
                isLoading={registerMutation.isLoading}
                type="submit"
                className="w-full"
              >
                Register
              </Button>
            </div>
          </>
        )}
      </Form>
      <div className="">
        <div className="">
          <Link to="../login" className="">
            Log In
          </Link>
        </div>
      </div>
    </div>
  );
};
