import ListGroup from "./components/listGroup"

export default function App() {
  const items = ["New York", "Los Angeles", "Washington D.C.", "Philadelphia"]

  return (
    <div>
      <ListGroup items={items} heading='Listii' />
    </div>
  )
}
