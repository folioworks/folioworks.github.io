import type { ReactNode } from "react";
import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";
import Link from "@docusaurus/Link";

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Our vision",
    Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
    description: (
      <>
        <div>Find out what we're trying to achieve at Folio.</div>
        <Link
          className="button button--primary button--lg max-w-64"
          to="/docs/vision"
        >
          Our vision
        </Link>
      </>
    ),
  },
  {
    title: "How we work",
    Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    description: (
      <>
        <div>Learn about how we work at Folio, our values and more.</div>
        <Link
          className="button button--primary button--lg max-w-64"
          to="/docs/category/how-we-work"
        >
          How we work
        </Link>
      </>
    ),
  },
  {
    title: "Engineering Handbook",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: (
      <>
        <div>Get started engineering at Folio.</div>
        <Link
          className="button button--primary button--lg max-w-64"
          to="/docs/category/engineering"
        >
          Engineering Handbook
        </Link>
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="flex justify-center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="flex flex-col gap-3 text-center items-center justify-center">
        <Heading as="h3" className="mb-0!">
          {title}
        </Heading>
        {description}
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
