import { figma } from "@figma/code-connect";
import type { Meta, StoryObj } from "@storybook/react";
import { IconActivity, IconArrowLeft } from "icons";
import { Button, ButtonDanger, ButtonGroup } from "primitives";

const meta: Meta<typeof Button> = {
  component: Button,
  title: "SDS Primitives/Buttons",
  parameters: { layout: "centered" },
};
export default meta;

export const StoryButtonDanger: StoryObj<typeof ButtonDanger> = {
  name: "Button Danger",
  args: {
    children: "Hello world",
    variant: "danger-primary",
  },
  argTypes: {
    children: {
      control: { type: "text" },
    },
    size: {
      control: { type: "select" },
    },
    variant: {
      control: { type: "select" },
      options: ["danger-primary", "danger-subtle"],
    },
  },
  render: ({ children, ...props }) => (
    <ButtonDanger {...props}>
      <IconArrowLeft />
      {children}
      <IconActivity />
    </ButtonDanger>
  ),
};

export const StoryButtonGroup: StoryObj<typeof ButtonGroup> = {
  name: "Button Group",
  args: {
    align: "center",
  },
  argTypes: {
    align: {
      control: { type: "select" },
      options: ["center", "start", "end", "justify", "stack"],
    },
  },
  render: ({ ...props }) => (
    <ButtonGroup {...props} style={{ width: 300 }}>
      <Button variant="neutral">Cancel</Button>
      <Button variant="primary">Submit</Button>
    </ButtonGroup>
  ),
};


export const StoryButton: StoryObj<typeof Button> = {
  name: "Button",
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/e6Sjmed60NI77axindCYY3?node-id=4185-3778",
      examples: [StoryButtonDanger],
      props: {
        label: figma.string("Text Content"),
        disabled: figma.boolean("Disabled"),
      },
    },
  },
  args: {
    children: "Hello world",
    variant: "primary",
  },
  argTypes: {
    children: {
      control: { type: "text" },
    },
    size: {
      control: { type: "select" },
    },
    variant: {
      control: { type: "select" },
      options: ["primary", "neutral", "subtle"],
    },
  },
  render: ({ children, ...props }) => (
    <Button {...props}>
      <IconArrowLeft />
      {children}
      <IconActivity />
    </Button>
  ),
};

