import Container from '@/app/components/container/Container'
import Heading from '@/app/components/heading/Heading'
import ExperienceGrid from '@/app/components/experience/grid/ExperienceGrid'

const Experience = () => {
  return (
    <section id="experience" className="flex justify-center bg-background-secondary px-8 py-16 shadow-xl">
      <Container>
        <Heading text="Experience" />
        <ExperienceGrid />
      </Container>
    </section>
  );
}

export default Experience