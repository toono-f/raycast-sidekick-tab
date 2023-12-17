import { Action, ActionPanel, closeMainWindow, Icon } from "@raycast/api";
import { closeActiveTab, setActiveTab } from "../actions";
import { Tab } from "../interfaces";

export class ChromeActions {
  public static TabList = TabListItemActions;
}

function TabListItemActions({ tab, onTabClosed }: { tab: Tab; onTabClosed?: () => void }) {
  return (
    <ActionPanel title={tab.title}>
      <GoToTab tab={tab} />
      <Action.CopyToClipboard title="Copy URL" content={tab.url} />
      <CloseTab tab={tab} onTabClosed={onTabClosed} />
      <ActionPanel.Section>
        <Action.CreateQuicklink
          quicklink={{ link: tab.url, name: tab.title, application: "Sidekick" }}
          shortcut={{ modifiers: ["cmd"], key: "s" }}
        />
      </ActionPanel.Section>
    </ActionPanel>
  );
}

function GoToTab(props: { tab: Tab }) {
  async function handleAction() {
    try {
      await setActiveTab(props.tab);
      await closeMainWindow();
    } catch (e) {
      if (e instanceof Error) {
        throw new Error("Issue with tab: '" + props.tab.sourceLine + "'\n" + e.message);
      } else {
        throw e;
      }
    }
  }

  return <ActionPanel.Item title="Open Tab" icon={{ source: Icon.Eye }} onAction={handleAction} />;
}

function CloseTab(props: { tab: Tab; onTabClosed?: () => void }) {
  async function handleAction() {
    await closeActiveTab(props.tab);
    await closeMainWindow();
    props.onTabClosed?.();
  }

  return (
    <ActionPanel.Item
      title="Close Tab"
      icon={{ source: Icon.XMarkCircle }}
      onAction={handleAction}
      shortcut={{ modifiers: ["cmd", "shift"], key: "w" }}
    />
  );
}
