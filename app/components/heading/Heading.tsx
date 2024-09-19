import {FC} from 'react'
import clsx from 'clsx'

interface HeadingProps {
  text: string
  type?: 'micro'
}

const Heading: FC<HeadingProps> = ({
  text,
  type = 'micro'
}) => {
  const sizes = {
    micro: 'text-xs font-bold uppercase text-center md:text-left',
  }

  return (
    <div className={
      clsx(
        sizes[type],
        'text-accent-pink mb-8'
      )
    }>
      {text}
    </div>
  );
}

export default Heading