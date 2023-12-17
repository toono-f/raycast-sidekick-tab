import { Tab } from "../interfaces";
import { List } from "@raycast/api";
import { ChromeActions } from ".";

export class ChromeListItems {
  public static TabList = TabListItem;
}

function TabListItem(props: { tab: Tab; useOriginalFavicon: boolean; onTabClosed?: () => void }) {
  return (
    <List.Item
      title={props.tab.title}
      subtitle={props.tab.urlWithoutScheme()}
      keywords={[props.tab.urlWithoutScheme()]}
      actions={<ChromeActions.TabList tab={props.tab} onTabClosed={props.onTabClosed} />}
      icon={props.useOriginalFavicon ? props.tab.favicon : props.tab.googleFavicon()}
    />
  );
}
