import { Button } from "./components/Button"
import Alert from "./components/Alert"
import { useState } from "react"

export default function App() {
  const [visibale, setVisibleity] = useState(false)
  return (
    <div>
      {visibale && <Alert onClose={() => setVisibleity(false)}>hi thre</Alert>}
      <Button onClick={() => setVisibleity(true)}>my button</Button>
    </div>
  )
}
