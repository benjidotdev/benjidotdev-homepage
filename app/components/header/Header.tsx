import Menu from '@/app/components/menu/Menu'
import {FC} from 'react'
import Container from '@/app/components/container/Container'

const Header: FC = () => {
  return (
      <div id="header" className="sticky top-0 w-full flex justify-center p-8 z-50 backdrop-blur-xl">
        <Container>
          <div className="w-full flex justify-center md:justify-between">
            <div />
            <Menu />
          </div>
        </Container>
      </div>
  );
}

export default Header