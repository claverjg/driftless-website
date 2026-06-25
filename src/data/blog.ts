import type { LucideIcon } from "lucide-react";
import { Boxes, Eye, GitBranch, ShieldCheck } from "lucide-react";

export type BlogSection = {
  heading: string;
  body: string[];
};

export type BlogCallout = {
  title: string;
  body: string;
};

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  image: {
    src: string;
    alt: string;
  };
  date: string;
  readTime: string;
  author: string;
  tags: string[];
  eyebrow: string;
  heroPoints: { label: string; value: string; icon: LucideIcon }[];
  sections: BlogSection[];
  callout: BlogCallout;
  sourceLinks: { label: string; href: string }[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "argocd-applicationset-ui-platform-teams",
    title: "Why Argo CD's ApplicationSet UI Matters for Platform Teams",
    description:
      "Argo CD 3.5 brings ApplicationSets into the UI. For platform teams, that is not just a nicer screen. It changes how teams review, explain and operate GitOps at scale.",
    image: {
      src: "/blog/argocd-applicationset-ui.png",
      alt: "Illustration of Kubernetes, Argo CD and healthy generated applications in an ocean container scene",
    },
    date: "2026-06-25",
    readTime: "5 min read",
    author: "Julian Claver",
    tags: ["Argo CD", "GitOps", "Kubernetes", "Platform Engineering"],
    eyebrow: "GitOps operations",
    heroPoints: [
      { label: "Visibility", value: "ApplicationSets become inspectable without dropping into YAML", icon: Eye },
      { label: "Scale", value: "Generated applications are shown as part of one operating model", icon: Boxes },
      { label: "Change review", value: "Preview helps teams understand blast radius before sync", icon: GitBranch },
      { label: "Control", value: "Git remains the write path while the UI improves comprehension", icon: ShieldCheck },
    ],
    sections: [
      {
        heading: "ApplicationSets were powerful, but not always visible",
        body: [
          "ApplicationSets are one of the most useful parts of Argo CD when a platform grows beyond a handful of applications. They let teams define a template once, then generate applications across clusters, environments, repositories or tenants.",
          "That model is exactly what mature platform teams want: consistency, repeatability and fewer one-off deployment definitions. The trade-off has traditionally been visibility. The platform team understands the generator logic, but the relationship between the parent ApplicationSet and the generated applications is not always obvious to everyone else.",
          "For operators, service owners and incident responders, that gap matters. When something is out of sync, degraded or pending a change, people need to understand what is managing what without reconstructing the system from command output.",
        ],
      },
      {
        heading: "The UI makes the operating model easier to explain",
        body: [
          "Argo CD 3.5 introduces a first-class ApplicationSet area in the UI. Instead of treating ApplicationSets as something you inspect through kubectl, the UI can show them alongside the Applications they generate.",
          "That matters because GitOps is not only a deployment technique. It is also an operating model. If a platform team wants application teams to trust the platform, they need a shared view of state, ownership and change.",
          "A resource tree with the ApplicationSet at the root and generated Applications beneath it gives teams a clearer mental model. It answers the simple questions quickly: which template produced this application, where is the parent, and what would change if the parent changes?",
        ],
      },
      {
        heading: "Preview is the feature platform teams should care about",
        body: [
          "The most interesting part is not the list page. It is preview. ApplicationSets are powerful because a small YAML change can generate a large set of application changes. That is also where risk enters the system.",
          "A preview workflow gives teams a way to reason about generated output before it becomes operational reality. If a selector changes, a path narrows, or a cluster target moves, the team can inspect the desired applications and the diff before sync.",
          "That is the difference between using GitOps as a deployment button and using GitOps as a controlled platform workflow. The value is not that the UI replaces code review. The value is that it makes the result of code review easier to understand.",
        ],
      },
      {
        heading: "Read-only is the right posture",
        body: [
          "The early ApplicationSet UI is read-only for cluster mutations, and that is a good thing. Git should remain the source of truth. A polished UI should not quietly become a second write path that bypasses review, policy and audit history.",
          "For enterprise environments, this distinction is important. Executives want speed, but they also want confidence. Engineers want self-service, but they do not want hidden state. A read-oriented UI gives both groups more visibility without weakening the GitOps contract.",
          "The best platform tools do not remove the need for engineering discipline. They make the disciplined path easier to follow.",
        ],
      },
      {
        heading: "What to think about before adopting it",
        body: [
          "Treat the feature as an operational visibility improvement first. Before enabling it widely, review how your teams structure ApplicationSets, naming conventions, projects, RBAC and ownership boundaries.",
          "Make sure people understand that generated Applications are still controlled through Git. The UI can help explain the relationship, but the platform should still rely on pull requests, automated checks, policy validation and controlled sync behaviour.",
          "For teams running Argo CD across multiple clusters, this is a useful moment to revisit whether the current GitOps structure is understandable to someone outside the platform team. If it is hard to explain in the UI, it is probably hard to operate during an incident.",
        ],
      },
      {
        heading: "The Driftless view",
        body: [
          "ApplicationSets have always been a strong fit for platform engineering because they turn repeated deployment patterns into a controlled interface. Bringing them into the Argo CD UI makes that interface easier to inspect and discuss.",
          "That is where GitOps platforms become more than YAML. They become operating systems for delivery: clear state, clear ownership, clear change paths and fewer surprises between commit and production.",
          "For teams building on Azure, AKS and Argo CD, this is the direction worth leaning into. Keep Git as the control plane, use automation to remove drift, and make platform state visible enough that teams can move quickly without guessing.",
        ],
      },
    ],
    callout: {
      title: "Platform takeaway",
      body:
        "The ApplicationSet UI is not about making GitOps less technical. It is about making the technical model easier to operate, review and trust at scale.",
    },
    sourceLinks: [
      {
        label: "Argo Project announcement",
        href: "https://blog.argoproj.io/exposing-applicationsets-beyond-yaml-argo-cds-applicationset-ui-a7a45f3054d2",
      },
      {
        label: "Argo CD ApplicationSet documentation",
        href: "https://argo-cd.readthedocs.io/en/latest/user-guide/application-set/",
      },
    ],
  },
];

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
