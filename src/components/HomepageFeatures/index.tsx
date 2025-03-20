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
        Find out what we're trying to achieve at Folio.
        <br />
        <Link className="button button--secondary button--lg" to="/docs/vision">
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
        Learn about how we work at Folio, our values and more.
        <br />
        <Link
          className="button button--secondary button--lg"
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
        Get started engineering at Folio.
        <br />
        <Link
          className="button button--secondary button--lg"
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
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
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
