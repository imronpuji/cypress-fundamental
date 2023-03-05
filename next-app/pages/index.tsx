import { useState } from "react"

const Index = () => {
  const [fullName, setFullName] = useState<string>("")
  const [userCountry, setUserCountry] = useState<string>("")
  return (
    <div>
      <input
        type="text"
        placeholder="Input Name"
        onChange={(event) => setFullName(event.target.value)}
        data-cy="fullname"
      />
      <input
        type="text"
        placeholder="Input Country"
        onChange={(event) => setUserCountry(event.target.value)}
        data-cy="usercountry"
      />
      <button>Show User data</button>

      {fullName.length > 0 && <h1 data-cy="show-fullname">{fullName}</h1>}
    </div>
  )
}
export default Index
