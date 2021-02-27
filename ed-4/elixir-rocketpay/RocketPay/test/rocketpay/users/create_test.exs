defmodule Rocketpay.Users.CreateTest do
  use Rocketpay.DataCase, async: true

  alias Rocketpay.User
  alias Rocketpay.Users.Create

  describe "call/1" do
    test "it should be able to create a user if the params are valid" do
      params = %{
        name: "hs",
        password: "123456",
        nickname: "kolunma",
        email: "hks@teste123.com",
        age: 23
      }

      {:ok, %User{id: user_id}} = Create.call(params)

      user = Repo.get(User, user_id)

      assert %User{name: "Lucas Eduardo", age: 23, id: ^user_id} = user
    end

    test "it should not be able to create a user if the params are invalid" do
      params = %{
        name: "hs",
        nickname: "kolunma",
        email: "hks@teste123.com",
        age: 22
      }

      {:error, changeset} = Create.call(params)

      expected_response = %{
        age: ["must be greater than or equal to 18"],
        password: ["can't be blank"]
      }

      assert expected_response == errors_on(changeset)
    end
  end
end
