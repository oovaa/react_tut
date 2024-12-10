interface Props {
  children: string
  onClick: () => void
}

export const Button = ({ children, onClick }: Props) => {
  return (
    <div>
      <button type='button' className='btn btn-info' onClick={() => onClick()}>
        {children}
      </button>
    </div>
  )
}
