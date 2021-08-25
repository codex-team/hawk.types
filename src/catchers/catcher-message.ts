import { EventData } from "../base/event/event";
import { EventAddons } from "../base/event/addons";

/**
 * Structure describing a message sending by Catcher
 */
export default interface CatcherMessage<CatcherAddons extends EventAddons> {
  /**
   * User project's Integration Token
   */
  token: string;

  /**
   * Hawk Catcher name
   */
  catcherType: string;

  /**
   * All information about the event
   */
  payload: EventData<CatcherAddons>;
}
