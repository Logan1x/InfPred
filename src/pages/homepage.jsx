import React from "react";
import Heroimg from "../images/heroimg.png";

export default function homepage() {
  // TODO : make responsive for 1280px

  return (
    <div>
      <div className="lg:w-4/5 mx-auto lg:h-page flex flex-col justify-center items-center px-3">
        <h1 className="font-bold text-2xl pt-4 lg:text-5xl text-indigo-600">
          Welcome to
          <span className="border-b-4 border-blue-500 px-2 hover:bg-transparent">
            InfPred
          </span>
        </h1>
        <div className=" flex flex-wrap lg:flex-nowrap items-center justify-center lg:space-x-4">
          <img src={Heroimg} alt="influenza illustration" />
          <p className="text-xl text-justify px-2 my-4 ">
            InfPred is a machine learning based tool to predict the zoonotic
            host tropism of the Influenza A virus with the help of its protein
            sequences, stating whether a viral strain has the potential to
            infect human hosts. This was developed to help prioritize high-risk
            viral strains for future research, aid the study of emergence or the
            risk a novel influenza virus possesses if it acquires the capability
            to spread human to human, thereby being useful for pandemic
            preparedness, disease surveillance if integrated with early warning
            systems, capacity-building activities, and determining the overall
            public-health impact.
          </p>
        </div>
      </div>
      {/* colored div */}
      <div className="w-screen  bg-gray-300 p-2 md:p-10">
        <div className="lg:w-3/5 mx-auto h-full flex flex-col justify-center items-center py-4 md:py-10 px-3 md:px-10 bg-purple-50 rounded-lg">
          <h1 className="font-bold text-2xl lg:text-5xl text-indigo-600 my-10">
            About
            <span className="border-b-4 border-blue-500 px-2 py-1 hover:bg-transparent">
              the website
            </span>
          </h1>
          <div className="text-xl  my-4 bg-white px-6 lg:px-14 py-8 shadow rounded text-center lg:text-justify">
            <p>
              Infectious diseases have shaped human civilization throughout
              history causing massive economic fallout, affecting urban
              activity, livelihood, and mortality. These diseases have had the
              potential to cause biological disasters like epidemics, pandemics
              and one of the leading causes for this is Zoonosis.
            </p>
            <p>
              The viruses can affect various hosts by jumping species, called
              reservoirs, and causing disease outbreaks. Some of them, can even
              affect humans and cause epidemics or pandemics as the strains may
              have the potential to overcome species barriers and infect humans,
              get adapted in such a way that it could spread human-to-human,
              leading to a potential pandemic, which is a cause of great
              concern.
            </p>
            <p>
              InfPred will be able to take a query sequence or a dataset of
              sequences of Influenza A proteins in .fasta format, and the
              respective protein model has to be selected by the user. The model
              will predict the zoonotic host, stating if it will infect humans
              or not, in the form of an output file in .csv format.
            </p>
          </div>
        </div>
      </div>
      <div className="w-screen bg-white p-2 md:p-10">
        <div className="lg:w-3/5 mx-auto my-4 border-2 shadow h-full flex flex-col justify-center items-center py-4 md:py-10 px-3 md:px-10  rounded-lg">
          <h2 className="font-bold text-2xl lg:text-5xl text-indigo-600 my-10">
            About The
            <span className="border-b-4 border-blue-500 px-2 py-1 hover:bg-transparent">
              Influenza A
            </span>
          </h2>
          <div className="text-xl px-6 lg:px-14 py-8 text-center lg:text-justify">
            <p>
              Influenza A virus, occurring naturally among wild aquatic birds
              like geese, swans, is responsible for causing avian influenza in
              birds, including domestic poultry, animals, and humans, although
              sporadically. Influenza A, being highly contagious, is one of the
              most infectious disease challenges worldwide, responsible for
              seasonal flu as well as pandemic flu, which is rare but
              simultaneously possible, known to cause four pandemics in recent
              history.
            </p>
            <p>
              The seasonal flu is recurring in nature, causing minor impacts as
              some people have immunity from previous exposures, vaccines are
              readily available, although obese, diabetic patients, pregnant
              women, children, elderly, and patients with chronic medical
              conditions are among the high-risk individuals. On the other hand,
              the pandemic flu is rare but has significant impacts, as people
              have little to no immunity from them, which increases the risk for
              vulnerable and healthy people
            </p>
            <p>
              The non-human viruses undergo changes so that they become capable
              of infecting humans and spreading efficiently and sustainably. In
              other words, mutations in amino acid residues can alter the
              receptor-binding site and specificity, altering receptor
              preference
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
