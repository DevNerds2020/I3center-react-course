import { useRef, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form"


type PersonType = {
  name: string,
  familyName: string
}

type Inputs = {
  name: string
  familyName: string
}
function App() {
  const savedPerson = localStorage.getItem("person");
  const person = useRef<PersonType>(savedPerson ? JSON.parse(savedPerson) : { name: '', familyName: '' })

  const {
    register,
    handleSubmit,
  } = useForm<Inputs>()

  const [isUserExist, setIsUserExist] = useState<boolean>(savedPerson ? true : false);

  // const handleChange = (event: React.ChangeEvent<HTMLInputElement> | undefined): void => {
  //   if (event && (event.target.name === 'name' || event.target.name === 'familyName')) {
  //     person.current[event.target.name] = event.target.value
  //     console.log("%c Line:16 🥃 person.current", "color:#2eafb0", person.current);
  //   }
  // }

  // const handleLogin = (): void => {
  //   if (person) {
  //     setIsUserExist(true)
  //     localStorage.setItem("person", JSON.stringify(person));
  //   }
  // }

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)


  return (
    <>
      {isUserExist ?
        <>
          hello {person.current.name} ---- {person.current.familyName}
        </>
        :
        <>
          /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* register your input into the hook by invoking the "register" function */}
            <input {...register("name")} />

            {/* include validation with required or other standard HTML validation rules */}
            <input {...register("familyName")} />

            <input type="submit" />
          </form>
        </>
      }
    </>
  )
}

export default App
