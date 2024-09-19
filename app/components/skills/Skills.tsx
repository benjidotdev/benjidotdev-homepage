import Container from '@/app/components/container/Container'
import Heading from '@/app/components/heading/Heading'

const Skills = () => {
  return (
    <section id="skills" className="flex justify-center py-16">
      <Container>
        <Heading text="Skills" />
        <div className="flex flex-col flex-1">
          <div className="flex gap-16 py-16">
            <div className="w-1/3 flex flex-col items-end justify-center">
              <p>Want to talk about a project?</p>
              <p>Grab a coffee?</p>
              <p>Eat Pizza?</p>
              <p>I&apos;d love to hear from you!</p>
            </div>
            <div className="w-2/3">
              <p className="flex h-full ">
                benji@benji.dev
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Skills