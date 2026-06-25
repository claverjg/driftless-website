import {
  Activity,
  Blocks,
  CloudCog,
  GitBranch,
  LockKeyhole,
  ServerCog,
  ShieldCheck,
} from "lucide-react";

export const services = [
  {
    title: "Platform Engineering",
    description:
      "Internal developer platforms, paved roads, automation patterns, and operating models for teams shipping on Azure.",
    icon: Blocks,
  },
  {
    title: "GitOps Enablement",
    description:
      "Repository strategy, promotion flows, policy gates, and DevOps delivery models that keep environments convergent.",
    icon: GitBranch,
  },
  {
    title: "AKS & Kubernetes",
    description:
      "Production AKS architecture, workload onboarding, ingress, secrets, scaling, upgrades, and cluster reliability.",
    icon: ServerCog,
  },
  {
    title: "Infrastructure as Code",
    description:
      "IaC foundations for repeatable landing zones, network patterns, and service provisioning.",
    icon: CloudCog,
  },
  {
    title: "Cloud Operations",
    description:
      "Monitoring, runbooks, incident response, release controls, and day-two operations for SaaS and platform teams.",
    icon: Activity,
  },
  {
    title: "Security & Reliability",
    description:
      "Policy-as-code, identity hardening, resilience reviews, backup posture, and pragmatic controls that survive delivery pressure.",
    icon: ShieldCheck,
  },
] as const;

export const offers = [
  {
    title: "Platform Health Check",
    price: "Fixed scope",
    description:
      "A concise review of AKS, Azure foundations, delivery flow, observability, and operational risks.",
  },
  {
    title: "GitOps Assessment",
    price: "Fixed scope",
    description:
      "Repository structure, DevOps posture, environment promotion, policy gates, and drift controls.",
  },
  {
    title: "Azure Reliability Review",
    price: "Fixed scope",
    description:
      "Architecture, identity, networking, resilience, recovery, and incident readiness across Azure workloads.",
  },
] as const;

export const trustItems = [
  "Azure",
  "Kubernetes",
  "GitOps",
  "IaC",
  "DevOps",
  "Observability",
] as const;

export const founderCapabilities = [
  "Azure",
  "AKS",
  "GitOps",
  "IaC",
  "Workloads",
  "Monitoring",
  "Incident response",
  "SaaS operations",
] as const;

export const trustIcon = LockKeyhole;
