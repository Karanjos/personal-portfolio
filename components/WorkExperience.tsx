import { EXPERIENCEDETAILS } from "@/lib/data";
import Card from "./Card";
import ExperienceCard from "./ExperinceCard";
import Container from "./Container";

const WorkExperience = () => {
  return (
    <Container
      id="experience"
      tag="Experience"
      classNames="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-200"
    >
      <div className="flex flex-col items-center gap-10">
        <h4 className="text-lg font-normal my-8 text-center">
          Here is a quick summary of my work experience.
        </h4>
        {EXPERIENCEDETAILS.map((experience, index) => (
          <Card key={index}>
            <ExperienceCard {...experience} />
          </Card>
        ))}
      </div>
    </Container>
  );
};
export default WorkExperience;
