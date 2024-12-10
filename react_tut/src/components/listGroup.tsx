import { useState } from "react"

interface Props {
  heading: string
  items: string[]
  onSelectItem: (item: string) => void
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  let [selectedIndex, SetIndex] = useState(-1)

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 ? <p>No items found</p> : null}
      <ul className='list-group'>
        {items.map((item, index) => (
          <li
            key={item}
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => {
              onSelectItem(item)
              if (index == selectedIndex) SetIndex(-1)
              else SetIndex(index)
            }} // Pass index to handleClick
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  )
}

export default ListGroup
