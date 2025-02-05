import Markdown from "react-markdown";

const left_side = `

[Foveated Metamers Browser](/) contains a
searchable database of the synthesized model metamers for the
paper _Foveated Metamers of the Early Visual System_
(currently in preparation).

This project investigates how human perception changes across
the visual field using behavioral experiments and
computational models of early stages of visual processing. We
use these models to investigate what people **cannot** see,
an approach that has a long history of vision science. If we
know what information people are insensitive to, we can
discard it or randomize it, and the resulting image should
appear unchanged from the original.

Our models approximate the early visual system by averaging
image statistics (such as the brightness) in regions of space
across the image. These regions grow with distance from the
center of gaze, and the rate at which they grow, called
**scaling**, is the model's only free parameter.

`.trim();

const right_side = `

In this experiment, we take 20 large images of natural scenes
and generate synthetic images that our models (with a range of
scaling values) think are identical to the natural ones. We
then show these images to humans to find the largest scaling
value where humans are unable to distinguish the two; that is,
where humans and the models are discarding the same
information. This allows us to reason about how similar
processing steps happen in the human visual system

See the Vision Science Society 2020
[conference poster](https://osf.io/aketq/) for more
details about the experiment.

This website will allow you to browse all of the synthetic
images generated for this project: you can filter by model,
scaling value, target image, and more. Please
[open an issue](https://github.com/flatironinstitute/foveated-metamers-browser/issues)
if you have any difficulties.

Please see <a href="https://osf.io/kjf75">the project's OSF page</a> 
if you wish to download all the images in bulk (as well as other associated 
files, such as the behavioral data), and the 
[project Github page](https://github.com/billbrod/foveated-metamers/)
for more details about using the code or data.

`.trim();

export default function About() {
  return (
    <section className="py-8 xl:py-16 px-4 sm:px-6 lg:px-8 bg-gamma-50 overflow-hidden">
      <div className="max-w-max lg:max-w-7xl mx-auto">
        <div className="relative">
          <svg
            className="hidden md:block absolute top-0 right-0 -mt-20 -mr-20"
            width="404"
            height="384"
            fill="none"
            viewBox="0 0 404 384"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="95e8f2de-6d30-4b7e-8159-f791729db21b"
                x="0"
                y="0"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x="0"
                  y="0"
                  width="4"
                  height="4"
                  className="text-gamma-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width="404"
              height="384"
              fill="url(#95e8f2de-6d30-4b7e-8159-f791729db21b)"
            />
          </svg>
          <svg
            className="hidden md:block absolute bottom-0 left-0 -mb-20 -ml-20"
            width="404"
            height="384"
            fill="none"
            viewBox="0 0 404 384"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="7a00fe67-0343-4a3c-8e81-c145097a3ce0"
                x="0"
                y="0"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x="0"
                  y="0"
                  width="4"
                  height="4"
                  className="text-gamma-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width="404"
              height="384"
              fill="url(#7a00fe67-0343-4a3c-8e81-c145097a3ce0)"
            />
          </svg>
          <div className="relative sm:bg-white md:p-6 rounded">
            <div className="lg:grid lg:grid-cols-2 lg:gap-6">
              <div className="prose prose-lg prose-gamma text-gamma-600 lg:max-w-none">
                <Markdown>{left_side}</Markdown>
              </div>
              <div className="mt-6 prose prose-gamma prose-lg text-gamma-600 lg:mt-0">
                <Markdown>{right_side}</Markdown>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
