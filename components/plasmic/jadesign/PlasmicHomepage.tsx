// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: dSLRpGaFdpa3881hVR4F6A
// Component: ZD59k3WDIiTho
import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/host";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import Nav from "../../Nav"; // plasmic-import: uYEoDQL10wMkN/component

import { useScreenVariants as useScreenVariantsanQ10NsY6B1Jy } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: AnQ10NsY6b1jy/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_jadesign.module.css"; // plasmic-import: dSLRpGaFdpa3881hVR4F6A/projectcss
import sty from "./PlasmicHomepage.module.css"; // plasmic-import: ZD59k3WDIiTho/css

import BusinessmailLinesvgIcon from "./icons/PlasmicIcon__BusinessmailLinesvg"; // plasmic-import: noWvzcQwixbiVk/icon
import LogostwitterLinesvg2Icon from "./icons/PlasmicIcon__LogostwitterLinesvg2"; // plasmic-import: qmV2Y0hUdWUta7/icon
import LogosdribbbleLinesvgIcon from "./icons/PlasmicIcon__LogosdribbbleLinesvg"; // plasmic-import: SQK36oiboTRiKu/icon

export type PlasmicHomepage__VariantMembers = {};
export type PlasmicHomepage__VariantsArgs = {};
type VariantPropType = keyof PlasmicHomepage__VariantsArgs;
export const PlasmicHomepage__VariantProps = new Array<VariantPropType>();

export type PlasmicHomepage__ArgsType = {};
type ArgPropType = keyof PlasmicHomepage__ArgsType;
export const PlasmicHomepage__ArgProps = new Array<ArgPropType>();

export type PlasmicHomepage__OverridesType = {
  root?: p.Flex<"div">;
  context?: p.Flex<"div">;
  buttem?: p.Flex<"div">;
  links?: p.Flex<"div">;
  email?: p.Flex<"a"> & Partial<LinkProps>;
  twitter?: p.Flex<"a"> & Partial<LinkProps>;
  dribbble?: p.Flex<"a"> & Partial<LinkProps>;
};

export interface DefaultHomepageProps {}

