import { useState } from "react"

interface Props {
  heading: string
  items: string[]
}

function ListGroup(props: Props) {
  let [selectedIndex, SetIndex] = useState(-1)

  return (
    <>
      <h1>{props.heading}</h1>
      {props.items.length === 0 ? <p>No items found</p> : null}
      <ul className='list-group'>
        {props.items.map((item, index) => (
          <li
            key={item}
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => {
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
