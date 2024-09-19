import {FC, ReactNode} from 'react'

interface ContainerProps {
  children: ReactNode
}
const Container: FC<ContainerProps> = ({ children }) => {
  return (
    <div className="w-full max-w-[1280px]">
      {children}
    </div>
  );
}

export default Container