function PlasmicHomepage__RenderFunc(props: {
  variants: PlasmicHomepage__VariantsArgs;
  args: PlasmicHomepage__ArgsType;
  overrides: PlasmicHomepage__OverridesType;

  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants
  };

  const currentUser = p.useCurrentUser?.() || {};

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsanQ10NsY6B1Jy()
  });

  return (
    <React.Fragment>
      <Head></Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
        <p.Stack
          as={"div"}
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          hasGap={true}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            projectcss.plasmic_tokens,
            sty.root
          )}
        >
          {(hasVariant(globalVariants, "screen", "mobile") ? true : true) ? (
            <div className={classNames(projectcss.all, sty.freeBox__u8CNp)}>
              <Nav className={classNames("__wab_instance", sty.nav__zpDfe)} />
            </div>
          ) : null}
          {true ? (
            <div
              data-plasmic-name={"context"}
              data-plasmic-override={overrides.context}
              className={classNames(projectcss.all, sty.context)}
            >
              {true ? (
                <div className={classNames(projectcss.all, sty.freeBox__lxi7K)}>
                  {true ? (
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__ppPbr
                      )}
                    >
                      {"I'm "}
                    </div>
                  ) : null}
                  {true ? (
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__ljj2O
                      )}
                    >
                      {"JaWu"}
                    </div>
                  ) : null}
                </div>
              ) : null}
              {true ? (
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__lt0U
                  )}
                >
                  {hasVariant(globalVariants, "screen", "mobile")
                    ? "Web Designer & UX Designer"
                    : "NIghtowl Web Designer & UX Designer"}
                </div>
              ) : null}
            </div>
          ) : null}
          {true ? (
            <div className={classNames(projectcss.all, sty.freeBox__vcoyr)}>
              <p.Stack
                as={"div"}
                data-plasmic-name={"buttem"}
                data-plasmic-override={overrides.buttem}
                hasGap={true}
                className={classNames(projectcss.all, sty.buttem)}
              >
                <div
                  data-plasmic-name={"links"}
                  data-plasmic-override={overrides.links}
                  className={classNames(projectcss.all, sty.links)}
                >
                  <div
                    className={classNames(projectcss.all, sty.freeBox__suo8V)}
                  >
                    {(
                      hasVariant(globalVariants, "screen", "mobile")
                        ? true
                        : true
                    ) ? (
                      <p.PlasmicLink
                        data-plasmic-name={"email"}
                        data-plasmic-override={overrides.email}
                        className={classNames(
                          projectcss.all,
                          projectcss.a,
                          sty.email
                        )}
                        component={Link}
                        href={"mailto:wujaja0025@hotmail.com" as const}
                        platform={"nextjs"}
                      >
                        <p.PlasmicIcon
                          PlasmicIconType={
                            hasVariant(globalVariants, "screen", "mobile")
                              ? BusinessmailLinesvgIcon
                              : BusinessmailLinesvgIcon
                          }
                          className={classNames(projectcss.all, sty.svg__cPwu1)}
                          role={"img"}
                        />
                      </p.PlasmicLink>
                    ) : null}
                    {true ? (
                      <p.PlasmicLink
                        data-plasmic-name={"twitter"}
                        data-plasmic-override={overrides.twitter}
                        className={classNames(
                          projectcss.all,
                          projectcss.a,
                          sty.twitter
                        )}
                        component={Link}
                        href={"https://twitter.com/_jawu" as const}
                        platform={"nextjs"}
                        target={"_blank" as const}
                      >
                        <LogostwitterLinesvg2Icon
                          className={classNames(
                            projectcss.all,
                            sty.svg___1QrsJ
                          )}
                          role={"img"}
                        />
                      </p.PlasmicLink>
                    ) : null}
                    {true ? (
                      <p.PlasmicLink
                        data-plasmic-name={"dribbble"}
                        data-plasmic-override={overrides.dribbble}
                        className={classNames(
                          projectcss.all,
                          projectcss.a,
                          sty.dribbble
                        )}
                        component={Link}
                        href={"https://dribbble.com/JaWu" as const}
                        platform={"nextjs"}
                        target={"_blank" as const}
                      >
                        <LogosdribbbleLinesvgIcon
                          className={classNames(projectcss.all, sty.svg__rSiNp)}
                          role={"img"}
                        />
                      </p.PlasmicLink>
                    ) : null}
                  </div>
                </div>
              </p.Stack>
            </div>
          ) : null}
        </p.Stack>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "context", "buttem", "links", "email", "twitter", "dribbble"],
  context: ["context"],
  buttem: ["buttem", "links", "email", "twitter", "dribbble"],
  links: ["links", "email", "twitter", "dribbble"],
  email: ["email"],
  twitter: ["twitter"],
  dribbble: ["dribbble"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  context: "div";
  buttem: "div";
  links: "div";
  email: "a";
  twitter: "a";
  dribbble: "a";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicHomepage__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicHomepage__VariantsArgs;
    args?: PlasmicHomepage__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicHomepage__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicHomepage__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicHomepage__ArgProps,
          internalVariantPropNames: PlasmicHomepage__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicHomepage__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHomepage";
  } else {
    func.displayName = `PlasmicHomepage.${nodeName}`;
  }
  return func;
}

export const PlasmicHomepage = Object.assign(
  // Top-level PlasmicHomepage renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    context: makeNodeComponent("context"),
    buttem: makeNodeComponent("buttem"),
    links: makeNodeComponent("links"),
    email: makeNodeComponent("email"),
    twitter: makeNodeComponent("twitter"),
    dribbble: makeNodeComponent("dribbble"),

    // Metadata about props expected for PlasmicHomepage
    internalVariantProps: PlasmicHomepage__VariantProps,
    internalArgProps: PlasmicHomepage__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicHomepage;
/* prettier-ignore-end */
