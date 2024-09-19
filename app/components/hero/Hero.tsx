import {FC} from 'react'
import LinkedInIcon from '@/app/components/icons/LinkedInIcon'
import DribbleIcon from '@/app/components/icons/DribbleIcon'
import Heading from '@/app/components/heading/Heading'
import CTAButton from '@/app/components/buttons/cta-button/CTAButton'
import Container from '@/app/components/container/Container'
import Waves from '@/app/components/waves/Waves'

const socialsData = [
  {
    href: 'https://linkedin.com/in/benjamin-comley/',
    label: 'LinkedIn',
    icon: LinkedInIcon,
    disabled: false,
  },
  {
    href: 'https://dribbble.com/benjidotdev',
    label: 'Dribble',
    icon: DribbleIcon,
    disabled: true,
  },
]

const ComingSoon = () => {
  return (
    <div className="relative w-10 h-10 text-foreground-secondary cursor-default">
      <svg className="absolute -left-1 -top-1 inset-0 w-full h-full animate-spin-anticlockwise" viewBox="0 0 24 24">
        <path id="circlePath" fill="transparent" d="M 12, 12 m -6, 0 a 6,6 0 1,1 12,0 a 6,6 0 1,1 -12,0"></path>
        <text fontSize="5" fill="currentColor" className="font-bold">
          <textPath href="#circlePath" startOffset="50%" textAnchor="middle">
            Coming Soon
          </textPath>
        </text>
      </svg>
    </div>
  );
};

const Socials: FC = () => {
  return (
    <div className="flex items-center justify-between">
      <ul className="list-none m-0 p-0 flex items-center gap-8">
        {socialsData.map((social, index) => (
          <li key={index}>
            {social.disabled ? (
              <div className="relative group">
                <div className="group-hover:opacity-0 group-hover:scale-90 transition-all duration-500 ease-in-out">
                  <social.icon className="text-foreground-secondary w-8 h-8" />
                </div>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 ease-in-out">
                  <ComingSoon />
                </div>
              </div>
            ) : (
              <a
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <social.icon className="w-8 h-8 text-foreground-secondary hover:text-foreground transition-colors duration-300 ease-in-out" />
              </a>
            )}
          </li>
        ))}
      </ul>
      <CTAButton />
    </div>
  );
};

const Hero: FC = () => {
  return (
    <>
      <section id="about" className="flex justify-center px-6 md:px-8 mb-8 md:mb-0">
        <Container>
          <div className="flex flex-col sm:flex-row flex-1 gap-8">
            <div className="w-full sm:w-1/2 xl:w-2/3 flex items-center justify-center xl:justify-start py-16">
              <div className="flex flex-col gap-8">
                <div className="flex flex-col font-bold text-9xl sm:text-8xl md:text-9xl">
                  <span className="border-b-8 border-accent-pink pb-1">Benji</span>
                  <span className="pt-2 text-sm text-foreground-secondary font-extralight">Benjamin Comley</span>
                </div>
                <Socials />
              </div>
              <div className="lg:h-[480px]">
                {/*Picture of me looking cool as*/}
              </div>
            </div>
            <div className="w-full sm:w-1/2 xl:w-1/3 flex flex-col justify-center">
              <div className="hidden lg:flex">
                <Heading text="Introduction"/>
              </div>
              <div className="text-2xl sm:text-xl text-center md:text-left">
                Product Designer and JavaScript Developer based in Stockholm, Sweden.
              </div>
              <div className="text-sm text-foreground-secondary text-center md:text-left mt-8">
                Benji is a passionate, fast-learning and
                humble Product Designer and JavaScript Developer that
                thrives in environments that need
                someone who takes responsibility for the
                entire user domain.
              </div>
            </div>
          </div>
        </Container>
      </section>
      <Waves />
    </>
  );
}

export default Hero