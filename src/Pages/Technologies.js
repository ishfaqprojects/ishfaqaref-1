import React from "react";
import { techStackDetails } from "../Details";

function Technologies() {
  const {
    html,
    css,
    js,
    react,
    redux,
    tailwind,
    bootstrap,
    sass,
    vscode,
    git,
    github,
    npm,
    postman,
    figma,
    jira,
    graphql,
    firebase,
    mui,
    next,
    typescript
  } = techStackDetails;
  return (
    <main className="container mx-auto max-width pt-10 pb-20 ">
      <section>
        <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Tech Stack
        </h1>
        <p className="text-content py-2 lg:max-w-3xl">
          Technologies I've been working with recently
        </p>
      </section>
      <section className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 items-center gap-10 pt-6">
      <img src={next} title="Nextjs" alt="" width={80} height={90}/>
      <img src={typescript} title="typescript" alt="" width={80} height={90}/>
      <img src={react} title="React" alt="" width={80} height={90}/>
      <img src={redux} title="Redux" alt="" width={80} height={90}/>
        <img src={html} title="html" alt="" width={80} height={90}/>
        <img src={css} title="CSS" alt="" width={80} height={90}/>
        <img src={js} title="JavaScript" alt="" width={80} height={90}/>
        <img src={tailwind} title="Tailwind CSS" alt="" width={80} height={90}/>
        <img src={bootstrap} title="Bootstrap" alt="" width={80} height={90}/>
        <img src={sass} title="SASS" alt="" width={80} height={90}/>
        <img src={graphql} title="GraphQL" alt="" width={80} height={90}/>
        <img src={mui} title="MUI" alt="" width={80} height={90}/>
        <img src={firebase} title="firebase" alt="" width={80} height={90}/>
        <img src={"https://avatars.githubusercontent.com/u/22632046?s=200&v=4"} title="storybook.js" alt="" width={80} height={90}/>

        
        <img src={"https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"} title="Ant Design" alt="" width={80} height={90}/>

      </section>
      <section>
        <h1 className="text-2xl pt-10 text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Tools
        </h1>
      </section>
      <section className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 items-center gap-10 pt-6">
        <img src={vscode} title="Visual Studio Code" alt="" width={80} height={90}/>
        <img src={git} title="Git" alt="Git" width={80} height={90}/>
        <img src={github} title="Github" alt="Github" width={80} height={90}/>
        {/* <img src={figma} title="Figma" alt="Figma" width={80} height={90}/> */}
        <img src={npm} title="NPM" alt="NPM" width={80} height={90}/>
        <img src={postman} title="Postman" alt="Postman" width={80} height={90}/>
        <img src={jira} title="Postman" alt="jira" width={80} height={90}/>
      </section>
    </main>
  );
}

export default Technologies;
